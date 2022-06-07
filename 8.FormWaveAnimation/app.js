const labels = document.querySelectorAll('.form__label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span class="form__span" style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
});
