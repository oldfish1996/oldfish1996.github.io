const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

let opacity = setInterval(blurring,30);

function blurring() {
  load++;
  if(load>99){
    clearInterval(opacity);
  }
  bg.style.filter = `blur(${10-load/10}px)`
  loadText.innerText = `${load}%`;
  loadText.style.opacity = `${(100-load)/100}`;
}