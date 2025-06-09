# NUSABali - Aplikasi rekomendasi wisata di kepulauan Bali

NUSABali merupakan aplikasi yang dirancang untuk memudahkan wisatawan, baik dari dalam negeri maupun mancanegara. Proyek ini dikembangkan sebagai bagian dari Tugas Akhir dalam program Studi Independen bersama Coding Camp 2025 powered by DBS Foundation.

## Deskripsi Aplikasi

NUSABali adalah platform terpadu yang dirancang untuk membantu wisatawan dalam merencanakan kunjungan wisata di Bali. Aplikasi ini menyediakan berbagai fitur unggulan untuk mempermudah pengguna dalam memilih destinasi, antara lain:
- Kategori Wisata: Menyediakan empat kategori utama, yaitu Alam, Rekreasi, Umum, dan Budaya.
- Wilayah Tujuan: Menampilkan destinasi berdasarkan wilayah administratif di Bali, mencakup 8 kabupaten dan 1 kota.
- Filter Berdasarkan Rating: Pengguna dapat menyaring tempat wisata sesuai dengan rating atau ulasan yang diinginkan.
- Tampilan Rute pada Peta: Menyediakan visualisasi rute perjalanan berdasarkan hasil rekomendasi yang telah dipilih pengguna.

## Struktur Proyek

Proyek ini terdiri dari tiga komponen utama:

### 1. NUSABali (Frontend)

Antarmuka pengguna web yang dibangun menggunakan:

- Progressive Web App (PWA) support
- Model, View, Presenter (MVP)
- Memakai Transition yang mulus dan animasi
- Mengembangkan modular bundler dari webpack
- Menggunakan HTML, CSS, JavaScript

### 2. NUSABali (Backend)

Layanan RESTful API yang menyajikan:

- Fitur rekomendasi

Teknologi yang digunakan:

- Node.js
- Hapi.js framework

### 3. Inference (Model Machine Learning)
Komponen Machine Learning untuk sistem rekomendasi destinasi wisata di Bali mencakup:
- Model Deep Learning (FCNN/MLP) yang merekomendasikan destinasi berdasarkan lokasi dan rating, disimpan dalam format .h5.
- Dashboard interaktif menggunakan Streamlit untuk menampilkan rekomendasi dan tombol rute ke Google Maps.
- Integrasi API dan backend untuk menghubungkan model dan dataset, memastikan pengalaman pengguna yang responsif di platform web.

## Instalasi dan Pengaturan Proyek

### Prasyarat

- Node.js (v14.x atau lebih baru)
- NPM atau Yarn
- Database MySQL/PostgreSQL

### Instalasi Frontend

```sh
# Masuk ke direktori frontend
cd JantungIn-FE

# Instal dependensi
npm install

# Jalankan untuk development
npm run dev

# Build untuk production
npm run build
```

### Instalasi Backend

```sh
# Masuk ke direktori backend
cd JantungIn_API

# Instal dependensi
npm install

# Jalankan server
npm start
```

### Konfigurasi Inference Model

```sh
# Masuk ke direktori inference
cd Inference

# Instal dependensi
npm install

# Jalankan untuk development
npm run dev
```

## Deployment

Aplikasi ini dirancang untuk dapat di-deploy dalam beberapa cara:

- Frontend: Netlify, Vercel, atau hosting statis lainnya
- Backend: Heroku, AWS, atau layanan cloud lainnya
- Database: Layanan database terkelola

## Tim Pengembang
NUSABali dikembangkan oleh Tim Mahasiswa dalam prgram Studi Independen Coding Camp 2025 powered by DBS Foundation

## Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).
