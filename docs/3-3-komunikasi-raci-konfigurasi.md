# Rencana Komunikasi, RACI, dan Manajemen Konfigurasi (Tahap E)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan tim
Dibuat: 14 November 2026 (Sprint 2, hari ke-6)
Catatan: susunan awal dibuat dengan bantuan AI berdasarkan cara kerja tim yang tercatat selama Sprint 1 dan 2 (papan GitHub Projects, riwayat commit, dan dokumen proyek), lalu diperiksa tim. Bagian bertanda [ISI] dilengkapi tim.

## 1. Pembagian Peran

| Anggota | Peran | Tanggung jawab utama | File yang dipegang |
|---------|-------|----------------------|--------------------|
| Andreyal Nasution | Ketua proyek (Project Manager) dan Developer | Mengatur sprint dan papan, logika aplikasi (JavaScript) dan Supabase, deployment | frontend/js/, backend/ |
| Jhon Cholosian Manik | Developer frontend dan Tester | Tampilan halaman (HTML dan CSS), pengujian fitur | frontend/*.html, frontend/css/ |
| Andri Ghihary Sitepu | Analis, Dokumentasi, UI/UX, dan Tester | Kebutuhan dan dokumen proyek, desain mockup, UAT | docs/ |

## 2. Rencana Komunikasi

| Kegiatan | Tujuan | Peserta | Frekuensi | Media |
|----------|--------|---------|-----------|-------|
| Koordinasi harian | Membagi kartu hari itu dan membahas kendala | Seluruh tim | Setiap hari kerja sprint | Bertemu langsung atau [ISI: grup chat] |
| Sprint planning | Memilih kartu untuk sprint | Seluruh tim | Awal tiap sprint | Bertemu langsung, papan GitHub Projects |
| Review dan retrospective | Menilai hasil sprint dan perbaikan cara kerja | Seluruh tim | Akhir tiap sprint | Bertemu langsung, dicatat di folder docs |
| Pembaruan progres | Menunjukkan status pekerjaan | Seluruh tim | Setiap kali status kartu berubah | Papan GitHub Projects (Todo, In Progress, Done) |
| Konsultasi dosen | Menanyakan ketentuan tugas | Ketua proyek, dosen pengampu | Bila diperlukan | [ISI: media yang dipakai] |
| Laporan akhir dan presentasi | Menyampaikan hasil proyek | Seluruh tim, dosen pengampu | Akhir proyek | Laporan PDF dan presentasi |

Aturan komunikasi:
1. Setiap pekerjaan memiliki kartu di papan, dan nomor kartu (PB-xx) ditulis di pesan commit.
2. Kendala yang menghambat lebih dari satu hari disampaikan pada koordinasi harian.
3. Keputusan tim dicatat di dokumen terkait beserta tanggalnya.

## 3. Matriks RACI

Keterangan: R = Responsible (mengerjakan), A = Accountable (penanggung jawab akhir), C = Consulted (dimintai masukan), I = Informed (diberi tahu).

| Kegiatan | Andre | Jhon | Andri | Dosen pengampu |
|----------|-------|------|-------|----------------|
| Project Charter dan Scope | A, R | C | R | I |
| Kebutuhan (SRS dan user stories) | A | C | R | I |
| Desain UI/UX (mockup) | A | C | R | - |
| Tampilan halaman (HTML dan CSS) | A | R | C | - |
| Logika aplikasi dan database Supabase | A, R | C | I | - |
| Pengelolaan papan sprint | A, R | I | I | - |
| Pengelolaan repositori GitHub | A, R | C | C | - |
| Penyusunan jadwal, biaya, dan risiko | A | C | R | I |
| Pengujian test case | A | R | R | - |
| UAT | A | C | R | I |
| Deployment | A, R | C | I | I |
| Laporan akhir | A | R | R | I |
| Presentasi | A, R | R | R | I |

Setiap kegiatan memiliki tepat satu A. Pelaksana (R) bisa berubah bila anggota berhalangan, dan perubahan itu dicatat di kartu papan (contoh: kartu PB-11 dikerjakan Andre pada 9 November).

## 4. Manajemen Konfigurasi dan Strategi Branching Git

### 4.1 Repositori
- Repositori GitHub private: platform-pengelolaan-tugas.
- Struktur folder: frontend (HTML, CSS, JavaScript), backend (skema SQL Supabase), docs (dokumen proyek).

### 4.2 Strategi branching
Tim memakai satu cabang utama (main) dan setiap anggota melakukan commit langsung ke main (trunk-based sederhana). Cabang fitur terpisah tidak dipakai karena tim kecil, waktu proyek singkat (18 hari), dan pembagian file per anggota sudah mencegah sebagian besar konflik.

Aturan yang diterapkan:
1. Jalankan git pull sebelum mulai bekerja dan sebelum git push.
2. Ubah hanya file milik sendiri. Bila perlu mengubah file anggota lain, beri tahu pemiliknya terlebih dahulu.
3. Satu commit untuk satu pekerjaan yang utuh dan sudah diuji.
4. Pesan commit diawali nomor kartu, contoh: "PB-14: form tambah/ubah tugas jadi pop-up (tahap 3b)".
5. Perintah Git dijalankan satu per satu, dan git status diperiksa sebelum commit.
6. Bila push gagal karena koneksi, ulangi git push. Commit lokal tetap aman.

### 4.3 Item konfigurasi
| Item | Lokasi | Pengelola |
|------|--------|-----------|
| Kode halaman dan tampilan | frontend/*.html, frontend/css/ | Jhon |
| Kode logika aplikasi | frontend/js/ | Andre |
| Skema database dan aturan RLS | backend/ dan dasbor Supabase | Andre |
| Dokumen proyek | docs/ | Andri |
| Papan sprint | GitHub Projects | Andre |

### 4.4 Keamanan konfigurasi
- Hanya kunci publik (publishable key) Supabase yang boleh ada di frontend (config.js).
- Kunci rahasia (service_role atau secret key) dan password database tidak boleh ditulis di kode, repositori, maupun chat.
- Akses data dibatasi dengan Row Level Security (RLS) sehingga setiap pengguna hanya melihat tugasnya sendiri.

## 5. Standar Kode

### 5.1 Umum
- Penamaan variabel dan fungsi memakai bahasa Indonesia dengan gaya camelCase, contoh: muatTugas, tampilkanPengingat.
- ID elemen HTML memakai huruf kecil dengan tanda hubung, contoh: tugas-judul, btn-tambah.
- Indentasi dua spasi, file disimpan dengan pengodean UTF-8.
- Komentar singkat di atas bagian kode yang penting, diawali nomor kartu bila kode dibuat untuk kartu tertentu (contoh: // PB-13: ...).

### 5.2 JavaScript
- Memakai const dan let (tidak memakai var).
- Komunikasi dengan Supabase memakai async/await, dan setiap galat ditampilkan sebagai pesan yang dapat dibaca pengguna.
- ID elemen HTML yang dipakai JavaScript tidak boleh diubah tanpa memberi tahu pemilik file JavaScript.

### 5.3 HTML dan CSS
- Warna dan ukuran utama memakai variabel CSS (contoh: --warna-utama).
- Kelas CSS memakai huruf kecil dengan tanda hubung, contoh: tugas-item, badge-selesai.
- Tampilan diperiksa pada layar laptop dan layar ponsel.

### 5.4 Pemeriksaan sebelum commit
1. Fitur berjalan di Live Server tanpa galat di Console.
2. Fitur lama yang terkait diuji ulang.
3. Tidak ada kunci rahasia atau password di file yang di-commit.

## 6. Hal yang perlu diputuskan tim
1. Lengkapi bagian [ISI] pada rencana komunikasi (media koordinasi dan media konsultasi dosen).
2. Setuju atau tidak dengan pembagian R dan A pada matriks RACI.
3. Setuju atau tidak dengan aturan branching dan standar kode.