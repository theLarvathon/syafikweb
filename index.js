// ============= DARK MODE TOGGLE ============== //
const body = document.body;
const text = document.querySelectorAll(".Text");
const bg = document.querySelectorAll(".bg");
const nav = document.querySelectorAll(".navbg");
const toggleBtns = document.querySelectorAll(".toggleMode");
const named = document.querySelector(".named");
const namedSpan = document.querySelector(".namedSpan");
const textnav = document.querySelectorAll(".Text-nav");
const bgBtn = document.querySelectorAll(".bg-button");
const svg = document.querySelector(".svg");

// animation
const fadein = document.getElementById("fadein");
const fadeinA = document.getElementById("fadeinA");
const fadeinP = document.getElementById("fadeinP");
// const h4 = document.querySelectorAll("h4");
// const h2 = document.querySelector("h2");
window.onload = function () {
  svg.classList.add("dark-mode");
  named.classList.add("dark-mode");
  namedSpan.classList.add("dark-mode");
};
toggleBtns.forEach((toggleBtn) => {
toggleBtn.addEventListener("click", function () {
  // Cek mode saat ini
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    text.forEach((text) => text.classList.remove("light-mode"));
    bg.forEach((r) => r.classList.remove("light-mode"));
    nav.forEach((r) => r.classList.remove("light-mode"));
    named.classList.remove("light-mode");
    namedSpan.classList.remove("light-mode");
    named.classList.add("dark-mode");
    namedSpan.classList.add("dark-mode");
    textnav.forEach((r) => r.classList.remove("light-mode"));
    bgBtn.forEach((r) => r.classList.remove("light-mode"));
    svg.classList.remove("light-mode");
    svg.classList.add("dark-mode");
    // Update teks tombol
    toggleBtn.textContent = "light-mode";
  } else {
    body.classList.add("light-mode");
    text.forEach((r) => r.classList.add("light-mode"));
    named.classList.add("light-mode");
    namedSpan.classList.add("light-mode");
    named.classList.remove("dark-mode");
    namedSpan.classList.remove("dark-mode");
    bg.forEach((r) => r.classList.add("light-mode"));
    nav.forEach((r) => r.classList.add("light-mode"));
    textnav.forEach((r) => r.classList.add("light-mode"));
    bgBtn.forEach((r) => r.classList.add("light-mode"));
    svg.classList.add("light-mode");
    svg.classList.remove("dark-mode");

    toggleBtns.textContent = "Dark-mode";
  }
});
});

// ============= HUMBERGER MENU ============== //

const humbergerMenu = document.getElementById("humberger-menu");
const mobilemenu = document.getElementById('mobile-menu');
const iconOpen = `<svg class="size-8 fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
</svg>`;

const iconClose = `<svg class="size-8 fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
</svg>`;
let isMenuOpen = false; // Variabel untuk melacak status menu
humbergerMenu.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen; // Toggle status menu
    if (isMenuOpen) {
        mobilemenu.classList.remove("hidden");
        mobilemenu.classList.add("flex");
        hamburgerMenu.innerHTML = iconClose;
    } else {
        mobilemenu.classList.add("hidden");
        mobilemenu.classList.remove("flex");
        hamburgerMenu.innerHTML = iconOpen;
    }
});


// ============== CAROUSEL DENGAN GSAP ==============
document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
        console.error('GSAP tidak ditemukan!');
        return;
    }

    const logos = [
          "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
          "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
          "https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white",
          "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
          "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
          "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
          "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
          "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
          "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
          "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
          "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
          "https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=Codewars&logoColor=white",
          "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
          "https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black",
          "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
          "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
          "https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=claude&logoColor=white"
];

    const container = document.querySelector('.carousel-container');
    const track = document.getElementById('carouselTrack');
    
    // Buat carousel items
    function buildCarousel() {
        track.innerHTML = '';
        
        // Buat 3 set untuk memastikan tidak ada kekosongan
        for (let set = 0; set < 3; set++) {
            logos.forEach((logoUrl) => {
                const item = document.createElement('div');
                item.className = 'carousel-item';
                
                const img = document.createElement('img');
                img.src = logoUrl;
                img.alt = 'Tech logo';
                item.appendChild(img);
                track.appendChild(item);
            });
        }
    }
    
    buildCarousel();
    
    // Hitung total lebar
    const totalWidth = track.scrollWidth / 3; // Lebar 1 set
    
    // Animasi infinite dengan GSAP
    function animateCarousel() {
        // Set posisi awal
        gsap.set(track, { x: 0 });
        
        // Buat timeline
        const tl = gsap.timeline({
            repeat: -1,
            ease: "none",
            onRepeat: function() {
                // Reset posisi tanpa jeda
                gsap.set(track, { x: 0 });
            }
        });
        
        // Animasi geser
        tl.to(track, {
            x: -totalWidth,
            duration: 20,
            ease: "none"
        });
        
        return tl;
    }
    
    const carouselAnim = animateCarousel();
    
    // Pause on hover
    container.addEventListener('mouseenter', () => {
        carouselAnim.pause();
    });
    
    container.addEventListener('mouseleave', () => {
        carouselAnim.resume();
    });
    
    console.log('🚀 GSAP Carousel berjalan!');
});

document.addEventListener("DOMContentLoaded",function(){
const dividers = document.querySelectorAll(".pixel-divider");
  const blockCount = 12;
dividers.forEach(divider =>{
  for (let i = 0; i < blockCount; i++) {
    const block = document.createElement("div");
    const isEven = i % 2 === 0;
    block.className = `flex-1 border-t-2 border-r-2 border-r-blue-700 border-blue-300 ${
      isEven ? "bg-blue-500" : "bg-blue-600"
    }`;
    divider.appendChild(block);
  }
});
});