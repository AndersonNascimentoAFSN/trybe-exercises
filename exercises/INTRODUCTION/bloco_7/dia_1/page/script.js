const btn = document.querySelector('.btn');
const span = document.querySelector('span');
let clickCount = 0;

const clickBtnCount = () => {
  clickCount += 1;
  console.log(clickCount);
  span.textContent = clickCount;
}

btn.addEventListener('click', clickBtnCount);
