# Gampang.in - Sistem Pembayaran Langganan AI

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Gampang.in - Langganan AI</h3>

  <p align="center">
    Sistem pembayaran modern untuk langganan layanan AI premium!
    <br />
    <a href="https://github.com/Codenames-Ren/gampang-payment-system"><strong>Jelajahi dokumentasi »</strong></a>
    <br />
    <br />
    <a href="https://codenames-ren.github.io/gampang-payment-system">Lihat Demo</a>
    ·
    <a href="https://github.com/Codenames-Ren/gampang-payment-system/issues/new?labels=bug&template=bug-report---.md">Laporkan Bug</a>
    ·
    <a href="https://github.com/Codenames-Ren/gampang-payment-system/issues/new?labels=enhancement&template=feature-request---.md">Request Fitur</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Daftar Isi</summary>
  <ol>
    <li>
      <a href="#tentang-proyek">Tentang Proyek</a>
      <ul>
        <li><a href="#dibangun-dengan">Dibangun Dengan</a></li>
      </ul>
    </li>
    <li>
      <a href="#memulai">Memulai</a>
      <ul>
        <li><a href="#prasyarat">Prasyarat</a></li>
        <li><a href="#instalasi">Instalasi</a></li>
      </ul>
    </li>
    <li><a href="#penggunaan">Penggunaan</a></li>
    <li><a href="#fitur">Fitur</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#kontribusi">Kontribusi</a></li>
    <li><a href="#lisensi">Lisensi</a></li>
    <li><a href="#kontak">Kontak</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Tentang Proyek

**Gampang.in** adalah sistem pembayaran modern yang dirancang khusus untuk layanan langganan AI premium. Proyek ini dikembangkan sebagai bagian dari tugas akhir semester (UAS) dengan fokus pada pembuatan interface pembayaran yang intuitif dan responsif.

Sistem ini menyediakan solusi pembayaran yang komprehensif untuk berbagai layanan AI populer seperti ChatGPT Pro, Claude Pro, Gemini Pro, dan Grok AI Pro dengan berbagai opsi pembayaran dan sistem promo code yang fleksibel.

Mengapa proyek ini istimewa:

- **Interface Modern**: Desain yang bersih dan modern menggunakan Tailwind CSS
- **Multi-Payment**: Mendukung berbagai metode pembayaran (Transfer Bank, E-Wallet, Kartu Kredit, Tunai)
- **Sistem Promo**: Fitur kode promo dengan berbagai jenis diskon (persentase dan nominal tetap)
- **Responsive Design**: Tampilan yang optimal di desktop dan mobile
- **Real-time Calculation**: Kalkulasi harga otomatis dengan preview total pembayaran
- **Transaction History**: Riwayat transaksi dengan statistik lengkap

### Dibangun Dengan

Proyek ini dibangun menggunakan teknologi web modern untuk memastikan performa optimal dan kemudahan maintenance.

- [![HTML5][HTML5.com]][HTML5-url]
- [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
- [![JavaScript][JavaScript.com]][JavaScript-url]
- [![CSS3][CSS3.com]][CSS3-url]

<!-- GETTING STARTED -->

## Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut.

### Prasyarat

Pastikan Anda memiliki hal-hal berikut terinstall di sistem Anda:

- Web browser modern (Chrome, Firefox, Safari, Edge)
- Text editor atau IDE (VS Code, Sublime Text, dll.)
- Live Server extension (optional, untuk development)

### Instalasi

1. Clone repository ini

   ```sh
   git clone https://github.com/Codenames-Ren/gampang-payment-system.git
   ```

2. Masuk ke direktori proyek

   ```sh
   cd gampang-payment-system
   ```

3. Buka file `index.html` di browser Anda, atau gunakan live server:

   ```sh
   # Menggunakan Python (jika terinstall)
   python -m http.server 8000

   # Menggunakan Node.js http-server
   npx http-server
   ```

4. Akses aplikasi di `http://localhost:8000` (atau port yang ditampilkan)

<!-- USAGE EXAMPLES -->

## Penggunaan

Sistem pembayaran Gampang.in dapat digunakan dalam berbagai skenario:

### Fitur Utama

1. **Pemilihan Produk AI**:

   - ChatGPT Pro AI - Rp 35.000
   - Claude Pro AI - Rp 45.000
   - Gemini Pro AI - Rp 25.000
   - Grok AI Pro - Rp 30.000

2. **Durasi Langganan**:

   - 1 Bulan
   - 3 Bulan
   - 1 Tahun

3. **Metode Pembayaran**:

   - Transfer Bank
   - E-Wallet (OVO, GoPay, Dana)
   - Kartu Kredit
   - Bayar Tunai

4. **Sistem Promo Code**:
   - `PROAI` - Diskon 10%
   - `LEBARAN` - Potongan Rp 20.000
   - `AISTUDENT` - Diskon 20% untuk pelajar

### Cara Penggunaan

1. Isi form pemesanan dengan data pelanggan
2. Pilih produk AI yang diinginkan
3. Tentukan durasi langganan
4. Masukkan kode promo (jika ada)
5. Pilih metode pembayaran
6. Klik "Proses Pembayaran"
7. Konfirmasi pembayaran di modal yang muncul

## Fitur

- **📱 Responsive Design**: Tampilan optimal di semua perangkat
- **🎨 Modern UI/UX**: Interface yang bersih dan intuitif
- **💳 Multi-Payment**: Mendukung 4 metode pembayaran berbeda
- **🏷️ Smart Promo System**: Sistem kode promo dengan validasi otomatis
- **🤖 AI Service Integration**: Integrasi dengan layanan AI populer
- **📊 Real-time Analytics**: Statistik transaksi real-time
- **💰 Auto Calculation**: Kalkulasi harga otomatis dengan preview
- **📋 Transaction History**: Riwayat transaksi dengan detail lengkap
- **🔔 Payment Confirmation**: Modal konfirmasi pembayaran yang informatif
- **⚡ Fast Performance**: Performa cepat dengan vanilla JavaScript

<!-- ROADMAP -->

## Roadmap

- [x] Sistem pembayaran dasar
- [x] Integrasi multi-produk AI
- [x] Sistem promo code
- [x] Riwayat transaksi
- [x] Responsive design
- [x] Modal konfirmasi pembayaran
- [ ] Integrasi payment gateway real
- [ ] Sistem notifikasi email
- [ ] Dashboard admin
- [ ] Export data transaksi
- [ ] Multi-language support
  - [ ] Bahasa Indonesia
  - [ ] English
- [ ] Dark mode theme
- [ ] API integration
- [ ] User authentication

Lihat [open issues](https://github.com/Codenames-Ren/gampang-payment-system/issues) untuk daftar lengkap fitur yang diusulkan dan bug yang diketahui.

<!-- CONTRIBUTING -->

## Kontribusi

Kontribusi adalah hal yang membuat komunitas open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. Setiap kontribusi yang Anda berikan **sangat dihargai**.

Jika Anda memiliki saran untuk membuat proyek ini lebih baik, silakan fork repo ini dan buat pull request. Anda juga bisa membuka issue dengan tag "enhancement".

1. Fork Project
2. Buat Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke Branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Top contributors:

<a href="https://github.com/Codenames-Ren/gampang-payment-system/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Codenames-Ren/gampang-payment-system" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## Lisensi

Didistribusikan di bawah MIT License. Lihat `LICENSE.txt` untuk informasi lebih lanjut.

<!-- CONTACT -->

## Kontak

Codenames-Ren - [@CodeNamesRen](https://github.com/Codenames-Ren)

Project Link: [https://github.com/Codenames-Ren/gampang-payment-system](https://github.com/Codenames-Ren/gampang-payment-system)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Sumber daya dan tools yang membantu proyek ini:

- [Tailwind CSS](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)
- [Google Fonts](https://fonts.google.com)
- [GitHub Pages](https://pages.github.com)
- [Shields.io](https://shields.io)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Codenames-Ren/gampang-payment-system.svg?style=for-the-badge
[contributors-url]: https://github.com/Codenames-Ren/gampang-payment-system/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Codenames-Ren/gampang-payment-system.svg?style=for-the-badge
[forks-url]: https://github.com/Codenames-Ren/gampang-payment-system/network/members
[stars-shield]: https://img.shields.io/github/stars/Codenames-Ren/gampang-payment-system.svg?style=for-the-badge
[stars-url]: https://github.com/Codenames-Ren/gampang-payment-system/stargazers
[issues-shield]: https://img.shields.io/github/issues/Codenames-Ren/gampang-payment-system.svg?style=for-the-badge
[issues-url]: https://github.com/Codenames-Ren/gampang-payment-system/issues
[license-shield]: https://img.shields.io/github/license/Codenames-Ren/gampang-payment-system.svg?style=for-the-badge
[license-url]: https://github.com/Codenames-Ren/gampang-payment-system/blob/master/LICENSE.txt
[HTML5.com]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://html.spec.whatwg.org/
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[JavaScript.com]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS3.com]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3.org/Style/CSS/
