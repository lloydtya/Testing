const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar navbar untuk menutup menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Ambil elemen tombol dan panel
const pengaturanBtn = document.querySelector("#pengaturan");
const pengaturanPanel = document.querySelector(".pengaturan-panel");

// Toggle panel pengaturan
pengaturanBtn.onclick = (e) => {
  e.preventDefault();
  pengaturanPanel.classList.toggle("active");
};

// Tutup panel jika klik di luar
document.addEventListener("click", function (e) {
  if (
    !pengaturanPanel.contains(e.target) &&
    !pengaturanBtn.contains(e.target)
  ) {
    pengaturanPanel.classList.remove("active");
  }
});
