const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');

const slider2 = document.querySelector('.slider2');

const indicatorParent2 = document.querySelector('.control2 ul'); 
const indicators2 = document.querySelectorAll('.control2 li');
indexb = 0;

indicators2.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control2 .selected2').classList.remove('selected2');
    indicator.classList.add('selected2');
    slider2.style.transform = 'translateX(' + (i) * -10 + '%)';  
    indexb = i;
    
  });
});

left2.addEventListener('click', function () {
  indexb = (indexb > 0) ? indexb -1 : 0;
  document.querySelector('.control2 .selected2').classList.remove('selected2');
  indicatorParent2.children[indexb].classList.add('selected2');
  slider2.style.transform = 'translateX(' + (indexb) * -10 + '%)';
});

right2.addEventListener('click', function() {
  indexb = (indexb < 10 - 1) ? indexb +1 : 0;
  document.querySelector('.control2 .selected2').classList.remove('selected2');
  indicatorParent2.children[indexb].classList.add('selected2');
  slider2.style.transform = 'translateX(' + (indexb) * -10 + '%)';
});
