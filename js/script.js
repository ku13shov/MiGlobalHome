// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__img');
const slidesInner = document.querySelector('.slider__inner');
const slidesField = document.querySelector('.slider__wrapper');
const width = window.getComputedStyle(slidesInner).width;
const dotsInner = document.createElement('ol');
let slideIndex = 1;
let offset = 0;

slidesField.style.width = 100 * slides.length + '%';

function changeSlide() {
  if (offset >= +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
    slideIndex = 1;
  } else {
    offset += +width.slice(0, width.length - 2);
    slideIndex++;
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  changeBgDots();
}

function addDots() {
  dotsInner.classList.add('dots-inner');
  slider.appendChild(dotsInner);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    dotsInner.append(dot);
  }
}

function changeBgDots() {
  dots.forEach(dot => {
    dot.style.backgroundColor = '#888';
  });
  dots[slideIndex - 1].style.backgroundColor = '#fff';
}

addDots();

const dots = document.querySelectorAll('.dot');

dots[slideIndex - 1].style.backgroundColor = '#fff';

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    let slideTo = +e.target.getAttribute('data-slide-to');

    slideIndex = slideTo;
    offset = +width.slice(0, width.length - 2) * (slideTo - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;

    changeBgDots();
  });
});

setInterval(changeSlide, 10000);