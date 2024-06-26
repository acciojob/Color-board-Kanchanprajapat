//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const SQUARES = 800;

    for (let i = 0; i < SQUARES; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));

        container.appendChild(square);
    }

    function setColor(element) {
        const color = getRandomColor();
        element.style.backgroundColor = color;
    }

    function removeColor(element) {
        setTimeout(() => {
            element.style.backgroundColor = '#444';
        }, 1000);
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
