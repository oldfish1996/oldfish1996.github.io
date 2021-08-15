const boxes = document.querySelectorAll('.box');

load();
window.addEventListener('scroll',load);

function load() {
  const windowHeight = window.innerHeight;
  boxes.forEach(box=> {
    let bottom = box.getBoundingClientRect().bottom;
    if(bottom<windowHeight) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}