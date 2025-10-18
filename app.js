//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//ketika klik selain hamburger dan navbar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// ...existing code...

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


window.onload = function() {
    // Get all forms in the document
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Reset each form
        form.reset();
    });
}

// Clear form when using browser back button
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page was loaded from browser cache
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.reset();
        });
    }
});

window.onload = function() {
    // Reset scroll position to top
    window.scrollTo(0, 0);
    // Remove hash from URL without affecting history
    history.replaceState("", document.title, window.location.pathname);
    
}

// Add after existing code
// Intersection Observer for about section
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

// Observe about section
const aboutSection = document.querySelector('.about');
aboutObserver.observe(aboutSection);

