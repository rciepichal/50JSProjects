const tagsEl = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

// When entering a page, automatically focus a textarea.
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  //   console.log(e);
  if (e.keyCode === 13) {
    e.target.value = '';
    randomPick();
    e.target.placeholder = 'Your pick down below!';
  }
});

function createTags(input) {
  //console.log(input);
  const tags = input
    .split(',')
    // why not tag.length > 0 => because , l,
    .filter((tag) => tag.trim().length > 0)
    .map((tag) => tag.trim());
  tagsEl.innerHTML = '';
  tags.forEach((arrElement) => {
    const newSpan = document.createElement('span');
    newSpan.classList.add('tag');
    newSpan.innerText = arrElement;
    tagsEl.append(newSpan);
  });
}

function randomPick() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag2 = pickRandomTag();
      highlightTag(randomTag2);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
