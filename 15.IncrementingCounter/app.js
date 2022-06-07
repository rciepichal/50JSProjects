const counters = document.querySelectorAll('.counter');

counters.forEach((el) => {
  el.innerText = '0';

  // +, number, parseint
  const target = parseInt(el.dataset.target);
  const incrementValue = target / 200;

  const updateCounter = () => {
    // console.log(typeof target, target);
    const c = +el.innerText;
    if (c < target) {
      el.innerText = `${Math.floor(c + incrementValue)}`;
      setTimeout(() => {
        updateCounter();
      }, 1);
    } else {
      el.innerText = target;
    }
  };
  updateCounter();
});
