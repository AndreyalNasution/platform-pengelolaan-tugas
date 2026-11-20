# Desain Sistem (Tahap F)

Proyek: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu Mata Kuliah Berbasis Web
Kartu: PB-21
Dibuat: 18 November 2026 (Sprint 3)
Catatan: diagram disusun dengan bantuan AI berdasarkan kode aplikasi dan struktur database proyek, lalu diperiksa tim. Diagram ditulis dalam format Mermaid sehingga tergambar otomatis saat dibuka di GitHub.

## 1. Use Case Diagram

```mermaid
flowchart LR
  U((Mahasiswa))
  subgraph S["Platform Pengelolaan Tugas"]
    UC1([Daftar akun])
    UC2([Masuk])
    UC3([Keluar])
    UC4([Menambah tugas])
    UC5([Melihat daftar tugas per status])
    UC6([Mengubah tugas])
    UC7([Menghapus tugas])
    UC8([Mengubah status tugas])
    UC9([Mengatur jarak pengingat])
    UC10([Melihat pengingat tenggat])
  end
  U --> UC1
  U --> UC2
  U --> UC3
  U --> UC4
  U --> UC5
  U --> UC6
  U --> UC7
  U --> UC8
  U --> UC9
  U --> UC10
```

Aktor tunggal adalah mahasiswa. Seluruh use case selain daftar akun dan masuk hanya dapat dilakukan setelah pengguna masuk.

## 2. Activity Diagram

### 2.1 Daftar akun dan masuk

```mermaid
flowchart TD
  A([Mulai]) --> B[Buka halaman login]
  B --> C{Sudah punya akun?}
  C -- Belum --> D[Isi nama, email, dan kata sandi pada tab Buat akun]
  D --> E{Data diterima Supabase Auth?}
  E -- Tidak --> F[Tampilkan pesan galat] --> D
  E -- Ya --> G[Akun dibuat] --> H
  C -- Sudah --> H[Isi email dan kata sandi pada tab Masuk]
  H --> I{Email dan kata sandi benar?}
  I -- Tidak --> J[Tampilkan pesan gagal masuk] --> H
  I -- Ya --> K[Buka halaman tugas]
  K --> L([Selesai])
```

### 2.2 Menambah atau mengubah tugas

```mermaid
flowchart TD
  A([Mulai]) --> B{Tambah atau ubah?}
  B -- Tambah --> C[Klik tombol + Tambah Tugas]
  B -- Ubah --> D[Pilih menu titik tiga lalu Ubah]
  C --> E[Pop-up form terbuka]
  D --> E
  E --> F[Isi judul, mata kuliah, tenggat, dan jarak pengingat]
  F --> G[Klik Simpan]
  G --> H{Judul dan tenggat terisi dan jarak pengingat 0 sampai 365?}
  H -- Tidak --> I[Tampilkan pesan galat di pop-up] --> F
  H -- Ya --> J[Simpan ke tabel tasks di Supabase]
  J --> K{Berhasil disimpan?}
  K -- Tidak --> L[Tampilkan pesan gagal menyimpan] --> F
  K -- Ya --> M[Pop-up tertutup dan daftar dimuat ulang]
  M --> N([Selesai])
```

### 2.3 Menentukan tugas yang tampil di panel pengingat

```mermaid
flowchart TD
  A([Daftar tugas dimuat]) --> B[Periksa satu tugas]
  B --> C{Status selesai?}
  C -- Ya --> X[Tidak ditampilkan di panel]
  C -- Tidak --> D[Hitung selisih hari antara tanggal tenggat dan hari ini]
  D --> E{Selisih tidak lebih dari jarak pengingat?}
  E -- Tidak --> X
  E -- Ya --> F{Nilai selisih}
  F -- "kurang dari 0" --> G[Label Terlambat n hari]
  F -- "sama dengan 0" --> H[Label Hari ini]
  F -- "lebih dari 0" --> I[Label H-n]
  G --> J[Tampilkan di panel Pengingat tenggat]
  H --> J
  I --> J
```

Jarak pengingat bawaan adalah 3 hari dan dapat diubah per tugas.

## 3. Entity Relationship Diagram (ERD)

```mermaid
erDiagram
  AUTH_USERS ||--o{ TASKS : "memiliki"
  AUTH_USERS {
    uuid id PK
    text email
    jsonb raw_user_meta_data "berisi full_name"
  }
  TASKS {
    uuid id PK
    uuid user_id FK
    text title
    text course
    timestamptz deadline
    text status "belum, sedang, selesai"
    integer reminder_days "bawaan 3, minimal 0"
    timestamptz created_at
  }
```

Keterangan:
- AUTH_USERS adalah tabel akun bawaan Supabase Auth. Nama lengkap disimpan di metadata akun (raw_user_meta_data, kunci full_name) saat pendaftaran melalui sb.auth.signUp pada auth.js, sehingga tidak diperlukan tabel profil terpisah.
- Satu pengguna dapat memiliki banyak tugas, dan setiap tugas dimiliki tepat satu pengguna (TASKS.user_id merujuk AUTH_USERS.id).
- Row Level Security pada tabel tasks memastikan pengguna hanya dapat membaca, menambah, mengubah, dan menghapus baris dengan user_id miliknya sendiri (diuji pada TC-22 dan TC-23).

## 4. Arsitektur Sistem

```mermaid
flowchart LR
  subgraph P["Pengguna"]
    B[Peramban web di HP atau laptop]
  end
  subgraph AM["AWS Amplify"]
    F[File frontend: index.html, tugas.html, css, js]
  end
  subgraph SB["Supabase"]
    AU[Supabase Auth]
    DB[(PostgreSQL: tabel tasks dengan RLS)]
  end
  GH[Repositori GitHub branch main] -- "push memicu deploy otomatis" --> F
  B -- "HTTPS: memuat halaman" --> F
  B -- "supabase-js: daftar, masuk, keluar" --> AU
  B -- "supabase-js: baca dan tulis tugas" --> DB
```

Penjelasan:
- Aplikasi berupa halaman statis (HTML, CSS, JavaScript) tanpa server aplikasi sendiri.
- Peramban berkomunikasi langsung dengan Supabase memakai pustaka supabase-js dan publishable key.
- Keamanan data dijaga oleh Supabase Auth (identitas pengguna) dan Row Level Security (hak akses per baris).

## 5. Wireframe dan Mockup

Mockup dibuat di Figma oleh Andri, terdiri atas tiga frame: Beranda (daftar tugas), Pop-up Tambah Tugas, dan Komponen MVP (label status, label pengingat, tombol, baris tugas). Gambar mockup disimpan di folder docs.

![Mockup Beranda](6-5-mockup-beranda.png)

![Mockup Form Tambah dan Ubah Tugas](6-5-mockup-form-tugas.png)

![Mockup Komponen MVP](6-5-mockup-komponen.png)

Perbedaan mockup dengan aplikasi:
| Bagian mockup | Status di aplikasi |
|---------------|--------------------|
| Tema warna, kartu hitungan status, label status, panel pengingat | Diterapkan |
| Menu aksi titik tiga (Ubah dan Hapus) | Diterapkan, tanpa ikon |
| Form tambah dan ubah tugas sebagai pop-up | Diterapkan |
| Daftar tugas dikelompokkan per status dan dapat dilipat | Diterapkan |
| Sidebar, sapaan, dan tanggal | Diterapkan pada 18 November (tampil di layar lebar, disembunyikan di HP) |
| Tampilan kolom seperti tabel, tombol plus-minus jarak pengingat, ikon pada menu aksi | Tidak diterapkan karena keterbatasan waktu |
| Halaman login | Tidak ada di mockup; didesain terpisah pada 15 November (desain dengan bantuan Manus) |