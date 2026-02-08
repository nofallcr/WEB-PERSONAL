window.onscroll = () => {
    let nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
};

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

const textElement = document.querySelector(".hero h1 span");
const text = "Naufal";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active'); 
});

document.querySelectorAll('.nav-links li a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));