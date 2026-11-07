// Koneksi ke Supabase
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const pesan = document.getElementById("pesan");
const daftar = document.getElementById("daftar-tugas");
const infoUser = document.getElementById("info-user");

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
  pesan.textContent = "Tugas dihapus.";
  await muatTugas();
}

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
    meta.textContent = (t.course || "Tanpa mata kuliah") + " • Tenggat " + tenggat;

    kiri.appendChild(judul);
    kiri.appendChild(meta);

    // Bagian kanan: lencana status + dropdown status + tombol hapus
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

    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.className = "btn-hapus";
    hapus.textContent = "Hapus";
    hapus.addEventListener("click", () => hapusTugas(t.id, t.title));

    kanan.appendChild(badge);
    kanan.appendChild(pilih);
    kanan.appendChild(hapus);

    li.appendChild(kiri);
    li.appendChild(kanan);
    daftar.appendChild(li);
  });
}

// Tombol Tambah: simpan tugas baru
document.getElementById("btn-tambah").addEventListener("click", async () => {
  const judul = document.getElementById("tugas-judul").value.trim();
  const matkul = document.getElementById("tugas-matkul").value.trim();
  const deadline = document.getElementById("tugas-deadline").value;

  if (!judul || !deadline) {
    pesan.textContent = "Judul dan tenggat wajib diisi.";
    return;
  }

  const { error } = await sb.from("tasks").insert({
    title: judul,
    course: matkul || null,
    deadline: new Date(deadline).toISOString(),
  });

  if (error) {
    pesan.textContent = "Gagal menambah tugas: " + error.message;
    return;
  }

  pesan.textContent = "Tugas ditambahkan.";
  document.getElementById("tugas-judul").value = "";
  document.getElementById("tugas-matkul").value = "";
  document.getElementById("tugas-deadline").value = "";
  await muatTugas();
});

// Tombol Keluar
document.getElementById("btn-keluar").addEventListener("click", async () => {
  await sb.auth.signOut();
  window.location.href = "index.html";
});

mulai();