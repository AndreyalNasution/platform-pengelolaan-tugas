# Review dan Retrospective Sprint 3

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Sprint 3: 15-20 November 2026 (6 hari)
Kartu: PB-29
Catatan: susunan awal dibuat dengan bantuan AI dari papan sprint, riwayat commit, dan dokumen proyek. Butir retrospective diusulkan dengan bantuan AI dan disetujui tim. Penilaian kontribusi (bagian 4) diisi oleh masing-masing anggota.

## 1. Sprint Review

### 1.1 Tujuan sprint
Menguji aplikasi, memperbaiki bug, men-deploy aplikasi, melaksanakan UAT, serta melengkapi dokumen desain sistem dan pemantauan proyek.

### 1.2 Hasil per kartu
| Kartu | Pekerjaan | Pelaksana | Status 20 Nov | Keterangan |
|-------|-----------|-----------|---------------|------------|
| PB-15 | Merapikan Bab 1 | Andri | Belum selesai | Tanggal chat dosen dan pengecekan sumber kutipan dilanjutkan bersama laporan akhir |
| PB-20 | Pengujian test case dan bug log | Andre, Jhon, Andri | Done | 24 dari 24 test case lulus, 1 bug Minor (BUG-01) |
| PB-21 | Dokumen desain sistem | Jhon, Andri | Done | Use case, activity diagram, ERD, arsitektur, mockup |
| PB-22 | UAT | Andri | Done | 8 responden, 100% menilai aplikasi membantu |
| PB-23 | Perbaikan bug dan tampilan | Andre | Done setelah dokumen diperbarui | BUG-01 diperbaiki, halaman login baru, sidebar dan sapaan |
| PB-24 | Deployment | Andre | Done | AWS Amplify dan domain pengelolatugas.my.id |
| PB-25 | Pemantauan proyek (EVM, burndown, velocity) | Andre | Done | Dokumen 7-3 |
| PB-26 | Perbarui Product Backlog | Andri | Dikerjakan 20 Nov | |
| PB-27 | Laporan akhir PDF | Semua | Berjalan sampai 25 Nov | Batas pengumpulan 25 November 2026 |
| PB-28 | Presentasi dan demo | Semua | Berjalan sampai 25 Nov | |
| PB-29 | Review Sprint 3 | Semua | Done | Dokumen ini |

Story point Sprint 3: direncanakan 13, selesai 13 (item 12 pengujian dan UAT, item 13 perbaikan bug dan deployment). Rincian velocity, burndown, dan EVM ada di dokumen 7-3.

### 1.3 Hasil yang dapat ditunjukkan
- Aplikasi online: https://pengelolatugas.my.id
- Hasil pengujian: docs/8-1 (24 test case lulus, BUG-01 diperbaiki)
- Catatan deployment: docs/8-2
- Hasil UAT: docs/8-3 dan Hasil_UAT_TugasKu.xlsx
- Desain sistem: docs/4-1

### 1.4 Perubahan selama sprint
Perubahan Sprint 3 dicatat pada Change Request Log di dokumen 7-3 (nomor 7 sampai 12), termasuk desain ulang halaman login, pemilihan platform deployment, penambahan sidebar dan sapaan, serta pergeseran UAT ke 20 November.

Penyusunan laporan akhir dan presentasi berlanjut setelah Sprint 3 berakhir, sampai batas pengumpulan 25 November 2026.

## 2. Sprint Retrospective

### 2.1 Yang berjalan baik
- Pengujian 24 test case selesai dalam satu hari karena dibagi rata ke tiga anggota.
- Aplikasi berhasil online dan dipakai responden UAT dari perangkat masing-masing.
- Setiap perubahan tampilan dan perbaikan bug diuji sebelum di-commit.

### 2.2 Yang menyulitkan
- Pencatatan jam kerja belum menjadi kebiasaan harian tim, sehingga biaya aktual pada EVM disusun dari riwayat commit.
- Pemilihan platform deployment memerlukan beberapa percobaan (Netlify, Vercel, AWS Amplify).
- Satu pertanyaan UAT terlewat saat membuat Google Form.

### 2.3 Pelajaran untuk proyek berikutnya
1. Mencatat jam kerja setiap hari sejak awal proyek.
2. Memeriksa kuesioner sebelum disebar.
3. Menyiapkan platform deployment lebih awal, bersamaan dengan pengembangan fitur.
4. Menjadwalkan UAT dengan responden beberapa hari sebelumnya.

## 3. Status akhir Sprint 3
Seluruh item produk (13 SP) selesai. Pekerjaan yang tersisa adalah dokumen dan pelaporan: PB-15, PB-26, PB-27, dan PB-28.

## 4. Penilaian kontribusi (peer assessment)
Setiap anggota menilai dirinya dan anggota lain dengan skala 1-5 (1 = sangat kurang, 5 = sangat baik). Baris menunjukkan penilai, kolom menunjukkan anggota yang dinilai.

| Penilai | Andre | Jhon | Andri | Catatan |
|---------|-------|------|-------|---------|
| Andre | 5 | 5 | 4 | - |
| Jhon | 4 | 5 | 5 | - |
| Andri | 4 | 4 | 5 | - |