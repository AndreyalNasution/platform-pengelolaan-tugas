# 1.5 Pemilihan Metodologi

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan tim
Catatan: susunan awal dibuat dengan bantuan AI, lalu diperiksa dan disesuaikan Andri. Teks ini sama dengan bagian 1.5 pada Bab 1 laporan. Sitasi dilengkapi pada daftar pustaka laporan.

Panduan mata kuliah memperbolehkan kelompok memilih pendekatan pengembangan perangkat lunak Waterfall, Agile/Scrum, atau hibrida. Proyek ini memakai pendekatan Agile dengan kerangka kerja Scrum (Schwaber & Sutherland, 2020), yang diterapkan dalam bentuk sederhana sesuai ukuran tim.

## Alasan pemilihan
1. **Waktu pengembangan singkat.** Proyek berlangsung 18 hari dan dibagi menjadi tiga sprint masing-masing 6 hari. Setiap sprint punya tujuan yang jelas dan menghasilkan bagian aplikasi yang dapat dicoba, sehingga masalah dapat diketahui lebih awal.
2. **Tim kecil dengan pengalaman terbatas.** Tim terdiri dari tiga orang dengan pengalaman pengembangan web yang masih terbatas (lihat Batasan). Iterasi pendek memberi kesempatan belajar dan memperbaiki arah di akhir setiap sprint.
3. **Kebutuhan dapat disesuaikan.** Kebutuhan pengguna berasal dari survei terhadap 36 responden dan dicatat dalam product backlog, sehingga urutan dan isi pekerjaan dapat disesuaikan di awal tiap sprint.
4. **Kemajuan dapat dipantau.** Papan sprint, burndown chart, dan velocity memudahkan pemantauan kemajuan, sesuai tuntutan pemantauan proyek pada panduan mata kuliah.

Waterfall tidak dipilih karena pengujian baru dilakukan di tahap akhir. Pada proyek dengan waktu 18 hari, kesalahan yang baru ditemukan di akhir sulit diperbaiki.

## Penerapan Scrum pada proyek ini

| Unsur Scrum | Penerapan di proyek |
|-------------|---------------------|
| Product backlog | Daftar item pekerjaan dengan prioritas MoSCoW (dokumen Product Backlog). |
| Sprint | Tiga sprint, masing-masing 6 hari (3-8, 9-14, dan 15-20 November 2026). |
| Perencanaan sprint | Di awal sprint, tim memilih item dari backlog dan menentukan penanggung jawab tiap kartu. |
| Papan sprint | GitHub Projects dengan kolom Todo, In Progress, dan Done; setiap kartu bernomor PB. |
| Pelacakan pekerjaan | Pesan commit di GitHub memuat nomor kartu PB. |
| Review dan retrospective | Di akhir sprint; hasil Sprint 1 dicatat dalam dokumen review dan retrospective. |
| Peran | Ketua (Andreyal Nasution) mengatur jadwal sprint dan memantau papan; peran Product Owner dan Scrum Master tidak dipisahkan secara formal. |