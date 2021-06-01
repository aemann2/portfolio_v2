// hamburger menu

const navLinks = document.querySelector('.navbar__links');

function hamburgerMenu() {
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}

function restoreNav() {
  if (window.innerWidth > 800) {
    navLinks.style.display = 'flex';
  } else navLinks.style.display = 'none';
}

window.addEventListener('resize', restoreNav);

// navbar color transition

const navbar = document.querySelector('.navbar');

window.onscroll = () => {
  let linkStyles = window.getComputedStyle(navbar);
  if (window.scrollY > window.innerHeight - 50) {
    navbar.style.backgroundColor = 'rgb(22, 39, 89)';
    navbar.style.mixBlendMode = 'normal';
  } else if (linkStyles.position !== 'fixed') {
    navbar.style.backgroundColor = '';
    navbar.style.mixBlendMode = 'normal';
  }
  else {
    navbar.style.backgroundColor = '';
    navbar.style.mixBlendMode = 'difference';
  }
};
