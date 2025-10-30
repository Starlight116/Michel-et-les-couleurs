// Animation texte
const contents = document.querySelectorAll('.content');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
        else entry.target.classList.remove('visible');
    });
}, { threshold: 0.3 });
contents.forEach(content => observer.observe(content));

// Animation images
const sections = document.querySelectorAll('section');
const images = document.querySelectorAll('.image-layer');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');

            const imageFrame = document.querySelector('.image-frame');
            imageFrame.style.right = (index % 2 === 0) ? '25%' : '5%';
        }
    });
});