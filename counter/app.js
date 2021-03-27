const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;

function changeCountColor() {
    if (count > 0) { value.style.color = 'green'; }
    if (count < 0) { value.style.color = 'red'; }
    if (count === 0) { value.style.color = 'black'; }
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent === 'decrease') { --count; }
        if (btn.textContent === 'reset') { count = 0; }
        if (btn.textContent === 'increase') { ++count; }
        value.textContent = count;
        changeCountColor();
    });
});

