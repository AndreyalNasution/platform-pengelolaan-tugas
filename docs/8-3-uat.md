# User Acceptance Testing (UAT)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Kartu: PB-22
Catatan: rencana dan kuesioner disusun dengan bantuan AI lalu diperiksa tim. Hasil diolah (dengan bantuan AI) dari jawaban responden pada Google Form, dicatat apa adanya. Data lengkap ada di file Hasil_UAT_TugasKu.xlsx.

## 1. Tujuan
Memastikan calon pengguna (mahasiswa) dapat memakai empat fitur utama aplikasi dan menilai aplikasi membantu mengelola tugas kuliah.

## 2. Pelaksanaan
- Waktu: 20 November 2026.
- Cara: daring. Responden mencoba aplikasi https://pengelolatugas.my.id di perangkat masing-masing, lalu mengisi Google Form "Uji Coba Aplikasi TugasKu".
- Responden: 8 mahasiswa di luar tim proyek (PTIK, Ilmu Komunikasi, Sastra Indonesia, dan Akuntansi).
- Skala penilaian: 1 = Sangat tidak setuju, 2 = Tidak setuju, 3 = Netral, 4 = Setuju, 5 = Sangat setuju.

## 3. Skenario yang dijalankan responden
1. Membuat akun baru, lalu masuk.
2. Menambah 3 tugas kuliah dengan tenggat berbeda.
3. Mengubah salah satu tugas.
4. Mengubah status tugas menjadi Sedang Dikerjakan, lalu Selesai.
5. Melihat panel Pengingat tenggat.
6. Menghapus satu tugas, lalu keluar.

## 4. Kriteria penerimaan
- Setiap skenario dapat diselesaikan oleh responden.
- Minimal 80% responden memberi nilai 4 atau 5 pada pernyataan "Secara keseluruhan, aplikasi ini membantu saya mengelola tugas kuliah".

## 5. Hasil per responden
Kolom nilai: A = membuat akun dan masuk mudah, B = status tugas mudah dipahami, C = panel pengingat membantu, D = tampilan rapi, E = nyaman di perangkat, F = aplikasi membantu mengelola tugas kuliah.

| No | Responden (inisial) | Prodi/angkatan | Perangkat | Skenario gagal | A | B | C | D | E | F | Kendala |
|----|---------------------|----------------|-----------|----------------|---|---|---|---|---|---|---------|
| 1 | AM | PTIK 2024 | HP | Tidak ada | 4 | 5 | 4 | 3 | 3 | 5 | Tidak ada |
| 2 | AIN | PTIK 2024 | Laptop | Tidak ada | 5 | 3 | 5 | 3 | 4 | 5 | Tidak ada |
| 3 | AS | Ilmu Komunikasi 2025 | HP | Tidak ada | 4 | 4 | 5 | 3 | 5 | 4 | Tidak ada |
| 4 | KN | Sastra Indonesia 2025 | HP | Tidak ada | 5 | 4 | 4 | 3 | 4 | 5 | Tidak ada |
| 5 | AMR | Sastra Indonesia 2025 | HP | Tidak ada | 4 | 4 | 4 | 4 | 4 | 4 | Tidak ada |
| 6 | KAH | Sastra Indonesia 2025 | HP | Tidak ada | 5 | 5 | 5 | 5 | 5 | 5 | Tidak ada |
| 7 | S | PTIK 2025 | HP | Tidak ada | 5 | 4 | 4 | 3 | 3 | 4 | Tidak ada |
| 8 | AMa | Akuntansi | HP | Tidak ada | 3 | 4 | 4 | 4 | 4 | 4 | Tidak ada |

## 6. Rekap penilaian
| Pernyataan | Rata-rata (1-5) | % nilai 4-5 |
|------------|-----------------|-------------|
| A. Membuat akun dan masuk itu mudah | 4,38 | 87,5% |
| B. Status tugas mudah dipahami | 4,13 | 87,5% |
| C. Panel pengingat membantu | 4,38 | 100% |
| D. Tampilan aplikasi rapi dan enak dilihat | 3,50 | 37,5% |
| E. Aplikasi nyaman dipakai di perangkat | 4,00 | 75% |
| F. Aplikasi membantu mengelola tugas kuliah | 4,50 | 100% |

Persentase responden yang memberi nilai 4 atau 5 pada pernyataan F: 100% (8 dari 8).

Catatan instrumen: pernyataan "Menambah dan mengubah tugas itu mudah" yang direncanakan tidak tercantum pada Google Form karena terlewat saat pembuatan form, sehingga rekap memuat 6 pernyataan.

## 7. Saran responden
| Saran | Jumlah responden | Tindak lanjut |
|-------|------------------|---------------|
| Menampilkan persentase penyelesaian tugas | 4 | Pengembangan lanjutan (di luar lingkup MVP) |
| Kategori prioritas tugas (Tinggi, Sedang, Rendah) | 2 | Pengembangan lanjutan |
| Fitur pencarian tugas | 2 | Pengembangan lanjutan |
| Filter berdasarkan status tugas | 2 | Sebagian sudah ada: daftar dikelompokkan per status dan tiap kelompok dapat dilipat |
| Tampilan responsif di HP dan laptop | 2 | Sudah diterapkan; perlu ditinjau karena nilai tampilan paling rendah (3,50) |
| Pengurutan tugas berdasarkan tenggat | 1 | Sudah ada: daftar diurutkan dari tenggat terdekat |
| Konfirmasi sebelum menghapus tugas | 1 | Sudah ada: muncul konfirmasi sebelum tugas dihapus |

Beberapa saran ditulis dengan kalimat yang sama persis oleh lebih dari satu responden; jawaban dicatat sesuai yang dikirim.

## 8. Kesimpulan dan tindak lanjut
- Kriteria penerimaan terpenuhi: seluruh 8 responden menyelesaikan keenam skenario, dan 100% responden menilai aplikasi membantu (nilai 4 atau 5).
- Tidak ada kendala atau error yang dilaporkan, sehingga tidak ada bug baru yang dicatat di bug log (docs/8-1).
- Aspek dengan nilai terendah adalah tampilan (3,50), menjadi masukan untuk pengembangan berikutnya.
- Fitur yang sudah ada tetapi disarankan responden (konfirmasi hapus, urutan tenggat, pengelompokan status) menunjukkan fitur tersebut perlu dibuat lebih terlihat.