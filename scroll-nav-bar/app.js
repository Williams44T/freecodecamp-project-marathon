// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// ********** close links ************
const toggle = document.querySelector('.nav-toggle');
const linksBox = document.querySelector('.links-container');
const linksList = document.querySelector('.links');

toggle.addEventListener('click', () => {
    // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    const currentHeight = linksBox.getBoundingClientRect().height;
    const linksHeight = linksList.getBoundingClientRect().height;
    linksBox.style.height = !currentHeight ? `${linksHeight}px` : 0;
});


// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});


// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksBox.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');

        let position = section.offsetTop - navHeight;
        if (!fixedNav) { position -= navHeight; }
        if (navHeight > 82) { position += containerHeight; }

        window.scrollTo({ left: 0, top: position });
        linksBox.style.height = 0;
    });
});