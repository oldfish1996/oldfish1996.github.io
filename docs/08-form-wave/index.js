const labels = document.querySelectorAll('label');

labels.forEach(label=>{
  const words = label.innerText.split('');
  label.innerHTML = words.map((word,index)=> {
    return `<span style="transition-delay: ${50*index}ms;">${word}</span>`
  }).join('');
})