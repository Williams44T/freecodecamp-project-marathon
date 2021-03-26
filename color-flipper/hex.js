const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const text = document.querySelector('.color');

function getRandomHex(color) {
    if (color.length === 7) { return color; }
    color += Math.floor(Math.random() * hex.length);
    return getRandomHex(color);
}

btn.addEventListener('click', () => {
    const color = getRandomHex('#');
    document.body.style.backgroundColor = color;
    text.textContent = color;
});

