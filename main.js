// JavaScript for adding interactions and enhancing animations

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a.nav-link');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href") === "#" ? "home" : event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate__animated');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(parallaxElement => {
            parallaxElement.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        });
    });

    // Hover effects
    const hoverTiltElements = document.querySelectorAll('.hover-tilt');
    hoverTiltElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            const tiltX = xPos * 10;
            const tiltY = yPos * 10;

            element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        });

        element.addEventListener('mouseleave', function () {
            element.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
});

// JavaScript for adding interactions and enhancing animations

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a.nav-link');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href") === "#" ? "home" : event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate__animated');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for hero section and experience section
    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(parallaxElement => {
            parallaxElement.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        });
    });

    // Hover effects
    const hoverTiltElements = document.querySelectorAll('.hover-tilt');
    hoverTiltElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            const tiltX = xPos * 10;
            const tiltY = yPos * 10;

            element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        });

        element.addEventListener('mouseleave', function () {
            element.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    // Hover effects for cards and timeline items
    const hover3dElements = document.querySelectorAll('.hover-3d');
    hover3dElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            const tiltX = xPos * 20;
            const tiltY = yPos * 20;

            element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        });

        element.addEventListener('mouseleave', function () {
            element.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
});

// JavaScript for adding interactions and enhancing animations

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a.nav-link');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href") === "#" ? "home" : event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate__animated');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for hero section, experience section, and skills section
    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(parallaxElement => {
            parallaxElement.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        });
    });

    // Hover effects
    const hoverTiltElements = document.querySelectorAll('.hover-tilt');
    hoverTiltElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            const tiltX = xPos * 10;
            const tiltY = yPos * 10;

            element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        });

        element.addEventListener('mouseleave', function () {
            element.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    // Hover effects for cards, timeline items, skill circles, and project cards
    const hover3dElements = document.querySelectorAll('.hover-3d');
    hover3dElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            const tiltX = xPos * 20;
            const tiltY = yPos * 20;

            element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        });

        element.addEventListener('mouseleave', function () {
            element.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    // Fill skill circles based on data-skill attribute
    const skillCircles = document.querySelectorAll('.skill-circle');
    skillCircles.forEach(circle => {
        const skillValue = circle.querySelector('.skill-fill').dataset.skill;
        circle.querySelector('.skill-fill').style.width = `${skillValue}%`;
    });

    // Floating icon scroll to top
    const floatingIcon = document.querySelector('.floating-icon');
    floatingIcon.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission (with basic validation)
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message envoyé ! Merci de m\'avoir contacté.');
        form.reset();
    });
});
