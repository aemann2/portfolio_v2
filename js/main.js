const navLinks = document.querySelector('.navbar__links');
const navbar = document.querySelector('.navbar');

// GSAP
const tl = gsap.timeline();
tl.from(".welcome__img", {opacity: 0, duration: .7});
tl.from(".welcome__text", {x:'-100vw', duration: 1, ease:'power1'});
tl.fromTo(".navbar__links", {opacity: 0}, {opacity: 1, duration: 1.5});

// hamburger menu
function hamburgerMenu() {
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}

// restores main navbar above 800px
function restoreNav() {
  if (window.innerWidth > 800) {
    navLinks.style.display = 'flex';
    if (window.scrollY < window.innerHeight - 50) {
      navbar.style.mixBlendMode = 'difference';
    }
  } else {
    navLinks.style.display = 'none';
    navbar.style.mixBlendMode = 'normal';
  }
}

window.addEventListener('resize', restoreNav);

// navbar color transition on scroll
window.onscroll = () => {
  let linkStyles = window.getComputedStyle(navbar);
  if (window.scrollY > window.innerHeight - 50) {
    navbar.style.backgroundColor = 'rgb(22, 39, 89)';
    navbar.style.mixBlendMode = 'normal';
  } else if (linkStyles.position !== 'fixed') {
    navbar.style.backgroundColor = '';
    navbar.style.mixBlendMode = 'normal';
  } else {
    navbar.style.backgroundColor = '';
    navbar.style.mixBlendMode = 'difference';
  }
};

// enables smooth scroll on Safari
var scroll = new SmoothScroll('a[href*="#"]',{
  header: '.navbar',
  speed: 700
});

// swiper
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});