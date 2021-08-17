const btns = document.querySelectorAll('.btn');
btns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.parentElement.parentElement.classList.toggle('active');
  })
})