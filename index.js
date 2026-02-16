const body = document.body;
const Text = document.querySelectorAll(".Text");
const bg = document.querySelectorAll(".bg");
const nav = document.querySelectorAll(".navbg");
const toggleBtn = document.getElementById("toggleMode");

// animation
const fadein = document.getElementById("fadein");
const fadeinA = document.getElementById("fadeinA");
const fadeinP = document.getElementById("fadeinP");
// const h4 = document.querySelectorAll("h4");
// const h2 = document.querySelector("h2");


toggleBtn.addEventListener("click", function () {
  // Cek mode saat ini
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    Text.forEach((Text) => {
      Text.classList.remove("light-mode");
    });
    bg.forEach((r) => {
      r.classList.remove("light-mode");
    });
    nav.forEach((r) => {
      r.classList.remove("light-mode");
    });
    // Update teks tombol
    toggleBtn.textContent = "light-mode";
  } else {
    body.classList.add("light-mode");
    Text.forEach((Text) => {
      Text.classList.add("light-mode");
    });

    bg.forEach((r) => {
      r.classList.add("light-mode");
    });
    nav.forEach((r) => {
      r.classList.add("light-mode");
    });

    toggleBtn.textContent = "Dark-mode";
  }
});

gsap.fr