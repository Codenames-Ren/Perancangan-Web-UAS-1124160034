// ===== DATA & VARIABEL GLOBAL =====
let transactions = [];
let transactionIdCounter = 1;
let currentDiscount = 0;
let appliedPromoCode = "";

// Mapping metode pembayaran dengan warna
const paymentMethodColors = {
  transfer: "bg-blue-100 text-blue-800",
  ewallet: "bg-purple-100 text-purple-800",
  credit: "bg-orange-100 text-orange-800",
  cash: "bg-green-100 text-green-800",
};

// Mapping nama metode pembayaran
const paymentMethodNames = {
  transfer: "Transfer Bank",
  ewallet: "E-Wallet",
  credit: "Kartu Kredit",
  cash: "Bayar Tunai",
};

// ===== MENDAPATKAN ELEMEN DOM =====
const paymentForm = document.getElementById("paymentForm");
const productSelect = document.getElementById("productSelect");
const quantity = document.getElementById("quantity");
const promoCode = document.getElementById("promoCode");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoMessage = document.getElementById("promoMessage");

// Elemen untuk menampilkan total
const subtotalEl = document.getElementById("subtotal");
const discountEl = document.getElementById("discount");
const discountRow = document.getElementById("discountRow");
const totalAmountEl = document.getElementById("totalAmount");

// Elemen riwayat transaksi
const transactionList = document.getElementById("transactionList");
const emptyState = document.getElementById("emptyState");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Elemen statistik
const totalTransactionsEl = document.getElementById("totalTransactions");
const totalRevenueEl = document.getElementById("totalRevenue");
const avgTransactionEl = document.getElementById("avgTransaction");

// Modal
const paymentModal = document.getElementById("paymentModal");
const paymentDetails = document.getElementById("paymentDetails");
const closeModalBtn = document.getElementById("closeModalBtn");

// ===== FUNGSI UTILITY =====

// Format mata uang Rupiah
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Format waktu
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Generate transaction ID
function generateTransactionId() {
  return (
    "TRX" +
    Date.now().toString().substr(-8) +
    Math.random().toString(36).substr(2, 4).toUpperCase()
  );
}

// ===== FUNGSI KALKULASI =====

// Hitung subtotal
function calculateSubtotal() {
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  if (!selectedOption || !selectedOption.dataset.price) return 0;

  const price = parseInt(selectedOption.dataset.price);
  const qty = parseInt(quantity.value) || 1;
  return price * qty;
}

// Hitung diskon
function calculateDiscount(subtotal, promoData) {
  if (!promoData) return 0;

  if (promoData.type === "percentage") {
    return Math.round((subtotal * promoData.discount) / 100);
  } else {
    return Math.min(promoData.discount, subtotal);
  }
}

const promoCodes = {
  PROAI: {
    type: "percentage",
    discount: 10,
    description: "(Diskon dadakan)",
  },

  LEBARAN: {
    type: "fixed",
    discount: 20000,
    description: "(potongan hari raya 50.000)",
  },

  AISTUDENT: {
    type: "percentage",
    discount: 20,
    description: "(Diskon langganan untuk pelajar)",
  },
};

// Update tampilan total
function updateTotal() {
  const subtotal = calculateSubtotal();
  const promoData = appliedPromoCode ? promoCodes[appliedPromoCode] : null;
  const discount = calculateDiscount(subtotal, promoData);
  const total = subtotal - discount;

  subtotalEl.textContent = formatCurrency(subtotal);

  if (discount > 0) {
    discountEl.textContent = "-" + formatCurrency(discount);
    discountRow.classList.remove("hidden");
  } else {
    discountRow.classList.add("hidden");
  }

  totalAmountEl.textContent = formatCurrency(total);
  currentDiscount = discount;
}

// ===== FUNGSI PROMO CODE =====

// Terapkan kode promo
function applyPromoCode() {
  const code = promoCode.value.trim().toUpperCase();

  if (!code) {
    showPromoMessage("Masukkan kode promo terlebih dahulu", "error");
    return;
  }

  if (!promoCodes[code]) {
    showPromoMessage("Kode promo tidak valid", "error");
    return;
  }

  appliedPromoCode = code;
  updateTotal();
  showPromoMessage(
    `Kode promo "${code}" berhasil diterapkan! ${promoCodes[code].description}`,
    "success"
  );
  promoCode.disabled = true;
  applyPromoBtn.textContent = "Diterapkan";
  applyPromoBtn.disabled = true;
  applyPromoBtn.classList.remove("bg-green-500", "hover:bg-green-600");
  applyPromoBtn.classList.add("bg-gray-400");
}

// Tampilkan pesan promo
function showPromoMessage(message, type) {
  promoMessage.textContent = message;
  promoMessage.classList.remove("hidden", "text-red-500", "text-green-500");
  promoMessage.classList.add(
    type === "error" ? "text-red-500" : "text-green-500"
  );
}

// Reset promo code
function resetPromoCode() {
  appliedPromoCode = "";
  currentDiscount = 0;
  promoCode.value = "";
  promoCode.disabled = false;
  applyPromoBtn.textContent = "Terapkan";
  applyPromoBtn.disabled = false;
  applyPromoBtn.classList.remove("bg-gray-400");
  applyPromoBtn.classList.add("bg-green-500", "hover:bg-green-600");
  promoMessage.classList.add("hidden");
  updateTotal();
}

// ===== FUNGSI TRANSAKSI =====

// Proses pembayaran
function processPayment(formData) {
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const subtotal = calculateSubtotal();
  const total = subtotal - currentDiscount;

  const transaction = {
    id: generateTransactionId(),
    customerName: formData.get("customerName"),
    customerEmail: formData.get("customerEmail"),
    product: selectedOption.textContent,
    productValue: selectedOption.value,
    quantity: parseInt(formData.get("quantity")),
    paymentMethod: formData.get("paymentMethod"),
    promoCode: appliedPromoCode,
    subtotal: subtotal,
    discount: currentDiscount,
    total: total,
    timestamp: new Date(),
    time: getCurrentTime(),
    status: "success",
  };

  transactions.push(transaction);
  return transaction;
}

// Tampilkan modal konfirmasi
function showPaymentModal(transaction) {
  paymentDetails.innerHTML = `
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span class="text-gray-600">ID Transaksi:</span>
                        <span class="font-medium">${transaction.id}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Nama:</span>
                        <span class="font-medium">${
                          transaction.customerName
                        }</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Produk:</span>
                        <span class="font-medium">${transaction.product}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Lama Berlangganan:</span>
                        <span class="font-medium">${
                          transaction.quantity
                        } Bulan</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Metode:</span>
                        <span class="font-medium">${
                          paymentMethodNames[transaction.paymentMethod]
                        }</span>
                    </div>
                    ${
                      transaction.discount > 0
                        ? `
                    <div class="flex justify-between text-green-600">
                        <span>Diskon:</span>
                        <span class="font-medium">-${formatCurrency(
                          transaction.discount
                        )}</span>
                    </div>
                    `
                        : ""
                    }
                    <hr class="my-2">
                    <div class="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span class="text-green-600">${formatCurrency(
                          transaction.total
                        )}</span>
                    </div>
                </div>
            `;

  paymentModal.classList.remove("hidden");
  paymentModal.classList.add("flex");
}

// Tutup modal
function closeModal() {
  paymentModal.classList.add("hidden");
  paymentModal.classList.remove("flex");
}

// ===== FUNGSI RIWAYAT TRANSAKSI =====

// Buat elemen transaksi
function createTransactionElement(transaction) {
  const template = document.getElementById("transactionTemplate");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".transaction-customer").textContent =
    transaction.customerName;
  clone.querySelector(
    ".transaction-product"
  ).textContent = `${transaction.product} (${transaction.quantity}x)`;
  clone.querySelector(".transaction-amount").textContent = formatCurrency(
    transaction.total
  );
  clone.querySelector(".transaction-time").textContent = transaction.time;

  const methodEl = clone.querySelector(".transaction-method");
  methodEl.textContent = paymentMethodNames[transaction.paymentMethod];
  methodEl.className += " " + paymentMethodColors[transaction.paymentMethod];

  return clone;
}

// Render daftar transaksi
function renderTransactions() {
  // Hapus semua transaksi dari DOM
  const transactionItems = transactionList.querySelectorAll(
    "[data-transaction-id]"
  );
  transactionItems.forEach((item) => item.remove());

  if (transactions.length === 0) {
    emptyState.style.display = "block";
    clearHistoryBtn.classList.add("hidden");
  } else {
    emptyState.style.display = "none";
    clearHistoryBtn.classList.remove("hidden");

    // Tampilkan transaksi terbaru di atas
    const sortedTransactions = [...transactions].reverse();
    sortedTransactions.forEach((transaction) => {
      const transactionElement = createTransactionElement(transaction);
      // Tambahkan ID untuk referensi
      const container = transactionElement.querySelector("div");
      container.setAttribute("data-transaction-id", transaction.id);
      transactionList.appendChild(transactionElement);
    });
  }

  updateStatistics();
}

// Update statistik
function updateStatistics() {
  const totalTrans = transactions.length;
  const totalRev = transactions.reduce((sum, t) => sum + t.total, 0);
  const avgTrans = totalTrans > 0 ? totalRev / totalTrans : 0;

  totalTransactionsEl.textContent = totalTrans;
  totalRevenueEl.textContent = formatCurrency(totalRev);
  avgTransactionEl.textContent = formatCurrency(avgTrans);
}

// Hapus semua riwayat
function clearAllHistory() {
  if (transactions.length === 0) return;

  if (confirm("Apakah Anda yakin ingin menghapus semua riwayat transaksi?")) {
    transactions = [];
    renderTransactions();
  }
}

// Reset form
function resetForm() {
  paymentForm.reset();
  resetPromoCode();
  updateTotal();
}

// ===== EVENT LISTENERS =====

// Form submission
paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(paymentForm);

  // Validasi metode pembayaran
  if (!formData.get("paymentMethod")) {
    alert("Silakan pilih metode pembayaran");
    return;
  }

  // Validasi total > 0
  const total = calculateSubtotal() - currentDiscount;
  if (total <= 0) {
    alert("Total pembayaran harus lebih dari 0");
    return;
  }

  try {
    const transaction = processPayment(formData);
    showPaymentModal(transaction);
    renderTransactions();
    resetForm();
  } catch (error) {
    alert("Terjadi kesalahan saat memproses pembayaran");
    console.error("Payment error:", error);
  }
});

// Product select dan quantity change
productSelect.addEventListener("change", updateTotal);
quantity.addEventListener("input", updateTotal);

// Promo code
applyPromoBtn.addEventListener("click", applyPromoCode);
promoCode.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    applyPromoCode();
  }
});

// Modal controls
closeModalBtn.addEventListener("click", closeModal);
paymentModal.addEventListener("click", function (e) {
  if (e.target === paymentModal) {
    closeModal();
  }
});

// Clear history
clearHistoryBtn.addEventListener("click", clearAllHistory);

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !paymentModal.classList.contains("hidden")) {
    closeModal();
  }
});

// ===== INISIALISASI =====

// Initialize app
function initApp() {
  updateTotal();
  renderTransactions();

  // Focus ke input nama saat halaman dimuat
  document.getElementById("customerName").focus();
}

// Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", initApp);
