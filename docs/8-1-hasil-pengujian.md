# Hasil Pengujian dan Bug Log (Tahap H)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Sprint 3: 15-20 November 2026
Acuan: Test Plan pada docs/3-2-risiko-mutu-test-plan.md
Catatan: lembar ini disiapkan dengan bantuan AI. Kolom hasil diisi oleh penguji saat test case benar-benar dijalankan. Tidak ada hasil yang diisi sebelum pengujian.

## 1. Lingkungan pengujian
- Peramban: [ISI, misalnya Chrome atau Edge]
- Cara menjalankan: Live Server (lokal), lalu tautan deployment setelah aplikasi ter-deploy
- Akun uji: akun A dan akun B (email tidak dicantumkan di dokumen)

## 2. Hasil test case
Status: Lulus, Gagal, atau Belum diuji. Bila Gagal, catat nomor bug di kolom keterangan.

| ID | Kebutuhan | Skenario | Hasil yang diharapkan | Hasil aktual | Status | Penguji | Tanggal | Keterangan |
|----|-----------|----------|-----------------------|--------------|--------|---------|---------|------------|
| TC-01 | FR-01 | Daftar dengan nama, email, dan password yang valid | Akun terbuat dan pengguna dapat melanjutkan ke halaman tugas atau login | | Belum diuji | | | |
| TC-02 | FR-01 | Daftar dengan email yang sudah terdaftar | Muncul pesan gagal, akun tidak ganda | | Belum diuji | | | |
| TC-03 | FR-01 | Daftar dengan password yang tidak memenuhi aturan layanan autentikasi | Pendaftaran ditolak dengan pesan yang dapat dibaca | | Belum diuji | | | |
| TC-04 | FR-02 | Masuk dengan email dan password yang benar | Halaman daftar tugas terbuka | Halaman daftar tugas terbuka | Lulus | Andre | 15 Nov 2026 | Diuji ulang 16 Nov 2026 pada tampilan login baru: Lulus |
| TC-05 | FR-02 | Masuk dengan password yang salah | Muncul pesan gagal, tetap di halaman login | Muncul pesan gagal, tetap di halaman login | Lulus | Andre | 15 Nov 2026 | Diuji ulang 16 Nov 2026 pada tampilan login baru: Lulus |
| TC-06 | FR-03 | Klik tombol Keluar | Sesi berakhir dan kembali ke halaman login | Kembali ke halaman login | Lulus | Andre | 15 Nov 2026 | |
| TC-07 | FR-04 | Membuka halaman tugas tanpa login | Diarahkan ke halaman login | Membuka /frontend/tugas.html setelah keluar diarahkan ke halaman login | Lulus | Andre | 15 Nov 2026 | |
| TC-08 | FR-05 | Menambah tugas dengan judul, mata kuliah, dan tenggat lewat pop-up | Tugas muncul di daftar | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-09 | FR-05 | Menambah tugas tanpa judul atau tanpa tenggat | Muncul pesan "Judul dan tenggat wajib diisi." di pop-up, tugas tidak tersimpan | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-10 | FR-06 | Menambah beberapa tugas dengan tenggat berbeda | Dalam tiap kelompok status, daftar terurut dari tenggat terdekat | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-11 | FR-07 | Mengubah judul, mata kuliah, dan tenggat lewat menu Ubah lalu menyimpan | Perubahan tampil dan tetap ada setelah halaman dimuat ulang | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-12 | FR-07 | Memulai ubah lalu menekan Batal | Pop-up tertutup dan data tugas tidak berubah | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-13 | FR-08 | Menghapus tugas dan menyetujui konfirmasi | Tugas hilang dan tidak muncul lagi setelah dimuat ulang | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-14 | FR-08 | Menghapus tugas lalu membatalkan konfirmasi | Tugas tetap ada | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-15 | FR-09 | Mengubah status dari belum ke sedang lalu selesai | Status berubah, tugas pindah kelompok, dan tetap setelah dimuat ulang | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-16 | FR-10 | Mengisi jarak pengingat 5 hari saat menambah tugas | Nilai tersimpan dan tampil pada tugas | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-17 | FR-10 | Mengisi jarak pengingat tidak valid (-1 atau 400) | Ditolak dengan pesan, tugas tidak tersimpan | Sesuai hasil yang diharapkan | Lulus | Jhon | 16 Nov 2026 | |
| TC-18 | FR-11 | Tugas belum selesai dengan tenggat di dalam jarak pengingat | Muncul di panel pengingat dengan label hari ini atau H-n | Sesuai hasil yang diharapkan | Lulus | Andri | 16 Nov 2026 | |
| TC-19 | FR-11 | Tugas dengan tenggat di luar jarak pengingat | Tidak muncul di panel pengingat | Sesuai hasil yang diharapkan | Lulus | Andri | 16 Nov 2026 | |
| TC-20 | FR-11 | Tugas dalam jarak pengingat yang diubah statusnya menjadi selesai | Hilang dari panel pengingat | Sesuai hasil yang diharapkan | Lulus | Andri | 16 Nov 2026 | |
| TC-21 | FR-11 | Tugas belum selesai yang tenggatnya sudah lewat | Muncul di panel dengan label terlambat | Sesuai hasil yang diharapkan | Lulus | Andri | 16 Nov 2026 | |
| TC-22 | FR-12, NFR-01 | Masuk dengan akun B setelah akun A memiliki tugas | Akun B tidak melihat tugas akun A | Daftar tugas akun B tidak memuat tugas akun A | Lulus | Andre | 16 Nov 2026 | |
| TC-23 | FR-12, NFR-01 | Akun B mencoba mengubah atau menghapus tugas akun A | Operasi tidak mengubah data akun A | Dari akun B, perintah update dan delete lewat Console ke id tugas akun A menghasilkan data kosong; tugas uji akun A tetap utuh | Lulus | Andre | 16 Nov 2026 | Percobaan pertama keliru dijalankan masih di akun A sehingga satu tugas akun A terhapus (bukan kebocoran data); pengujian diulang memakai tugas uji khusus "UJI TC-23" |
| TC-24 | NFR-06 | Memuat halaman tugas saat koneksi ke layanan gagal | Muncul pesan galat yang dapat dibaca, bukan halaman kosong | Koneksi ke Supabase diblokir lewat DevTools; tampil pesan "Gagal memuat tugas: TypeError: Failed to fetch" | Lulus | Andre | 16 Nov 2026 | Pesan masih berbahasa teknis, dicatat sebagai BUG-01 |

## 3. Ringkasan hasil
- Jumlah test case: 24
- Lulus: [ISI]
- Gagal: [ISI]
- Belum diuji: [ISI]

## 4. Bug log
Tingkat keparahan mengikuti klasifikasi pada docs/3-2 (Kritis, Mayor, Minor).

| ID | Test case | Deskripsi bug | Tingkat | Ditemukan (tanggal, oleh) | Status | Diperbaiki (tanggal, commit) |
|----|-----------|---------------|---------|---------------------------|--------|------------------------------|
| BUG-01 | TC-24 | Saat koneksi ke server gagal, pesan yang tampil masih berbahasa teknis ("TypeError: Failed to fetch") dan muncul kartu kosong di bawahnya | Minor | 16 Nov 2026, Andre | Terbuka | |
| BUG-02 | | | | | | |

## 5. Defect density
Defect density = jumlah bug valid / (jumlah baris kode / 1000).
- Jumlah bug valid: [ISI]
- Jumlah baris kode (HTML, CSS, JavaScript buatan tim): [ISI]
- Defect density: [ISI] bug per 1000 baris kode