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
// PB-14: teks status yang ditampilkan (nilai di database tetap belum/sedang/selesai)
const LABEL_STATUS = {
  belum: "Belum Dikerjakan",
  sedang: "Sedang Dikerjakan",
  selesai: "Selesai",
};
const btnTambah = document.getElementById("btn-tambah");
const teksTambahAsli = btnTambah.textContent;

// PB-11: id tugas yang sedang diubah (null = mode tambah)
let idSedangDiubah = null;

// Tombol Batal (dibuat lewat JS, selalu tampil di dalam pop-up)
const btnBatal = document.createElement("button");
btnBatal.type = "button";
btnBatal.className = "sekunder";
btnBatal.textContent = "Batal";
btnBatal.style.marginLeft = "8px";
btnTambah.insertAdjacentElement("afterend", btnBatal);

// PB-14: tiga kartu hitungan status (dibuat lewat JS, disisipkan di atas form tambah tugas)
const ringkasan = document.createElement("div");
ringkasan.style.display = "grid";
ringkasan.style.gridTemplateColumns = "repeat(auto-fit, minmax(160px, 1fr))";
ringkasan.style.gap = "12px";
ringkasan.style.marginBottom = "18px";
const kartuForm = inJudul.closest(".kartu") || btnTambah;
kartuForm.insertAdjacentElement("beforebegin", ringkasan);

// PB-13: panel Pengingat Tenggat (dibuat lewat JS, disisipkan sebelum kartu daftar tugas)
const panelPengingat = document.createElement("div");
panelPengingat.className = "kartu";
const judulPengingat = document.createElement("h2");
const daftarPengingat = document.createElement("ul");
daftarPengingat.className = daftar.className;
panelPengingat.appendChild(judulPengingat);
panelPengingat.appendChild(daftarPengingat);
const kartuDaftar = daftar.closest(".kartu") || daftar;
kartuDaftar.insertAdjacentElement("beforebegin", panelPengingat);

// PB-14 Tahap 3b: form tambah/ubah tugas tampil sebagai pop-up (modal)
const judulForm = kartuForm.querySelector("h2");
if (judulForm) {
  judulForm.textContent = "Tambah Tugas";
  judulForm.id = "judul-form";
  kartuForm.setAttribute("aria-labelledby", "judul-form");
}
const subForm = document.createElement("p");
subForm.className = "sub";
subForm.textContent = "Lengkapi detail tugas kuliah dan atur kapan pengingat muncul.";
if (judulForm) judulForm.insertAdjacentElement("afterend", subForm);

// Pesan galat form tampil di dalam pop-up, pesan umum dipindah ke luar pop-up
const pesanForm = document.createElement("p");
pesanForm.className = "pesan";
btnTambah.insertAdjacentElement("beforebegin", pesanForm);
ringkasan.insertAdjacentElement("afterend", pesan);
btnTambah.textContent = "Simpan";

const btnTutupX = document.createElement("button");
btnTutupX.type = "button";
btnTutupX.className = "modal-tutup";
btnTutupX.textContent = "\u00D7";
btnTutupX.setAttribute("aria-label", "Tutup");
kartuForm.insertAdjacentElement("afterbegin", btnTutupX);

const latarModal = document.createElement("div");
latarModal.className = "modal-latar";
kartuForm.classList.add("modal-kartu");
kartuForm.setAttribute("role", "dialog");
kartuForm.setAttribute("aria-modal", "true");
latarModal.appendChild(kartuForm);
document.body.appendChild(latarModal);

// Tombol "+ Tambah Tugas" di bagian atas halaman
const btnBuka = document.createElement("button");
btnBuka.type = "button";
btnBuka.id = "btn-buka-form";
btnBuka.textContent = "+ Tambah Tugas";
const btnKeluar = document.getElementById("btn-keluar");
const grupAtas = document.createElement("div");
grupAtas.className = "grup-aksi-atas";
btnKeluar.insertAdjacentElement("beforebegin", grupAtas);
grupAtas.appendChild(btnBuka);
grupAtas.appendChild(btnKeluar);

function modalTerbuka() {
  return latarModal.classList.contains("terbuka");
}
function bukaModal() {
  latarModal.classList.add("terbuka");
  document.body.style.overflow = "hidden";
  pesanForm.textContent = "";
  inJudul.focus();
}
function tutupModal() {
  latarModal.classList.remove("terbuka");
  document.body.style.overflow = "";
  pesanForm.textContent = "";
}
function batalkanForm() {
  const sedangUbah = idSedangDiubah !== null;
  keluarModeUbah();
  if (sedangUbah) pesan.textContent = "Perubahan dibatalkan.";
}
btnBuka.addEventListener("click", () => {
  kosongkanForm();
  bukaModal();
});
btnBatal.addEventListener("click", batalkanForm);
btnTutupX.addEventListener("click", batalkanForm);
latarModal.addEventListener("mousedown", (e) => {
  if (e.target === latarModal) batalkanForm();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalTerbuka()) batalkanForm();
});

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
  if (judulForm) judulForm.textContent = "Ubah Tugas";
  pesan.textContent = "";
  bukaModal();
}

// PB-14 Tahap 3b: kosongkan form dan kembali ke mode tambah (pop-up tidak ditutup)
function kosongkanForm() {
  idSedangDiubah = null;
  inJudul.value = "";
  inMatkul.value = "";
  inDeadline.value = "";
  inPengingat.value = PENGINGAT_DEFAULT;
  btnTambah.textContent = "Simpan";
  if (judulForm) judulForm.textContent = "Tambah Tugas";
}

// PB-11: keluar dari mode ubah, kosongkan form dan tutup pop-up
function keluarModeUbah() {
  kosongkanForm();
  tutupModal();
}

// PB-14: menghitung jumlah tugas per status
function hitungPerStatus(tugas) {
  const hasil = { belum: 0, sedang: 0, selesai: 0 };
  tugas.forEach((t) => {
    if (hasil[t.status] !== undefined) hasil[t.status] += 1;
  });
  return hasil;
}

// PB-14: menggambar tiga kartu hitungan status
function tampilkanRingkasan(tugas) {
  const jumlah = hitungPerStatus(tugas);
  const warna = {
    belum: { latar: "#eef1ef", teks: "#4b5852" },
    sedang: { latar: "#fdf0c9", teks: "#8a5a00" },
    selesai: { latar: "#e3f5ec", teks: "#0b6b4a" },
  };
  ringkasan.innerHTML = "";
  ["belum", "sedang", "selesai"].forEach((s) => {
    const kartu = document.createElement("div");
    kartu.style.background = "#fff";
    kartu.style.border = "1px solid #e3e9e5";
    kartu.style.borderRadius = "14px";
    kartu.style.padding = "14px 16px";
    kartu.style.display = "flex";
    kartu.style.alignItems = "center";
    kartu.style.gap = "12px";

    const titik = document.createElement("div");
    titik.style.width = "38px";
    titik.style.height = "38px";
    titik.style.borderRadius = "10px";
    titik.style.background = warna[s].latar;
    titik.style.color = warna[s].teks;
    titik.style.display = "flex";
    titik.style.alignItems = "center";
    titik.style.justifyContent = "center";
    titik.style.fontWeight = "700";
    titik.textContent = jumlah[s];

    const teks = document.createElement("div");
    const nama = document.createElement("div");
    nama.textContent = LABEL_STATUS[s];
    nama.style.fontSize = "0.85rem";
    nama.style.color = "#6b7a73";
    const angka = document.createElement("div");
    angka.textContent = jumlah[s] + " tugas";
    angka.style.fontWeight = "700";
    teks.appendChild(nama);
    teks.appendChild(angka);

    kartu.appendChild(titik);
    kartu.appendChild(teks);
    ringkasan.appendChild(kartu);
  });
}

// PB-13: selisih hari kalender antara hari ini dan hari tenggat
// (0 = hari ini, positif = belum tiba, negatif = sudah lewat)
function selisihHari(iso, sekarang = new Date()) {
  const hariIni = new Date(sekarang.getFullYear(), sekarang.getMonth(), sekarang.getDate());
  const d = new Date(iso);
  const hariTenggat = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.round((hariTenggat - hariIni) / 86400000);
}

// PB-13: teks label pengingat
function labelPengingat(selisih) {
  if (selisih < 0) return "Terlambat " + Math.abs(selisih) + " hari";
  if (selisih === 0) return "Hari ini";
  return "H-" + selisih;
}

// PB-13: tugas yang belum selesai dan tenggatnya sudah masuk jarak pengingat
function tugasPerluDiingatkan(tugas, sekarang = new Date()) {
  return tugas.filter((t) => {
    if (t.status === "selesai") return false;
    const jarak = t.reminder_days ?? PENGINGAT_DEFAULT;
    return selisihHari(t.deadline, sekarang) <= jarak;
  });
}

// PB-13: menggambar panel Pengingat Tenggat
function tampilkanPengingat(tugas) {
  const perlu = tugasPerluDiingatkan(tugas);
  judulPengingat.textContent = "Pengingat tenggat (" + perlu.length + ")";
  daftarPengingat.innerHTML = "";

  if (perlu.length === 0) {
    const kosong = document.createElement("li");
    kosong.className = "kosong";
    kosong.textContent = "Tidak ada tugas yang perlu diingatkan.";
    daftarPengingat.appendChild(kosong);
    return;
  }

  perlu.forEach((t) => {
    const selisih = selisihHari(t.deadline);

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

    const label = document.createElement("span");
    label.textContent = labelPengingat(selisih);
    label.style.padding = "2px 10px";
    label.style.borderRadius = "999px";
    label.style.fontSize = "13px";
    label.style.fontWeight = "600";
    label.style.whiteSpace = "nowrap";
    if (selisih <= 0) {
      label.style.background = "#fee2e2";
      label.style.color = "#b91c1c";
    } else {
      label.style.background = "#fef3c7";
      label.style.color = "#92400e";
    }

    li.appendChild(kiri);
    li.appendChild(label);
    daftarPengingat.appendChild(li);
  });
}

// PB-14 Tahap 3a: menutup semua menu aksi yang sedang terbuka
function tutupSemuaMenu() {
  document.querySelectorAll(".menu-aksi.terbuka").forEach((m) => {
    m.classList.remove("terbuka");
    const tombol = m.parentElement.querySelector(".btn-menu");
    if (tombol) tombol.setAttribute("aria-expanded", "false");
  });
}
document.addEventListener("click", tutupSemuaMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") tutupSemuaMenu();
});

// PB-14 Tahap 3c: kelompok status yang sedang dilipat (tetap dilipat setelah daftar dimuat ulang)
const grupTertutup = new Set();

// Menggambar daftar tugas di halaman
function tampilkanTugas(tugas) {
  tampilkanRingkasan(tugas);
  tampilkanPengingat(tugas);
  daftar.innerHTML = "";

  if (tugas.length === 0) {
    const kosong = document.createElement("li");
    kosong.className = "kosong";
    kosong.textContent = "Belum ada tugas.";
    daftar.appendChild(kosong);
    return;
  }

  // PB-14 Tahap 3c: baris dikumpulkan per status dulu, lalu digambar per kelompok
  const barisPerStatus = { belum: [], sedang: [], selesai: [] };

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
    badge.textContent = LABEL_STATUS[t.status] || t.status;

    const pilih = document.createElement("select");
    pilih.className = "pilih-status";
    ["belum", "sedang", "selesai"].forEach((s) => {
      const opsi = document.createElement("option");
      opsi.value = s;
      opsi.textContent = LABEL_STATUS[s];
      if (t.status === s) opsi.selected = true;
      pilih.appendChild(opsi);
    });
    pilih.addEventListener("change", () => ubahStatus(t.id, pilih.value));

    // PB-14 Tahap 3a: menu aksi "..." berisi Ubah dan Hapus (seperti mockup)
    const menuWadah = document.createElement("span");
    menuWadah.className = "menu-wadah";

    const btnMenu = document.createElement("button");
    btnMenu.type = "button";
    btnMenu.className = "btn-menu";
    btnMenu.textContent = "\u22EF";
    btnMenu.setAttribute("aria-label", "Aksi untuk tugas " + t.title);
    btnMenu.setAttribute("aria-haspopup", "true");
    btnMenu.setAttribute("aria-expanded", "false");

    const menu = document.createElement("div");
    menu.className = "menu-aksi";

    const itemUbah = document.createElement("button");
    itemUbah.type = "button";
    itemUbah.className = "menu-item";
    itemUbah.textContent = "Ubah";
    itemUbah.addEventListener("click", () => {
      tutupSemuaMenu();
      mulaiUbah(t);
    });

    const itemHapus = document.createElement("button");
    itemHapus.type = "button";
    itemHapus.className = "menu-item menu-hapus";
    itemHapus.textContent = "Hapus";
    itemHapus.addEventListener("click", () => {
      tutupSemuaMenu();
      hapusTugas(t.id, t.title);
    });

    btnMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      const sedangTerbuka = menu.classList.contains("terbuka");
      tutupSemuaMenu();
      if (!sedangTerbuka) {
        menu.classList.add("terbuka");
        btnMenu.setAttribute("aria-expanded", "true");
      }
    });

    menu.appendChild(itemUbah);
    menu.appendChild(itemHapus);
    menuWadah.appendChild(btnMenu);
    menuWadah.appendChild(menu);

    kanan.appendChild(badge);
    kanan.appendChild(pilih);
    kanan.appendChild(menuWadah);

    li.appendChild(kiri);
    li.appendChild(kanan);
    (barisPerStatus[t.status] || barisPerStatus.belum).push(li);
  });

  // PB-14 Tahap 3c: daftar dikelompokkan per status, tiap kelompok bisa dilipat
  ["belum", "sedang", "selesai"].forEach((status) => {
    const baris = barisPerStatus[status];
    if (baris.length === 0) return;
    const tertutup = grupTertutup.has(status);

    const kepala = document.createElement("li");
    kepala.className = "grup-status" + (tertutup ? " tertutup" : "");
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "grup-tombol";
    tombol.setAttribute("aria-expanded", tertutup ? "false" : "true");
    const panah = document.createElement("span");
    panah.className = "grup-panah";
    panah.textContent = "\u25BE";
    const nama = document.createElement("span");
    nama.textContent = LABEL_STATUS[status];
    const jumlah = document.createElement("span");
    jumlah.className = "grup-jumlah";
    jumlah.textContent = baris.length;
    tombol.appendChild(panah);
    tombol.appendChild(nama);
    tombol.appendChild(jumlah);
    kepala.appendChild(tombol);
    daftar.appendChild(kepala);

    baris.forEach((li) => {
      li.hidden = tertutup;
      daftar.appendChild(li);
    });

    tombol.addEventListener("click", () => {
      const tutup = !grupTertutup.has(status);
      if (tutup) grupTertutup.add(status);
      else grupTertutup.delete(status);
      kepala.classList.toggle("tertutup", tutup);
      tombol.setAttribute("aria-expanded", tutup ? "false" : "true");
      baris.forEach((li) => (li.hidden = tutup));
    });
  });
}

// Tombol Tambah / Simpan perubahan
btnTambah.addEventListener("click", async () => {
  const judul = inJudul.value.trim();
  const matkul = inMatkul.value.trim();
  const deadline = inDeadline.value;

  if (!judul || !deadline) {
    pesanForm.textContent = "Judul dan tenggat wajib diisi.";
    return;
  }

  // PB-12: jarak pengingat harus bilangan bulat 0-365
  const pengingat = bacaPengingat();
  if (pengingat === null) {
    pesanForm.textContent = "Jarak pengingat harus bilangan bulat 0 sampai 365 hari.";
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
      pesanForm.textContent = "Gagal menyimpan perubahan: " + error.message;
      return;
    }
    if (!data || data.length === 0) {
      pesanForm.textContent = "Tugas tidak ditemukan atau bukan milik akun ini.";
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
    pesanForm.textContent = "Gagal menambah tugas: " + error.message;
    return;
  }

  pesan.textContent = "Tugas ditambahkan.";
  keluarModeUbah();
  await muatTugas();
});

// Tombol Keluar
document.getElementById("btn-keluar").addEventListener("click", async () => {
  await sb.auth.signOut();
  window.location.href = "index.html";
});

mulai();