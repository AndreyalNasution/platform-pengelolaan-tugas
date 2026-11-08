# 7.1 Review dan Retrospective Sprint 1

Periode: 3 sampai 8 November 2026
Status: DRAF, menunggu pemeriksaan Andre dan Jhon. Masukan Andri ditambahkan setelah ia kembali.
Catatan: susunan awal dirangkum dengan bantuan AI dari kejadian yang tercatat selama sprint, lalu diperiksa tim.

## A. Sprint Review

**Sprint goal:** fondasi aplikasi berjalan, yaitu database dan akun pengguna siap.

| Kartu | Pekerjaan | Hasil |
|-------|-----------|-------|
| PB-01, PB-02 | Skema database dan aturan RLS | Selesai; tugas satu akun tidak terlihat di akun lain |
| PB-03 | Login dan daftar akun | Selesai |
| PB-04 | Tambah dan tampil daftar tugas | Selesai |
| PB-05 | Wireframe dan mockup halaman utama dan form tugas | Selesai; mockup disimpan di docs |
| PB-06 | Dokumen Tahap A dan B (Stakeholder Register, Scope Statement, WBS, SRS, User Stories, Product Backlog) | Selesai sebagai draf |
| PB-07 | Ubah status tugas | Selesai (dijadwalkan Sprint 2, selesai lebih awal) |
| PB-08 | Hapus tugas | Selesai (dijadwalkan Sprint 2, selesai lebih awal) |

**Belum ada di akhir Sprint 1:** pemilihan metodologi (bagian 1.5 Bab 1), ubah isi tugas, dan fitur pengingat tenggat. Ketiganya dijadwalkan di Sprint 2.

**Perubahan jadwal:** total waktu proyek diperpanjang dari 14 hari menjadi 18 hari (tiga sprint masing-masing 6 hari). Persetujuan dosen untuk angka 18 hari perlu dikonfirmasi.

## B. Retrospective

### Yang berjalan baik
1. Aturan RLS terbukti bekerja saat diuji dengan dua akun.
2. Pembagian file (tampilan, kode JavaScript dan backend, dokumen) mengurangi bentrok di Git.
3. Pesan commit memuat nomor kartu, sehingga pekerjaan di repositori bisa dicocokkan dengan papan sprint.
4. Ketiga anggota sudah memiliki riwayat commit atas namanya sendiri.

### Yang menyulitkan
1. Project Charter sempat terlewat karena fokus awal hanya pada kode.
2. Kartu sempat dibuat di repositori yang salah dan harus dibuat ulang.
3. Susunan folder frontend sempat bertumpuk dan file konfigurasi hilang, sehingga harus dibuat ulang.
4. Git belum terpasang di laptop salah satu anggota, dan koneksi sempat putus saat mengirim ke GitHub.
5. Perubahan yang belum di-commit sempat menghalangi pengambilan commit terbaru dari GitHub.
6. Beberapa kartu baru dibuat di akhir sprint, bukan di awal.
7. Dokumen Bab 1 masih memuat angka dan istilah yang belum konsisten setelah jadwal berubah (sisa 14 hari, satu angka survei).

### Perbaikan untuk Sprint 2
1. Cek papan sprint dan dokumen setiap hari, bukan hanya kode.
2. Buat semua kartu Sprint 2 di awal sprint (9 November).
3. Lakukan git pull sebelum mulai bekerja, dan commit sebelum pull bila ada perubahan lokal.
4. Pemilihan metodologi (1.5) dikerjakan Andri, dan Bab 1 dirapikan (konsistensi 18 hari, angka survei, istilah).
5. Konfirmasi angka 18 hari ke dosen pengampu atau sesuaikan kalimat persetujuan di Charter.
