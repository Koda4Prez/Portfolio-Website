
function Marquee(selector, speed, direction = 'up') {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;

  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    if (direction === 'up') {
      firstElement.style.marginTop = `-${i}px`;
      if (i > firstElement.clientHeight) i = 0;
      i += speed;
    } else {
      firstElement.style.marginTop = `-${firstElement.clientHeight - i}px`;
      if (i > firstElement.clientHeight) i = 0;
      i += speed;
    }
  }, 0);
}

window.addEventListener('load', () => Marquee('.marqueeOne', 0.1, 'up'));
window.addEventListener('load', () => Marquee('.marqueeTwo', 0.08, 'down'));