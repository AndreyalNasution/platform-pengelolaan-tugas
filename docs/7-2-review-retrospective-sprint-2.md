# Review dan Retrospective Sprint 2

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Sprint 2: 9-14 November 2026 (6 hari)
Status: DRAF, menunggu pemeriksaan dan pendapat tim
Catatan: susunan awal dibuat dengan bantuan AI dari papan GitHub Projects, riwayat commit, dan catatan kejadian selama sprint, lalu diperiksa tim. Bagian bertanda [ISI] dilengkapi tim.

## 1. Sprint Review

### 1.1 Tujuan sprint
Menyelesaikan fitur ubah tugas, pengingat tenggat, dan tampilan sesuai mockup, serta melengkapi dokumen perencanaan (metodologi, jadwal dan biaya, risiko dan Test Plan, komunikasi dan RACI).

### 1.2 Hasil per kartu

| Kartu | Pekerjaan | Pelaksana | Status akhir | Keterangan |
|-------|-----------|-----------|--------------|------------|
| PB-10 | Bab 1.5 Pemilihan metodologi | Andri | Done | Dokumen 1-5-pemilihan-metodologi.md |
| PB-11 | Ubah isi tugas | Andre | Done | Dikerjakan Andre karena dua anggota berhalangan pada 9 November |
| PB-12 | Atur jarak pengingat (hari) | Jhon dan Andre | Done | Kolom pengingat di form, nilai 0-365 |
| PB-13 | Tampilkan pengingat tenggat | Jhon dan Andre | Done | Panel pengingat dengan label hari ini, H-n, terlambat |
| PB-14 | Tampilan sesuai mockup | Jhon | Done | Lima tahap: tema CSS, kartu hitungan, menu aksi, form pop-up, daftar per status |
| PB-15 | Merapikan Bab 1 | Andri | Belum selesai | Klaim jadwal di 3-1 dan 7-1 sudah disesuaikan; tanggal chat dosen dan sumber kutipan di Bab 1 belum |
| PB-16 | Dokumen Tahap C (jadwal, estimasi, biaya) | Andri | Done | Dokumen 3-1-jadwal-estimasi-biaya.md |
| PB-17 | Dokumen Tahap D (risiko, mutu, Test Plan, DoD) | Andri | Done | Ditambahkan ke papan 12 November |
| PB-18 | Dokumen Tahap E (komunikasi, RACI, Git, standar kode) | Jhon | Done | Ditambahkan ke papan 12 November |

Story point direncanakan: [ISI dari tabel 3-1]. Story point selesai: [ISI]. Velocity Sprint 2: [ISI] story point.

### 1.3 Perubahan selama sprint (change request)
1. 12 November: kartu PB-17 dan PB-18 ditambahkan untuk dokumen Tahap D dan Tahap E.
2. 12 November: PB-14 tetap satu kartu dan dikerjakan bertahap, bukan dipecah menjadi beberapa kartu.
3. 14 November: dosen pengampu menjawab bahwa durasi sprint diserahkan kepada tim, sehingga klaim jadwal di dokumen disesuaikan.

### 1.4 Perbedaan tampilan dengan mockup
| Bagian mockup | Status di aplikasi |
|---------------|--------------------|
| Tema warna, kartu hitungan status, label status, panel pengingat | Sudah diterapkan |
| Menu aksi tiga titik (Ubah dan Hapus) | Sudah diterapkan, tanpa ikon |
| Form tambah/ubah tugas sebagai pop-up | Sudah diterapkan |
| Daftar tugas dikelompokkan per status dan dapat dilipat | Sudah diterapkan |
| Sidebar, sapaan dan tanggal, tampilan kolom seperti tabel, tombol plus-minus jarak pengingat | Tidak diterapkan karena waktu sprint terbatas dan prioritas pada pengujian |

## 2. Sprint Retrospective

### 2.1 Yang berjalan baik
- Fitur inti selesai dan diuji sebelum ditutup.
- Pekerjaan tampilan dipecah menjadi tahap kecil yang diuji satu per satu.
- Pesan commit konsisten memuat nomor kartu.
- [ISI pendapat tim]

### 2.2 Yang menyulitkan
- Dua anggota berhalangan pada 9 November sehingga pekerjaan dialihkan.
- Kesalahan operasi Git berulang, misalnya lupa git add dan patch gagal karena baris akhir file.
- File sempat dibuat di laptop yang berbeda dari pemilik kartu.
- Komentar progres pada kartu papan belum dibuat secara konsisten.
- [ISI pendapat tim]

### 2.3 Perbaikan untuk Sprint 3
1. Pemilik kartu menjalankan pekerjaannya di laptop sendiri agar riwayat commit sesuai pembagian peran.
2. Setiap kartu diberi komentar singkat saat pindah status (tanggal, apa yang selesai, siapa yang mengerjakan).
3. Jam kerja dan pemakaian AI dicatat setiap hari.
4. [ISI usulan tim]

## 3. Rencana Sprint 3 (15-20 November 2026)
| Tanggal | Kegiatan |
|---------|----------|
| 15-17 November | Pelaksanaan 24 test case dan pencatatan bug |
| 17-19 November | Perbaikan bug |
| 18 November | UAT dengan minimal 5 responden |
| 19-20 November | Deployment dan penyelesaian laporan |