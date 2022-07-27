const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -33.3333 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -33.3333 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 3 - 1) ? index+1 : 2;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -33.3333 + '%)';
});



const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');

const slider2 = document.querySelector('.slider2');

const indicatorParent2 = document.querySelector('.control2 ul'); 
const indicators2 = document.querySelectorAll('.control2 li');
index = 0;

indicators2.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control2 .selected2').classList.remove('selected2');
    indicator.classList.add('selected2');
    slider2.style.transform = 'translateX(' + (i) * -10 + '%)';  
    index = i;
    
  });
});

left2.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control2 .selected2').classList.remove('selected2');
  indicatorParent2.children[index].classList.add('selected2');
  slider2.style.transform = 'translateX(' + (index) * -10 + '%)';
});

right2.addEventListener('click', function() {
  index = (index < 10 - 1) ? index+1 : 9;
  document.querySelector('.control2 .selected2').classList.remove('selected2');
  indicatorParent2.children[index].classList.add('selected2');
  slider2.style.transform = 'translateX(' + (index) * -10 + '%)';
});
