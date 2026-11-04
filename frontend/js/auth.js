// Membuat koneksi ke Supabase memakai URL dan kunci dari config.js
// (namanya "sb" karena "supabase" sudah dipakai oleh library-nya)
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const pesan = document.getElementById("pesan");

// Tombol Daftar: membuat akun baru
document.getElementById("btn-daftar").addEventListener("click", async () => {
  const nama = document.getElementById("daftar-nama").value;
  const email = document.getElementById("daftar-email").value;
  const password = document.getElementById("daftar-password").value;

  const { error } = await sb.auth.signUp({
    email: email,
    password: password,
    options: { data: { full_name: nama } },
  });

  if (error) {
    pesan.textContent = "Gagal daftar: " + error.message;
  } else {
    pesan.textContent = "Daftar berhasil.";
  }
});

// Tombol Masuk: login dengan akun yang sudah ada
document.getElementById("btn-masuk").addEventListener("click", async () => {
  const email = document.getElementById("masuk-email").value;
  const password = document.getElementById("masuk-password").value;

  const { data, error } = await sb.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    pesan.textContent = "Gagal masuk: " + error.message;
  } else {
    pesan.textContent = "Berhasil masuk sebagai " + data.user.email;
  }
});