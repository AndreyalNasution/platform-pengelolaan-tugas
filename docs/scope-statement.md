# Scope Statement

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan Andri dan persetujuan tim

## 1. Deskripsi lingkup
Pengembangan aplikasi web untuk mahasiswa perguruan tinggi yang membantu mencatat, memantau, dan mengingat tenggat tugas dari berbagai mata kuliah. Supabase dipakai sebagai database dan layanan backend.

## 2. Luaran proyek (deliverables)
1. Aplikasi web MVP dengan 4 fitur inti: (a) login dan pendaftaran akun, (b) pengelolaan tugas (tambah, ubah, hapus) berisi mata kuliah serta tanggal dan jam tenggat, (c) status tugas (belum dikerjakan, sedang dikerjakan, selesai), (d) pengingat tenggat dengan jarak waktu yang dapat diatur pengguna, ditampilkan di dalam aplikasi.
2. Dokumen manajemen proyek sesuai tahap A sampai I pada panduan mata kuliah.
3. Pengujian: minimal 20 test case dan 1 sesi UAT dengan minimal 5 responden.
4. Aplikasi ter-deploy dan dapat dibuka lewat tautan.
5. Dokumentasi pengguna dan dokumentasi teknis.
6. Kode sumber di repositori Git (GitHub).

## 3. Di luar lingkup
1. Aplikasi mobile (Android/iOS).
2. Notifikasi di luar aplikasi (email, WhatsApp, atau push notification).
3. Kalender seluruh tenggat tugas (hanya dipilih 5,6% responden survei; dicatat sebagai pengembangan lanjutan).
4. Integrasi dengan LMS kampus atau sistem akademik.
5. Fitur kolaborasi tugas kelompok.

## 4. Kriteria penerimaan
| No | Kriteria | Ukuran |
|----|----------|--------|
| 1 | Fitur inti | 4 fitur MVP berjalan |
| 2 | Dapat didemokan | Aplikasi ter-deploy dan dapat dibuka lewat tautan |
| 3 | Pengujian | Minimal 20 test case dijalankan dan hasilnya tercatat |
| 4 | UAT | 1 sesi dengan minimal 5 calon pengguna |
| 5 | Waktu | Tiga sprint selesai dalam 18 hari (3-20 November 2026) |
| 6 | Kontribusi tim | Ketiga anggota punya riwayat commit di GitHub |
| 7 | Penerimaan pengguna (target tim) | Minimal 80% responden UAT menilai aplikasi membantu |
| 8 | Fungsi inti stabil (target tim) | Seluruh test case fitur inti lulus, atau sisa bug dicatat di bug log |

## 5. Batasan
1. Waktu: tiga sprint, masing-masing 6 hari, total 18 hari.
2. Tim: tiga orang dengan pengalaman pengembangan web yang masih terbatas.
3. Biaya dan layanan: memakai layanan gratis (paket gratis Supabase dan hosting gratis).
4. Data survei: kebutuhan pengguna berasal dari 36 responden, mayoritas mahasiswa semester 3.
5. Pengguna: diutamakan mahasiswa; tidak dirancang untuk dosen atau admin kampus.

## 6. Asumsi
1. Pengguna memiliki perangkat dengan koneksi internet dan peramban web.
2. Pengguna memasukkan sendiri data tugasnya.
3. Layanan gratis yang dipakai tetap tersedia selama pengembangan.
