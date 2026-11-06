# User Stories

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Status: DRAF, menunggu pemeriksaan Andri dan persetujuan tim

| ID | User story | Kriteria penerimaan | Kebutuhan SRS |
|----|------------|---------------------|---------------|
| US-01 | Sebagai mahasiswa, saya ingin mendaftar, masuk, dan keluar dari akun, agar data tugas saya tersimpan di akun pribadi. | Akun baru dapat dibuat; login dengan email dan password yang benar membuka halaman tugas; pengguna yang belum login diarahkan ke halaman login; tombol keluar mengakhiri sesi. | FR-01, FR-02, FR-03, FR-04 |
| US-02 | Sebagai mahasiswa, saya ingin menambah tugas beserta mata kuliah dan tenggatnya, agar semua tugas tercatat di satu tempat. | Form menerima judul, mata kuliah, tanggal dan jam tenggat; tugas baru muncul di daftar setelah disimpan. | FR-05 |
| US-03 | Sebagai mahasiswa, saya ingin melihat daftar tugas yang diurutkan berdasarkan tenggat, agar tahu mana yang paling mendesak. | Daftar menampilkan judul, mata kuliah, tenggat, dan status; urutan dari tenggat terdekat. | FR-06 |
| US-04 | Sebagai mahasiswa, saya ingin mengubah isi tugas, agar data tetap benar bila tenggat atau mata kuliah berubah. | Judul, mata kuliah, dan tenggat dapat diedit; perubahan tersimpan dan tampil di daftar. | FR-07 |
| US-05 | Sebagai mahasiswa, saya ingin menghapus tugas, agar daftar tidak penuh dengan tugas yang tidak diperlukan. | Tugas yang dihapus tidak lagi muncul di daftar dan tidak muncul lagi setelah halaman dimuat ulang. | FR-08 |
| US-06 | Sebagai mahasiswa, saya ingin menandai status tugas (belum, sedang, selesai), agar kemajuan pengerjaan mudah dipantau. | Status dapat diubah dari daftar; status tersimpan setelah halaman dimuat ulang. | FR-09 |
| US-07 | Sebagai mahasiswa, saya ingin mengatur jarak waktu pengingat setiap tugas, agar pengingat sesuai kebiasaan saya. | Jarak pengingat (dalam hari) dapat diisi per tugas dan tersimpan. | FR-10 |
| US-08 | Sebagai mahasiswa, saya ingin melihat pengingat di dalam aplikasi, agar tidak lupa tugas yang tenggatnya dekat. | Tugas yang belum selesai dan sudah masuk jarak pengingat ditandai atau ditampilkan sebagai pengingat. | FR-11 |
| US-09 | Sebagai mahasiswa, saya ingin hanya tugas saya yang tampil di akun saya, agar data saya tidak terlihat orang lain. | Dua akun berbeda tidak dapat melihat atau mengubah tugas satu sama lain. | FR-12 |
