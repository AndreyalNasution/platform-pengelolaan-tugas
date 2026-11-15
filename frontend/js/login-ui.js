/* PB-23 (desain dengan bantuan Manus). UI saja: toggel panel Masuk/Buat akun; autentikasi tetap ditangani js/auth.js. */
(() => {
  const tabs = document.querySelectorAll('.auth-tab[data-tab]');
  const panels = document.querySelectorAll('.auth-panel[data-panel]');
  const title = document.getElementById('judul-auth');
  const subtitle = document.getElementById('deskripsi-auth');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selected = tab.dataset.tab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('aktif', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== selected; });
      if (title) title.textContent = selected === 'masuk' ? 'Senang melihatmu lagi' : 'Mulai dengan akunmu';
      if (subtitle) subtitle.textContent = selected === 'masuk'
        ? 'Masuk untuk melanjutkan rencanamu hari ini.'
        : 'Buat akun untuk menata tugas dan tenggat kuliahmu.';
      const message = document.getElementById('pesan');
      if (message) message.textContent = '';
    });
  });
})();