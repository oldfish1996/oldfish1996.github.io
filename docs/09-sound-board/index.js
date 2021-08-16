const soundBtns = document.querySelectorAll('.sound');
const sounds = document.querySelectorAll('audio');
const stop = document.querySelector('.stop');

soundBtns.forEach((soundBtn,index)=>{
  soundBtn.addEventListener('click',()=>{
    stopPlay();
    playSound(index);
  });
})
stop.addEventListener('click',()=>{
  stopPlay();
})
function playSound(index) {
  sounds[index].play();
  sounds[index].controls = true;
}
function stopPlay() {
  sounds.forEach(sound=>{
    sound.pause();
    sound.removeAttribute('controls');
  })
}