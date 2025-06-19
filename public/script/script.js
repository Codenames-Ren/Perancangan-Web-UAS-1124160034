// ===== DATA & VARIABEL GLOBAL =====
let transactions = [];
let transactionIdCounter = 1;
let currentDiscount = 0;
let appliedPromoCode = "";
let isDarkMode = false;

class DarkModeManager {
  constructor() {
    this.darkModeToggle = document.getElementById("darkModeToggle");
    this.htmlElement = document.documentElement;
    this.userPreference = null; // Track user's manual preference
    this.init();
  }

  init() {
    // Check if user has a saved preference
    const savedPreference = localStorage.getItem("darkMode");

    if (savedPreference !== null) {
      // User has a saved preference
      this.userPreference = savedPreference === "true";
    } else {
      // No saved preference, use system preference
      this.userPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
    }

    // Apply the preference
    if (this.userPreference) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }

    // Event listener untuk toggle button
    this.darkModeToggle.addEventListener("click", () => {
      this.toggleDarkMode();
    });

    // Listen for system theme changes only if user hasn't set a preference
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        // Only follow system preference if user hasn't manually set a preference
        if (this.userPreference === null) {
          if (e.matches) {
            this.enableDarkMode();
          } else {
            this.disableDarkMode();
          }
        }
      });
  }

  enableDarkMode() {
    this.htmlElement.classList.add("dark");
    isDarkMode = true;
  }

  disableDarkMode() {
    this.htmlElement.classList.remove("dark");
    isDarkMode = false;
  }

  toggleDarkMode() {
    if (this.htmlElement.classList.contains("dark")) {
      this.disableDarkMode();
      this.userPreference = false;
    } else {
      this.enableDarkMode();
      this.userPreference = true;
    }

    // Save user preference
    localStorage.setItem("darkMode", this.userPreference.toString());
  }
}

// Mapping metode pembayaran dengan warna
const paymentMethodColors = {
  transfer: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  ewallet:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
  credit:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
  cash: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
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

//Bikin kode promo
const promoCodes = {
  PROAI: {
    type: "percentage",
    discount: 10,
    description: "(Diskon dadakan)",
  },

  LEBARAN: {
    type: "fixed",
    discount: 20000,
    description: "(potongan hari raya 20.000)",
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
  applyPromoBtn.classList.remove(
    "bg-orange-500",
    "hover:bg-orange-600",
    "dark:bg-orange-600",
    "dark:hover:bg-orange-700"
  );
  applyPromoBtn.classList.add("bg-gray-400", "dark:bg-gray-600");
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
  applyPromoBtn.classList.remove("bg-gray-400", "dark:bg-gray-600");
  applyPromoBtn.classList.add(
    "bg-orange-500",
    "hover:bg-orange-600",
    "dark:bg-orange-600",
    "dark:hover:bg-orange-700"
  );
  promoMessage.classList.add("hidden");
  updateTotal();
}

// ===== FUNGSI MODAL =====

// Tampilkan modal konfirmasi
function showPaymentModal(transaction) {
  paymentDetails.innerHTML = `
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span class="text-gray-600 dark:text-gray-400">ID Transaksi:</span>
                        <span class="font-medium text-gray-800 dark:text-white">${
                          transaction.id
                        }</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600 dark:text-gray-400">Nama:</span>
                        <span class="font-medium text-gray-800 dark:text-white">${
                          transaction.customerName
                        }</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600 dark:text-gray-400">Produk:</span>
                        <span class="font-medium text-gray-800 dark:text-white">${
                          transaction.product
                        }</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600 dark:text-gray-400">Lama Berlangganan:</span>
                        <span class="font-medium text-gray-800 dark:text-white">${
                          transaction.quantity
                        } Bulan</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600 dark:text-gray-400">Metode:</span>
                        <span class="font-medium text-gray-800 dark:text-white">${
                          paymentMethodNames[transaction.paymentMethod]
                        }</span>
                    </div>
                    ${
                      transaction.discount > 0
                        ? `
                    <div class="flex justify-between text-green-600 dark:text-green-400">
                        <span>Diskon:</span>
                        <span class="font-medium">-${formatCurrency(
                          transaction.discount
                        )}</span>
                    </div>
                    `
                        : ""
                    }
                    <hr class="my-2 border-gray-300 dark:border-gray-600">
                    <div class="flex justify-between text-lg font-semibold">
                        <span class="text-gray-800 dark:text-white">Total:</span>
                        <span class="text-green-600 dark:text-green-400">${formatCurrency(
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

// ===== FUNGSI TRANSAKSI =====

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

  // Simpan transaksi terlebih dahulu
  transactions.push(transaction);

  // Tampilkan SweetAlert TANPA callback untuk modal
  Swal.fire({
    title: "Pesanan Berhasil!",
    text: `Transaksi ${
      transaction.id
    } telah diproses dengan total ${formatCurrency(transaction.total)}`,
    icon: "success",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
      popup: "swal-popup-fix",
      confirmButton: "swal-confirm-fix",
    },
  }).then((result) => {
    // Modal akan muncul SETELAH SweetAlert ditutup
    if (result.isConfirmed) {
      // Delay kecil untuk memastikan SweetAlert tertutup sempurna
      setTimeout(() => {
        showPaymentModal(transaction);
      }, 100);
    }
  });

  return transaction;
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

  Swal.fire({
    title: "Hapus Riwayat Transaksi",
    text: "Apakah Anda yakin ingin menghapus semua riwayat transaksi?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Hapus!",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      // Hapus data
      transactions = [];
      renderTransactions();
      updateStatistics(); // Jangan lupa update statistik

      // Tampilkan notifikasi sukses
      Swal.fire({
        title: "Terhapus!",
        text: "Semua riwayat transaksi berhasil dihapus.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
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
    Swal.fire({
      title: "Warning",
      text: "Silakan pilih metode pembayaran terlebih dahulu.",
      icon: "warning",
    });
    return;
  }

  // Validasi total > 0
  const total = calculateSubtotal() - currentDiscount;
  if (total <= 0) {
    Swal.fire({
      title: "Warning",
      text: "Total pembayaran harus lebih dari 0!",
      icon: "warning",
    });
    return;
  }

  try {
    const transaction = processPayment(formData);
    renderTransactions();
    resetForm();
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Terjadi kesalahan saat memproses pembayaran",
      icon: "error",
    });
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
  // Initialize dark mode manager
  const darkModeManager = new DarkModeManager();

  updateTotal();
  renderTransactions();

  // Focus ke input nama saat halaman dimuat
  document.getElementById("customerName").focus();
}

// Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", initApp);
