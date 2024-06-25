// JavaScript to create the star field background
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 5 + 1; // Random duration between 1 and 6 seconds

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${top}px`;
    star.style.left = `${left}px`;
    star.style.background = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;
    star.style.animationDuration = `${animationDuration}s`;

    starsContainer.appendChild(star);
}

// Create 100 stars
for (let i = 0; i < 100; i++) {
    createStar();
}
