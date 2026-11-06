# Work Breakdown Structure (WBS)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan Andri dan persetujuan tim
Struktur mengikuti Tahap A sampai J pada panduan mata kuliah dan 4 fitur inti MVP.

## Level 1
1.0 Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu

## Level 2 sampai 4

1.1 Inisiasi (Tahap A)
- 1.1.1 Survei kebutuhan pengguna
- 1.1.2 Project Charter
- 1.1.3 Stakeholder Register
- 1.1.4 Pemilihan metodologi SDLC

1.2 Lingkup dan Kebutuhan (Tahap B)
- 1.2.1 Scope Statement
- 1.2.2 WBS
- 1.2.3 SRS (kebutuhan fungsional dan non-fungsional)
- 1.2.4 User stories atau use case
- 1.2.5 Product backlog

1.3 Perencanaan (Tahap C sampai E)
- 1.3.1 Jadwal, Gantt Chart, jalur kritis, RAB
- 1.3.2 Estimasi usaha dan rencana sprint
- 1.3.3 Risk Register dan rencana mutu (Test Plan, Definition of Done)
- 1.3.4 Rencana komunikasi dan matriks RACI
- 1.3.5 Konfigurasi: strategi branching Git dan standar penulisan kode

1.4 Desain (Tahap F)
- 1.4.1 Wireframe dan mockup UI (halaman login, halaman utama, form tugas)
- 1.4.2 Diagram UML (use case, activity, class atau sequence)
- 1.4.3 ERD dan arsitektur sistem

1.5 Implementasi dan Kontrol (Tahap G)
- 1.5.1 Database dan keamanan
  - 1.5.1.1 Tabel profiles dan tasks di Supabase
  - 1.5.1.2 Aturan Row Level Security (RLS)
- 1.5.2 Autentikasi
  - 1.5.2.1 Halaman login dan daftar akun
  - 1.5.2.2 Sesi pengguna dan keluar akun
- 1.5.3 Pengelolaan tugas
  - 1.5.3.1 Tambah tugas
  - 1.5.3.2 Tampil daftar tugas
  - 1.5.3.3 Ubah tugas
  - 1.5.3.4 Hapus tugas
- 1.5.4 Status tugas (belum dikerjakan, sedang dikerjakan, selesai)
- 1.5.5 Pengingat tenggat dengan jarak waktu yang dapat diatur pengguna
- 1.5.6 Pemantauan proyek
  - 1.5.6.1 Laporan kemajuan minimal 3 periode dan analisis EVM
  - 1.5.6.2 Burndown chart dan velocity
  - 1.5.6.3 Change request log

1.6 Pengujian dan Deployment (Tahap H)
- 1.6.1 Test case fungsional (minimal 20)
- 1.6.2 UAT dengan minimal 5 responden
- 1.6.3 Bug log dan defect density
- 1.6.4 Deployment aplikasi

1.7 Penutupan dan Presentasi (Tahap I dan J)
- 1.7.1 Dokumentasi pengguna dan dokumentasi teknis
- 1.7.2 Laporan akhir dan lessons learned
- 1.7.3 Slide presentasi
- 1.7.4 Demo produk
