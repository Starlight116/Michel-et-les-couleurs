// Animation texte
const contents = document.querySelectorAll('.content'); // Sélectionne tous les éléments avec la classe 'content'

// Utilisation de l'Intersection Observer pour détecter la visibilité des éléments
// Lorsqu'un élément devient visible, on ajoute la classe 'visible' pour déclencher l'animation
const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
            else entry.target.classList.remove('visible');
        });
    }, 
    { threshold: 0.3 }
); // Le seuil de 0.3 signifie que 30% de l'élément doit être visible pour déclencher l'animation

contents.forEach(content => observer.observe(content));


// Animation images
const sections = document.querySelectorAll('section'); // Sélectionne tous les éléments <section>
const images = document.querySelectorAll('.image-layer'); // Sélectionne tous les éléments avec la classe 'image-layer'

// Écoute l'événement de défilement de la fenêtre

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2; // on cherche le milieu de la fenêtre

    // Parcourt chaque section pour vérifier si elle est en vue
    sections.forEach((section, index) => {
        const top = section.offsetTop; // Position supérieure de la section
        const bottom = top + section.offsetHeight; // Position inférieure de la section

        // Vérifie si la position de défilement est entre le haut de la section suivante et le bas de la section actuelle
        if (scrollPos >= top && scrollPos < bottom) { 
            images.forEach(img => img.classList.remove('active'));// Retire la classe 'active' de toutes les images
            images[index].classList.add('active');// Ajoute la classe 'active' à l'image correspondant à la section en vue

            const imageFrame = document.querySelector('.image-frame'); // Sélectionne l'élément avec la classe 'image-frame'
            imageFrame.style.right = (index % 2 === 0) ? '25%' : '5%'; // Change la position droite de l'image en fonction de l'index de la section (paire l'image est à 25%, impaire à 5%)
        }
    });
});