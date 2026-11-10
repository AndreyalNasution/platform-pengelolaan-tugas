// Koneksi ke Supabase
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const pesan = document.getElementById("pesan");
const daftar = document.getElementById("daftar-tugas");
const infoUser = document.getElementById("info-user");

const inJudul = document.getElementById("tugas-judul");
const inMatkul = document.getElementById("tugas-matkul");
const inDeadline = document.getElementById("tugas-deadline");
// PB-12: jarak pengingat (hari sebelum tenggat)
const inPengingat = document.getElementById("tugas-pengingat");
const PENGINGAT_DEFAULT = 3;
const btnTambah = document.getElementById("btn-tambah");
const teksTambahAsli = btnTambah.textContent;

// PB-11: id tugas yang sedang diubah (null = mode tambah)
let idSedangDiubah = null;

// Tombol Batal (dibuat lewat JS, tampil hanya saat mode ubah)
const btnBatal = document.createElement("button");
btnBatal.type = "button";
btnBatal.className = "sekunder";
btnBatal.textContent = "Batal";
btnBatal.style.marginLeft = "8px";
btnBatal.hidden = true;
btnTambah.insertAdjacentElement("afterend", btnBatal);

// Dipanggil saat halaman dibuka: pastikan sudah login
async function mulai() {
  const { data } = await sb.auth.getSession();
  if (!data.session) {
    window.location.href = "index.html";
    return;
  }
  infoUser.textContent = "Masuk sebagai " + data.session.user.email;
  await muatTugas();
}

// Mengambil semua tugas milik pengguna (RLS membatasi ke miliknya)
async function muatTugas() {
  const { data, error } = await sb
    .from("tasks")
    .select("*")
    .order("deadline", { ascending: true });

  if (error) {
    pesan.textContent = "Gagal memuat tugas: " + error.message;
    return;
  }
  tampilkanTugas(data);
}

// PB-07: mengubah status satu tugas
async function ubahStatus(id, statusBaru) {
  const { error } = await sb
    .from("tasks")
    .update({ status: statusBaru })
    .eq("id", id);

  if (error) {
    pesan.textContent = "Gagal mengubah status: " + error.message;
    return;
  }
  pesan.textContent = "Status diperbarui.";
  await muatTugas();
}

// PB-08: menghapus satu tugas
async function hapusTugas(id, judul) {
  if (!confirm('Hapus tugas "' + judul + '"?')) return;

  const { data, error } = await sb
    .from("tasks")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    pesan.textContent = "Gagal menghapus tugas: " + error.message;
    return;
  }
  if (!data || data.length === 0) {
    pesan.textContent = "Tugas tidak ditemukan atau bukan milik akun ini.";
    return;
  }
  if (id === idSedangDiubah) keluarModeUbah();
  pesan.textContent = "Tugas dihapus.";
  await muatTugas();
}

// PB-12: membaca dan memeriksa kolom jarak pengingat
// Mengembalikan angka bulat 0-365, atau null jika tidak valid
function bacaPengingat() {
  const teks = inPengingat.value.trim();
  if (teks === "") return PENGINGAT_DEFAULT;
  const angka = Number(teks);
  if (!Number.isInteger(angka) || angka < 0 || angka > 365) return null;
  return angka;
}

// PB-11: mengubah ISO (dari database) menjadi nilai untuk kolom tenggat di form
function keNilaiInput(iso) {
  const d = new Date(iso);
  const dua = (n) => String(n).padStart(2, "0");
  const tanggal = d.getFullYear() + "-" + dua(d.getMonth() + 1) + "-" + dua(d.getDate());
  if (inDeadline.type === "date") return tanggal;
  return tanggal + "T" + dua(d.getHours()) + ":" + dua(d.getMinutes());
}

// PB-11: masuk mode ubah, isi form dengan data tugas
function mulaiUbah(t) {
  idSedangDiubah = t.id;
  inJudul.value = t.title;
  inMatkul.value = t.course || "";
  inDeadline.value = keNilaiInput(t.deadline);
  inPengingat.value = t.reminder_days ?? PENGINGAT_DEFAULT;
  btnTambah.textContent = "Simpan perubahan";
  btnBatal.hidden = false;
  pesan.textContent = 'Mengubah tugas "' + t.title + '".';
  inJudul.focus();
}

// PB-11: keluar dari mode ubah, kosongkan form
function keluarModeUbah() {
  idSedangDiubah = null;
  inJudul.value = "";
  inMatkul.value = "";
  inDeadline.value = "";
  inPengingat.value = PENGINGAT_DEFAULT;
  btnTambah.textContent = teksTambahAsli;
  btnBatal.hidden = true;
}

btnBatal.addEventListener("click", () => {
  keluarModeUbah();
  pesan.textContent = "Perubahan dibatalkan.";
});

// Menggambar daftar tugas di halaman
function tampilkanTugas(tugas) {
  daftar.innerHTML = "";

  if (tugas.length === 0) {
    const kosong = document.createElement("li");
    kosong.className = "kosong";
    kosong.textContent = "Belum ada tugas.";
    daftar.appendChild(kosong);
    return;
  }

  tugas.forEach((t) => {
    const li = document.createElement("li");
    li.className = "tugas-item";

    const kiri = document.createElement("div");

    const judul = document.createElement("div");
    judul.className = "tugas-judul";
    judul.textContent = t.title;

    const meta = document.createElement("div");
    meta.className = "tugas-meta";
    const tenggat = new Date(t.deadline).toLocaleString("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    meta.textContent =
      (t.course || "Tanpa mata kuliah") +
      " • Tenggat " + tenggat +
      " • Pengingat " + (t.reminder_days ?? PENGINGAT_DEFAULT) + " hari sebelumnya";

    kiri.appendChild(judul);
    kiri.appendChild(meta);

    // Bagian kanan: lencana status + dropdown status + tombol ubah + tombol hapus
    const kanan = document.createElement("div");

    const badge = document.createElement("span");
    badge.className = "badge badge-" + t.status;
    badge.textContent = t.status;

    const pilih = document.createElement("select");
    pilih.className = "pilih-status";
    ["belum", "sedang", "selesai"].forEach((s) => {
      const opsi = document.createElement("option");
      opsi.value = s;
      opsi.textContent = s;
      if (t.status === s) opsi.selected = true;
      pilih.appendChild(opsi);
    });
    pilih.addEventListener("change", () => ubahStatus(t.id, pilih.value));

    const ubah = document.createElement("button");
    ubah.type = "button";
    ubah.className = "sekunder";
    ubah.style.marginLeft = "8px";
    ubah.textContent = "Ubah";
    ubah.addEventListener("click", () => mulaiUbah(t));

    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.className = "btn-hapus";
    hapus.textContent = "Hapus";
    hapus.addEventListener("click", () => hapusTugas(t.id, t.title));

    kanan.appendChild(badge);
    kanan.appendChild(pilih);
    kanan.appendChild(ubah);
    kanan.appendChild(hapus);

    li.appendChild(kiri);
    li.appendChild(kanan);
    daftar.appendChild(li);
  });
}

// Tombol Tambah / Simpan perubahan
btnTambah.addEventListener("click", async () => {
  const judul = inJudul.value.trim();
  const matkul = inMatkul.value.trim();
  const deadline = inDeadline.value;

  if (!judul || !deadline) {
    pesan.textContent = "Judul dan tenggat wajib diisi.";
    return;
  }

  // PB-12: jarak pengingat harus bilangan bulat 0-365
  const pengingat = bacaPengingat();
  if (pengingat === null) {
    pesan.textContent = "Jarak pengingat harus bilangan bulat 0 sampai 365 hari.";
    return;
  }

  // PB-11: mode ubah -> perbarui tugas yang dipilih
  if (idSedangDiubah) {
    const { data, error } = await sb
      .from("tasks")
      .update({
        title: judul,
        course: matkul || null,
        deadline: new Date(deadline).toISOString(),
        reminder_days: pengingat,
      })
      .eq("id", idSedangDiubah)
      .select();

    if (error) {
      pesan.textContent = "Gagal menyimpan perubahan: " + error.message;
      return;
    }
    if (!data || data.length === 0) {
      pesan.textContent = "Tugas tidak ditemukan atau bukan milik akun ini.";
      return;
    }
    keluarModeUbah();
    pesan.textContent = "Perubahan disimpan.";
    await muatTugas();
    return;
  }

  // Mode tambah (seperti sebelumnya)
  const { error } = await sb.from("tasks").insert({
    title: judul,
    course: matkul || null,
    deadline: new Date(deadline).toISOString(),
    reminder_days: pengingat,
  });

  if (error) {
    pesan.textContent = "Gagal menambah tugas: " + error.message;
    return;
  }

  pesan.textContent = "Tugas ditambahkan.";
  inJudul.value = "";
  inMatkul.value = "";
  inDeadline.value = "";
  inPengingat.value = PENGINGAT_DEFAULT;
  await muatTugas();
});

// Tombol Keluar
document.getElementById("btn-keluar").addEventListener("click", async () => {
  await sb.auth.signOut();
  window.location.href = "index.html";
});

mulai();