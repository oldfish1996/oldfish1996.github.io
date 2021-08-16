const content = document.querySelector('.content');
const cite = document.querySelector('.cite');
const author = document.querySelector('.author');
const origin = document.querySelector('.origin');

const change = document.querySelector('.change');
generate();
change.addEventListener('click',generate);

async function generate() {
  const res = await fetch('https://v1.jinrishici.com/all.json',{
    method: 'GET'
  });
  const data = await res.json();
  console.log(data);
  content.innerText = data.content;
  author.innerText = `——${data.author}`;
  origin.innerText = `《${data.origin}》`;
}