gsap.registerPlugin(ScrollTrigger);
const navLinks = document.querySelector('.navbar__links');
const navbar = document.querySelector('.navbar');

// GSAP
const tl = gsap.timeline();

if (window.scrollY < window.innerHeight - 50) {
  tl.from(".welcome__img", {opacity: 0, duration: .7, delay: .3})
  .from(".welcome__text", {x:'-100vw', duration: 1, ease:'power1'})
  .fromTo(".navbar__links", {opacity: 0, visibility: 'hidden'}, {opacity: 1, duration: 1.5, visibility: 'visible'});
}

gsap.from(".skills", {  
  scrollTrigger: ".skills", // start the animation when ".box" enters the viewport (once)
  opacity: 0
});

gsap.utils.toArray(".projects__project").forEach(project => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      toggleActions: "play none none none",
      start: "top 75%",
    }
  });

  tl.from(project, {
    opacity: 0
  });
});

gsap.utils.toArray(".projects__project__img").forEach((image, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      toggleActions: "play none none none",
      start: "top 90%",
    }
  });
  // checking for even or odd 
  if (index % 2 === 0) {
    tl.from(image, {
      x: '20px'
    });
  } else {
    tl.from(image, {
      x: '-20px'
    });
  }
});

gsap.utils.toArray(".projects__project__text").forEach((text, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      toggleActions: "play none none none",
      start: "top 90%",
    }
  });
  // checking for even or odd 
  if (index % 2 === 0) {
    tl.from(text, {
      x: '-20px'
    });
  } else {
    tl.from(text, {
      x: '20px'
    });
  }
});

gsap.utils.toArray(".aboutme__blurbs__blurb").forEach(blurb => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: blurb,
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  tl.from(blurb, {  
    stagger: 0.2,
    autoAlpha: 0,
    y: 30,
    ease: "back.out(1.7)",
    duration: .8,
  },
  "-=1");
});

gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
  },
  opacity: 0
});

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
  if (window.innerWidth >= 800) {
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
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});