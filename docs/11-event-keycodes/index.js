const key = document.getElementById('key');
const keyLocation = document.getElementById('key-location');
const code = document.getElementById('code');

window.addEventListener('keydown',(event)=>{
  key.innerText = event.key;
  keyLocation.innerText = event.location;
  code.innerText = event.code;
});

