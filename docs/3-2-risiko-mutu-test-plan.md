# Risiko, Rencana Mutu, Test Plan, dan Definition of Done (Tahap D)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan Andri dan persetujuan tim
Dibuat: 12 November 2026 (Sprint 2, hari ke-4)
Catatan: susunan awal dibuat dengan bantuan AI dari dokumen yang sudah ada (Project Charter, SRS, Scope Statement, Product Backlog, jadwal Tahap C) dan kejadian yang tercatat selama proyek, lalu diperiksa tim. Kolom pemilik risiko adalah usulan. Kolom hasil pada test case sengaja dikosongkan dan diisi saat pengujian dijalankan.

## 1. Risk Register

### 1.1 Skala penilaian
Kemungkinan dan dampak dinilai Rendah = 1, Sedang = 2, Tinggi = 3. Skor risiko = kemungkinan x dampak (1 sampai 9). Skor 6 sampai 9 dianggap tinggi, 3 sampai 4 sedang, 1 sampai 2 rendah.

### 1.2 Daftar risiko

| ID | Risiko | Kategori | Kemungkinan | Dampak | Skor | Respons dan mitigasi | Pemilik (usulan) | Keterangan status |
|----|--------|----------|-------------|--------|------|----------------------|------------------|-------------------|
| R-01 | Waktu pengembangan singkat (18 hari) sehingga fitur tidak selesai | Jadwal | Sedang (2) | Tinggi (3) | 6 | Membatasi pada 4 fitur MVP, mengerjakan sesuai sprint backlog, memantau jalur kritis | Andre | Dipantau. Fitur inti Sprint 2 selesai tepat atau lebih awal dari rencana |
| R-02 | Pengalaman anggota dalam pengembangan web masih terbatas | Sumber daya | Tinggi (3) | Sedang (2) | 6 | Memakai teknologi sederhana (HTML, CSS, JavaScript, Supabase), pengerjaan bertahap dan diuji tiap langkah | Andre | Dipantau |
| R-03 | Konflik file saat dua anggota mengubah file yang sama di Git | Teknis (konfigurasi) | Sedang (2) | Sedang (2) | 4 | Pembagian file per anggota, git pull sebelum bekerja dan sebelum push | Jhon | Belum ada konflik yang tercatat |
| R-04 | Kebocoran kunci atau data (kunci rahasia terunggah ke repo) | Teknis (keamanan) | Rendah (1) | Tinggi (3) | 3 | Hanya kunci publik di frontend, aturan RLS aktif, repo private, kunci rahasia tidak dipakai di kode | Andre | Dipantau |
| R-05 | Batas layanan gratis Supabase (kapasitas atau proyek dijeda otomatis bila lama tidak aktif) | Teknis (teknologi) | Sedang (2) | Sedang (2) | 4 | Memantau penggunaan, membuka proyek secara berkala, menyimpan skema SQL di repositori | Andre | Pernah terlihat gejalanya: halaman gagal memuat data (Failed to fetch) saat proyek Supabase belum aktif |
| R-06 | Anggota terlambat atau tidak aktif sehingga tugas tertunda | Sumber daya | Sedang (2) | Sedang (2) | 4 | Pembagian tugas jelas di papan sprint, komunikasi rutin, tugas dapat dialihkan antar anggota | Andre | Pernah terjadi 9 November: dua anggota berhalangan, kartu PB-11 dikerjakan Andre |
| R-07 | Konfirmasi email dimatikan selama pengembangan sehingga akun bisa dibuat dengan email palsu | Teknis (keamanan) | Tinggi (3) | Rendah (1) | 3 | Dicatat sebagai batasan MVP, konfirmasi email diaktifkan jika aplikasi dipakai luas | Andre | Diterima sebagai batasan |
| R-08 | Koneksi internet tidak stabil sehingga pengiriman ke GitHub atau pemuatan data dari Supabase gagal | Teknis (integrasi) | Tinggi (3) | Sedang (2) | 6 | Commit lokal selalu aman, push diulang setelah koneksi pulih, pesan galat ditampilkan di aplikasi | Semua anggota | Pernah terjadi: push gagal karena koneksi putus (HTTP 408), berhasil setelah diulang |
| R-09 | Kesalahan operasi Git (lupa git add atau commit, perubahan lokal menghalangi pull) | Teknis (konfigurasi) | Tinggi (3) | Sedang (2) | 6 | Perintah Git dijalankan satu per satu, cek git status sebelum commit, commit sebelum pull bila ada perubahan lokal | Semua anggota | Pernah terjadi beberapa kali pada Sprint 1 dan 2; tidak ada data hilang |
| R-10 | Dokumen tidak konsisten dengan keputusan atau produk (misalnya angka jadwal berubah) | Mutu | Sedang (2) | Sedang (2) | 4 | Pemeriksaan silang dokumen sebelum dianggap final, Bab 1 dirapikan pada kartu PB-15 | Andri | Pernah terjadi: Bab 1 masih memuat sisa angka 14 hari setelah jadwal berubah |
| R-11 | Perubahan tampilan merusak fitur karena JavaScript bergantung pada ID elemen HTML | Teknis (integrasi) | Sedang (2) | Sedang (2) | 4 | Daftar ID elemen dijaga sebagai kontrak antara tampilan dan kode, fitur lama diuji ulang setelah perubahan tampilan | Jhon | Dipantau; tampilan Tahap 1 dan 2 diuji tanpa merusak fitur lama |
| R-12 | Responden UAT kurang dari 5 orang atau sulit dikumpulkan | Mutu | Sedang (2) | Sedang (2) | 4 | Menghubungi calon responden sebelum 18 November, menyiapkan daftar cadangan | Andri | Belum terjadi |

Jumlah risiko: 12 (lebih dari minimal 8). R-01 sampai R-07 berasal dari Project Charter. R-08 sampai R-12 ditambahkan berdasarkan kejadian dan kebutuhan selama proyek. Risiko teknis yang dicakup: teknologi (R-05), integrasi (R-08, R-11), keamanan (R-04, R-07).

### 1.3 Peninjauan
Risk Register ditinjau ulang di akhir tiap sprint (pada review dan retrospective). Perubahan skor atau risiko baru dicatat dengan tanggalnya.

## 2. Rencana Mutu

### 2.1 Sasaran mutu
Sasaran mengikuti kriteria penerimaan pada Scope Statement:
1. Empat fitur MVP berjalan: akun, kelola tugas, status tugas, dan pengingat tenggat.
2. Seluruh test case fitur inti lulus, atau sisa bug dicatat di bug log.
3. Minimal 20 test case dijalankan dan hasilnya tercatat.
4. Satu sesi UAT dengan minimal 5 calon pengguna, dengan target tim minimal 80% responden menilai aplikasi membantu.
5. Data tugas tiap pengguna tidak dapat diakses pengguna lain.

### 2.2 Kegiatan penjaminan mutu
| Kegiatan | Keterangan | Penanggung jawab (usulan) |
|----------|------------|---------------------------|
| Pengujian per kartu | Setiap kartu fitur diuji manual sebelum dianggap selesai (lihat Definition of Done) | Pembuat kartu |
| Pengujian terjadwal | Pelaksanaan test case pada Sprint 3 | Andri dan Jhon |
| UAT | Satu sesi dengan minimal 5 responden | Andri |
| Pemeriksaan dokumen | Setiap dokumen diperiksa minimal satu anggota lain sebelum final | Anggota non-penulis |
| Pelacakan perubahan | Pesan commit memuat nomor kartu, perubahan jadwal dicatat di change request log | Andre |

### 2.3 Metrik mutu
Metrik yang dicatat saat pengujian: jumlah test case lulus dan gagal, jumlah bug berdasarkan tingkat keparahan, defect density (bug valid per ribu baris kode, dihitung saat pengujian), dan hasil UAT. Target angka untuk defect density belum ditetapkan dan menjadi keputusan tim (bagian 5).

### 2.4 Klasifikasi bug
| Tingkat | Arti | Contoh |
|---------|------|--------|
| Kritis | Fitur inti tidak dapat dipakai atau data pengguna bocor | Login gagal untuk semua akun, tugas satu akun terlihat akun lain |
| Mayor | Fitur berjalan tetapi hasilnya salah | Perubahan tugas tidak tersimpan |
| Minor | Tampilan atau teks kurang tepat, fitur tetap jalan | Teks pesan salah ketik |

## 3. Test Plan

### 3.1 Tujuan dan ruang lingkup
Memastikan empat fitur MVP memenuhi kebutuhan fungsional FR-01 sampai FR-12 dan kebutuhan non-fungsional yang dapat diuji (NFR-01, NFR-06) pada SRS. Di luar lingkup: aplikasi mobile, notifikasi di luar aplikasi, kalender, integrasi LMS, dan kolaborasi tugas kelompok (sesuai Scope Statement).

### 3.2 Pendekatan
Pengujian fungsional manual (kotak hitam) melalui antarmuka aplikasi, ditambah pengujian keamanan data dengan dua akun berbeda dan satu sesi UAT. Pengujian otomatis tidak dilakukan karena keterbatasan waktu dan pengalaman tim.

### 3.3 Lingkungan
- Peramban web (Edge atau Chrome) pada laptop anggota tim.
- Aplikasi dijalankan lewat Live Server untuk pengujian lokal, lalu pada tautan deployment setelah aplikasi ter-deploy.
- Database dan autentikasi memakai proyek Supabase proyek ini, dengan dua akun uji.

### 3.4 Jadwal dan peran (rencana)
| Kegiatan | Waktu | Pelaksana |
|----------|-------|-----------|
| Pengujian test case | 15-17 November 2026 | Andri dan Jhon |
| Perbaikan bug | 17-19 November 2026 | Andre (dan pembuat fitur terkait) |
| UAT | 18 November 2026 | Andri, dengan minimal 5 responden |

### 3.5 Kriteria lulus
Test case lulus bila hasil aktual sama dengan hasil yang diharapkan. Pengujian dianggap memenuhi sasaran bila seluruh test case fitur inti lulus atau sisa bug dicatat di bug log beserta tingkat keparahannya.

### 3.6 Daftar test case (rencana)
Kolom hasil aktual, status, dan penguji diisi saat pengujian. Belum ada hasil yang diklaim pada dokumen ini.

| ID | Kebutuhan | Skenario | Hasil yang diharapkan |
|----|-----------|----------|-----------------------|
| TC-01 | FR-01 | Daftar dengan nama, email, dan password yang valid | Akun terbuat dan pengguna dapat melanjutkan ke halaman tugas atau login |
| TC-02 | FR-01 | Daftar dengan email yang sudah terdaftar | Muncul pesan gagal, akun tidak ganda |
| TC-03 | FR-01 | Daftar dengan password yang tidak memenuhi aturan layanan autentikasi | Pendaftaran ditolak dengan pesan yang dapat dibaca |
| TC-04 | FR-02 | Masuk dengan email dan password yang benar | Halaman daftar tugas terbuka |
| TC-05 | FR-02 | Masuk dengan password yang salah | Muncul pesan gagal, tetap di halaman login |
| TC-06 | FR-03 | Klik tombol Keluar | Sesi berakhir dan kembali ke halaman login |
| TC-07 | FR-04 | Membuka halaman tugas tanpa login | Diarahkan ke halaman login |
| TC-08 | FR-05 | Menambah tugas dengan judul, mata kuliah, dan tenggat | Tugas muncul di daftar |
| TC-09 | FR-05 | Menambah tugas tanpa judul atau tanpa tenggat | Muncul pesan "Judul dan tenggat wajib diisi.", tugas tidak tersimpan |
| TC-10 | FR-06 | Menambah beberapa tugas dengan tenggat berbeda | Daftar terurut dari tenggat terdekat |
| TC-11 | FR-07 | Mengubah judul, mata kuliah, dan tenggat lalu menyimpan | Perubahan tampil di daftar dan tetap ada setelah halaman dimuat ulang |
| TC-12 | FR-07 | Memulai ubah lalu menekan Batal | Form kosong kembali dan data tugas tidak berubah |
| TC-13 | FR-08 | Menghapus tugas dan menyetujui konfirmasi | Tugas hilang dan tidak muncul lagi setelah dimuat ulang |
| TC-14 | FR-08 | Menghapus tugas lalu membatalkan konfirmasi | Tugas tetap ada |
| TC-15 | FR-09 | Mengubah status dari belum ke sedang lalu selesai | Status berubah dan tetap setelah dimuat ulang |
| TC-16 | FR-10 | Mengisi jarak pengingat 5 hari saat menambah tugas | Nilai tersimpan dan tampil pada tugas |
| TC-17 | FR-10 | Mengisi jarak pengingat tidak valid (-1 atau 400) | Ditolak dengan pesan, tugas tidak tersimpan |
| TC-18 | FR-11 | Tugas belum selesai dengan tenggat di dalam jarak pengingat | Muncul di panel pengingat dengan label hari ini atau H-n |
| TC-19 | FR-11 | Tugas dengan tenggat di luar jarak pengingat | Tidak muncul di panel pengingat |
| TC-20 | FR-11 | Tugas dalam jarak pengingat yang diubah statusnya menjadi selesai | Hilang dari panel pengingat |
| TC-21 | FR-11 | Tugas belum selesai yang tenggatnya sudah lewat | Muncul di panel dengan label terlambat |
| TC-22 | FR-12, NFR-01 | Masuk dengan akun B setelah akun A memiliki tugas | Akun B tidak melihat tugas akun A |
| TC-23 | FR-12, NFR-01 | Akun B mencoba mengubah atau menghapus tugas akun A (misalnya lewat Console dengan id tugas A) | Operasi tidak mengubah data akun A |
| TC-24 | NFR-06 | Memuat halaman tugas saat koneksi ke layanan gagal | Muncul pesan galat yang dapat dibaca, bukan halaman kosong |

Jumlah test case: 24 (minimal 20).

## 4. Definition of Done

### 4.1 Untuk kartu fitur (kode)
Sebuah kartu fitur dianggap selesai bila seluruh butir ini terpenuhi:
1. Kode sudah di-commit dan di-push ke GitHub, dengan pesan commit yang memuat nomor kartu.
2. Fitur berjalan di Live Server tanpa tulisan galat di Console.
3. Fitur sudah diuji manual terhadap kriteria penerimaan user story yang terkait, dan hasilnya dicatat.
4. Fitur lama yang terkait diuji ulang dan tidak rusak.
5. Tidak ada kunci rahasia atau password di kode maupun repositori.
6. Pemakaian AI (bila ada) dicatat: tanggal, bagian, dan cara verifikasinya.
7. Kartu dipindahkan ke Done pada hari pekerjaannya benar-benar selesai.

### 4.2 Untuk kartu dokumen
1. File tersimpan di folder docs dan ter-commit dengan nomor kartu.
2. Isi diperiksa minimal satu anggota selain penulis.
3. Angka, tanggal, dan nama konsisten dengan dokumen lain dan dengan papan sprint.
4. Bagian yang masih asumsi atau usulan ditandai jelas.
5. Pemakaian AI (bila ada) dicatat untuk lampiran pengungkapan AI.

### 4.3 Untuk sprint dan rilis
1. Seluruh kartu Must pada sprint berstatus Done, atau yang belum selesai dicatat beserta alasannya.
2. Review dan retrospective sprint dicatat di dokumen.
3. Risk Register dan change request log diperbarui.

## 5. Hal yang perlu diputuskan tim
1. Setuju atau tidak dengan skala risiko, skor, dan pemilik risiko pada bagian 1.
2. Menetapkan target defect density (misalnya batas maksimum bug per ribu baris kode) atau cukup dilaporkan tanpa target.
3. Setuju atau tidak dengan daftar 24 test case, dan siapa menguji nomor berapa.
4. Setuju atau tidak dengan butir Definition of Done pada bagian 4.