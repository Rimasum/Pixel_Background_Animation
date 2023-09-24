for (let i = 1; i <= 500; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('box');
  document.querySelector('.animation_Area').appendChild(pixel);
}

function animate() {
  let box = document.querySelectorAll('.box');
  let random = Math.floor(Math.random() * box.length);
  box[random].classList.toggle('boxanimate');
  //console.log(random)
}

setInterval(animate);
