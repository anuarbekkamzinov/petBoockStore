const model_btn = document.querySelector('[data-button]');
console.dir(model_btn);

const modal = document.querySelector('.modal__overlay');

model_btn.addEventListener('click', (e) => {
    modal.style.display = 'flex';
})