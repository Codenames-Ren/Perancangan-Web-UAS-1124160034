# Gampang.in - Sistem Pembayaran Langganan AI

[![Kontributor][contributors-shield]][contributors-url]
[![Fork][forks-shield]][forks-url]
[![Bintang][stars-shield]][stars-url]
[![Masalah][issues-shield]][issues-url]
[![Lisensi MIT][license-shield]][license-url]

<!-- LOGO PROYEK -->
<br />
<div align="center">
  <h3 align="center">Gampang.in - Langganan AI</h3>

  <p align="center">
    Sistem pembayaran modern untuk langganan layanan AI premium!
    <br />
    <a href="https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034"><strong>Jelajahi dokumentasi »</strong></a>
    <br />
    <br />
    <a href="https://codenames-ren.github.io/Perancangan-Web-UAS-1124160034">Lihat Demo</a>
    ·
    <a href="https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/issues/new?labels=bug&template=bug-report---.md">Laporkan Bug</a>
    ·
    <a href="https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/issues/new?labels=enhancement&template=feature-request---.md">Ajukan Fitur</a>
  </p>
</div>

<!-- DAFTAR ISI -->
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
    <li><a href="#penghargaan">Penghargaan</a></li>
  </ol>
</details>

<!-- TENTANG PROYEK -->

## Tentang Proyek

**Gampang.in** adalah sistem pembayaran modern yang dirancang khusus untuk layanan langganan AI premium. Proyek ini dikembangkan sebagai bagian dari tugas akhir semester (UAS) dengan fokus pada pembuatan antarmuka pembayaran yang intuitif dan responsif.

Sistem ini menyediakan solusi pembayaran yang komprehensif untuk berbagai layanan AI populer seperti ChatGPT Pro, Claude Pro, Gemini Pro, dan Grok AI Pro dengan berbagai opsi pembayaran dan sistem kode promo yang fleksibel.

Mengapa proyek ini istimewa:

- **Antarmuka Modern**: Desain yang bersih dan modern menggunakan Tailwind CSS
- **Multi-Pembayaran**: Mendukung berbagai metode pembayaran (Transfer Bank, E-Wallet, Kartu Kredit, Tunai)
- **Sistem Promo**: Fitur kode promo dengan berbagai jenis diskon (persentase dan nominal tetap)
- **Desain Responsif**: Tampilan yang optimal di desktop dan mobile
- **Kalkulasi Real-time**: Kalkulasi harga otomatis dengan pratinjau total pembayaran
- **Riwayat Transaksi**: Riwayat transaksi dengan statistik lengkap

### Dibangun Dengan

Proyek ini dibangun menggunakan teknologi web modern untuk memastikan kinerja optimal dan kemudahan pemeliharaan.

- [![HTML5][HTML5.com]][HTML5-url]
- [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
- [![JavaScript][JavaScript.com]][JavaScript-url]
- [![CSS3][CSS3.com]][CSS3-url]

<!-- MEMULAI -->

## Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut.

### Prasyarat

Pastikan Anda memiliki hal-hal berikut terpasang di sistem Anda:

- Browser web modern (Chrome, Firefox, Safari, Edge)
- Editor teks atau IDE (VS Code, Sublime Text, dll.)
- Ekstensi Live Server (opsional, untuk pengembangan)

### Instalasi

1. Clone repository ini

   ```sh
   git clone https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034.git
   ```

2. Masuk ke direktori proyek

   ```sh
   cd Perancangan-Web-UAS-1124160034
   ```

3. Buka file `index.html` di browser Anda, atau gunakan live server:

   ```sh
   # Menggunakan Python (jika terpasang)
   python -m http.server 8000

   # Menggunakan Node.js http-server
   npx http-server
   ```

4. Akses aplikasi di `http://localhost:8000` (atau port yang ditampilkan)

<!-- CONTOH PENGGUNAAN -->

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

4. **Sistem Kode Promo**:
   - `PROAI` - Diskon 10%
   - `LEBARAN` - Potongan Rp 20.000
   - `AISTUDENT` - Diskon 20% untuk pelajar

### Cara Penggunaan

1. Isi formulir pemesanan dengan data pelanggan
2. Pilih produk AI yang diinginkan
3. Tentukan durasi langganan
4. Masukkan kode promo (jika ada)
5. Pilih metode pembayaran
6. Klik "Proses Pembayaran"
7. Konfirmasi pembayaran di modal yang muncul

## Fitur

- **📱 Desain Responsif**: Tampilan optimal di semua perangkat
- **🎨 UI/UX Modern**: Antarmuka yang bersih dan intuitif
- **💳 Multi-Pembayaran**: Mendukung 4 metode pembayaran berbeda
- **🏷️ Sistem Promo Pintar**: Sistem kode promo dengan validasi otomatis
- **🤖 Integrasi Layanan AI**: Integrasi dengan layanan AI populer
- **📊 Analitik Real-time**: Statistik transaksi real-time
- **💰 Kalkulasi Otomatis**: Kalkulasi harga otomatis dengan pratinjau
- **📋 Riwayat Transaksi**: Riwayat transaksi dengan detail lengkap
- **🔔 Konfirmasi Pembayaran**: Modal konfirmasi pembayaran yang informatif
- **⚡ Kinerja Cepat**: Kinerja cepat dengan vanilla JavaScript

<!-- ROADMAP -->

## Roadmap

- [x] Sistem pembayaran dasar
- [x] Integrasi multi-produk AI
- [x] Sistem kode promo
- [x] Riwayat transaksi
- [x] Desain responsif
- [x] Modal konfirmasi pembayaran
- [ ] Integrasi payment gateway nyata
- [ ] Sistem notifikasi email
- [ ] Dashboard admin
- [ ] Ekspor data transaksi
- [ ] Dukungan multi-bahasa
  - [ ] Bahasa Indonesia
  - [ ] Bahasa Inggris
- [ ] Tema mode gelap
- [ ] Integrasi API
- [ ] Autentikasi pengguna

Lihat [masalah terbuka](https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/issues) untuk daftar lengkap fitur yang diusulkan dan bug yang diketahui.

<!-- KONTRIBUSI -->

## Kontribusi

Kontribusi adalah hal yang membuat komunitas open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. Setiap kontribusi yang Anda berikan **sangat dihargai**.

Jika Anda memiliki saran untuk membuat proyek ini lebih baik, silakan fork repo ini dan buat pull request. Anda juga bisa membuka issue dengan tag "enhancement".

1. Fork Proyek
2. Buat Feature Branch (`git checkout -b feature/FiturMenakjubkan`)
3. Commit Perubahan (`git commit -m 'Tambah FiturMenakjubkan'`)
4. Push ke Branch (`git push origin feature/FiturMenakjubkan`)
5. Buka Pull Request

### Kontributor teratas:

<a href="https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Codenames-Ren/Perancangan-Web-UAS-1124160034" alt="gambar contrib.rocks" />
</a>

<!-- LISENSI -->

## Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE.txt` untuk informasi lebih lanjut.

<!-- KONTAK -->

## Kontak

Codenames-Ren - [@CodeNamesRen](https://github.com/Codenames-Ren)

Link Proyek: [https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034](https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034)

<!-- PENGHARGAAN -->

## Penghargaan

Sumber daya dan alat yang membantu proyek ini:

- [Tailwind CSS](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)
- [Google Fonts](https://fonts.google.com)
- [GitHub Pages](https://pages.github.com)
- [Shields.io](https://shields.io)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- TAUTAN & GAMBAR MARKDOWN -->

[contributors-shield]: https://img.shields.io/github/contributors/Codenames-Ren/Perancangan-Web-UAS-1124160034.svg?style=for-the-badge
[contributors-url]: https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Codenames-Ren/Perancangan-Web-UAS-1124160034.svg?style=for-the-badge
[forks-url]: https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/network/members
[stars-shield]: https://img.shields.io/github/stars/Codenames-Ren/Perancangan-Web-UAS-1124160034.svg?style=for-the-badge
[stars-url]: https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/stargazers
[issues-shield]: https://img.shields.io/github/issues/Codenames-Ren/Perancangan-Web-UAS-1124160034.svg?style=for-the-badge
[issues-url]: https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/issues
[license-shield]: https://img.shields.io/github/license/Codenames-Ren/Perancangan-Web-UAS-1124160034.svg?style=for-the-badge
[license-url]: https://github.com/Codenames-Ren/Perancangan-Web-UAS-1124160034/blob/master/LICENSE.txt
[HTML5.com]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://html.spec.whatwg.org/
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[JavaScript.com]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS3.com]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3.org/Style/CSS/
