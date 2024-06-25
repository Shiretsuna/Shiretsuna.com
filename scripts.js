// JavaScript to create the star field background
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    const top = Math.random() * 100 + '%';
    const left = Math.random() * 100 + '%';
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = top;
    star.style.left = left;
    star.style.background = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;

    starsContainer.appendChild(star);
}

// Create 150 stars
for (let i = 0; i < 150; i++) {
    createStar();
}
