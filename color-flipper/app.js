const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const text = document.querySelector('.color');

btn.addEventListener('click', () => {
    const color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color];
    text.textContent = colors[color];
});