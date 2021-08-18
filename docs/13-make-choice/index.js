const content = document.getElementById('content');
const tagsElement = document.getElementById('tags');

//按钮功能
const start = document.querySelector('.start');
const clear = document.querySelector('.clear');
start.addEventListener('click',randomSelect)
clear.addEventListener('click',()=>{
  tagsElement.innerHTML = '';
  content.value = '';
})

content.focus();
content.addEventListener('keyup',e=>{
  createTags(e.target.value);
})

function createTags(input) {
  const tags = input.split(/，|,|\n/).map(tag=>tag.trim()).filter(tag=>tag!=='');
  // console.log(tags);
  tagsElement.innerHTML = '';
  tags.forEach(tag => {
    let span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = tag;
    tagsElement.appendChild(span);
  });
}

function randomSelect() {
  let interval = setInterval(() => {
    const pickedTag = pickRandomTag();
    // console.log(pickedTag);
    highLight(pickedTag);
    setTimeout(() => {
      unHighLight(pickedTag)
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const pickedTag = pickRandomTag();
      // console.log(pickedTag);
      highLight(pickedTag);
    }, 100);
  }, 3000);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  let randonIndex = Math.floor(Math.random()*tags.length); 
  return tags[randonIndex];
}
function highLight(e) {
  e.classList.add('picked');
}
function unHighLight(e) {
  e.classList.remove('picked');
}