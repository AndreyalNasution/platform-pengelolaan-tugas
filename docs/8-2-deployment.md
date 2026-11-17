# Catatan Deployment (Tahap H)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Tanggal: 17 November 2026 (Sprint 3)
Kartu: PB-24
Catatan: catatan ini disusun dengan bantuan AI berdasarkan langkah yang dilakukan tim.

## 1. Alamat aplikasi
https://main.d2yykzt469m44j.amplifyapp.com

## 2. Platform dan cara kerja
- Hosting: AWS Amplify, tersambung ke repositori GitHub platform-pengelolaan-tugas pada branch main.
- Setiap push ke branch main memperbarui versi online.
- Basis data dan autentikasi tetap memakai Supabase. Hosting hanya menyajikan file HTML, CSS, dan JavaScript di folder frontend.
- Kunci yang ada di frontend hanya publishable key Supabase. Data pengguna dilindungi Row Level Security (diuji pada TC-22 dan TC-23).

## 3. Riwayat pemilihan platform
1. Netlify dipertimbangkan, tetapi paket gratisnya memakai kredit yang terpakai pada setiap deploy, sehingga berisiko habis karena tim sering melakukan push.
2. Vercel dicoba. Deploy berhasil tetapi alamat utama menampilkan 404 karena pengaturan folder sumber (Root Directory) belum diarahkan ke folder frontend.
3. Tim memilih AWS Amplify, dan aplikasi berhasil diakses.

## 4. Pengujian setelah deployment (17 November 2026)
Diuji oleh Andre memakai HP dengan koneksi data seluler:
| Langkah | Hasil |
|---------|-------|
| Membuka alamat aplikasi | Halaman login tampil |
| Masuk dengan akun uji | Berhasil |
| Menambah tugas dengan tenggat besok | Tugas tampil di daftar dan di panel pengingat |
| Mengubah status tugas | Berhasil |
| Keluar | Kembali ke halaman login |

## 5. Hal yang perlu dijaga
- Akun AWS dipantau lewat menu Billing dan diberi peringatan anggaran agar tidak muncul biaya di luar batas gratis.
- Alamat aplikasi ini dipakai untuk UAT dan dicantumkan di laporan akhir.