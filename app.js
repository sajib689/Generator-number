const btn = document.querySelector('.btn');
const number = document.querySelector('.number');
btn.addEventListener('click', () => {
    number.innerHTML = Math.floor(Math.random() * 90000) + 10000;
})