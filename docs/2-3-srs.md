# Software Requirements Specification (SRS)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan Andri dan persetujuan tim

## 1. Pendahuluan
### 1.1 Tujuan
Dokumen ini mendefinisikan kebutuhan fungsional dan non-fungsional aplikasi web pengelolaan tugas dan pengingat tenggat bagi mahasiswa.

### 1.2 Pengguna
Mahasiswa perguruan tinggi yang mengelola tugas dari berbagai mata kuliah. Aplikasi tidak dirancang untuk dosen atau admin kampus.

### 1.3 Lingkungan operasi
Aplikasi web yang dibuka lewat peramban. Database dan autentikasi memakai Supabase (paket gratis).

### 1.4 Dasar kebutuhan
Hasil survei 36 mahasiswa, Project Charter, dan Scope Statement.

## 2. Kebutuhan fungsional
| ID | Kebutuhan | Fitur MVP | Dasar |
|----|-----------|-----------|-------|
| FR-01 | Sistem memungkinkan pengguna mendaftar akun dengan nama, email, dan password. | Login dan daftar | Charter |
| FR-02 | Sistem memungkinkan pengguna masuk memakai email dan password. | Login dan daftar | Charter |
| FR-03 | Sistem memungkinkan pengguna keluar dari akun. | Login dan daftar | Charter |
| FR-04 | Halaman daftar tugas hanya dapat dibuka pengguna yang sudah masuk; pengguna yang belum masuk diarahkan ke halaman login. | Login dan daftar | Charter |
| FR-05 | Sistem memungkinkan pengguna menambah tugas berisi judul, mata kuliah, serta tanggal dan jam tenggat. | Kelola tugas | Charter |
| FR-06 | Sistem menampilkan daftar tugas milik pengguna, diurutkan berdasarkan tenggat. | Kelola tugas | Charter |
| FR-07 | Sistem memungkinkan pengguna mengubah isi tugas. | Kelola tugas | Charter |
| FR-08 | Sistem memungkinkan pengguna menghapus tugas. | Kelola tugas | Charter |
| FR-09 | Sistem memungkinkan pengguna mengubah status tugas: belum dikerjakan, sedang dikerjakan, selesai. | Status tugas | Charter, survei soal 10 |
| FR-10 | Sistem memungkinkan pengguna mengatur jarak waktu pengingat (dalam hari sebelum tenggat) untuk setiap tugas. | Pengingat | Charter, survei soal 11 |
| FR-11 | Sistem menampilkan pengingat di dalam aplikasi untuk tugas yang tenggatnya sudah masuk jarak pengingat dan belum selesai. | Pengingat | Charter, survei soal 10 |
| FR-12 | Pengguna hanya dapat melihat dan mengubah tugas miliknya sendiri. | Semua | Keputusan keamanan proyek (RLS) |

## 3. Kebutuhan non-fungsional
| ID | Kategori | Kebutuhan | Dasar |
|----|----------|-----------|-------|
| NFR-01 | Keamanan | Data tugas setiap pengguna dilindungi aturan Row Level Security di database sehingga tidak dapat diakses pengguna lain. | Keputusan proyek |
| NFR-02 | Keamanan | Frontend hanya memakai kunci publik (publishable key). Kunci rahasia dan password database tidak boleh ada di kode frontend maupun repositori. | Keputusan proyek, risiko no. 4 |
| NFR-03 | Keamanan | Password pengguna dikelola layanan autentikasi Supabase dan tidak disimpan oleh aplikasi sendiri. | Rekomendasi, perlu disepakati tim |
| NFR-04 | Kompatibilitas | Aplikasi dapat dibuka di peramban web pada perangkat dengan koneksi internet. | Asumsi Charter |
| NFR-05 | Kegunaan | Pengguna dapat menambah tugas dari halaman utama tanpa berpindah halaman. | Rekomendasi, perlu disepakati tim |
| NFR-06 | Keandalan | Kegagalan operasi (misalnya koneksi putus) ditampilkan sebagai pesan yang dapat dibaca pengguna, bukan halaman kosong. | Rekomendasi, perlu disepakati tim |
| NFR-07 | Ketersediaan | Ketersediaan mengikuti batas layanan gratis Supabase dan hosting gratis. | Batasan Charter, risiko no. 5 |
| NFR-08 | Pemeliharaan | Seluruh kode dan skema database tersimpan di repositori Git. | Charter |

## 4. Di luar kebutuhan
Mengikuti bagian di luar lingkup pada Scope Statement: aplikasi mobile, notifikasi di luar aplikasi, kalender seluruh tenggat, integrasi LMS atau sistem akademik, dan kolaborasi tugas kelompok.

## 5. Keterlacakan
Setiap kebutuhan fungsional (FR) akan dipetakan ke user story, product backlog, dan test case pada dokumen berikutnya.
