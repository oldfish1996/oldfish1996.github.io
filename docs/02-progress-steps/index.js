let currentIndex = 1;

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

const circles = document.querySelectorAll('.circle');

prev.addEventListener('click', () => {
  currentIndex--;
  if(currentIndex<1){
    currentIndex = 1;
  }
  update();
})
next.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > circles.length) {
    currentIndex = circles.length;
  }
  update();
})
function update() {
  console.log(currentIndex);
  circles.forEach((circle, index) => {
    if (index < currentIndex) {
      circle.classList.add('active');
      progress.style.width = `${(currentIndex-1)/(circles.length-1)*100}%`;
    }
    else {
      circle.classList.remove('active');
    }
  })
  if (currentIndex === 1) {
    prev.disabled = true;
  } else if (currentIndex === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}