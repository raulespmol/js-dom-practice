const rInput = document.getElementById('R');
const gInput = document.getElementById('G');
const bInput = document.getElementById('B');

const rSpan = document.querySelector('#rSpan');
const gSpan = document.querySelector('#gSpan');
const bSpan = document.querySelector('#bSpan');

let R = rInput.value;
let G = gInput.value;
let B = bInput.value;

rSpan.innerText = R
gSpan.innerText = G
bSpan.innerText = B

rInput.addEventListener('change', () => {
  R = rInput.value;
  rSpan.innerText = R;
  document.body.style.backgroundColor = `rgb(${R},${G},${B})`;
})

gInput.addEventListener('change', () => {
  G = gInput.value;
  gSpan.innerText = G;
  document.body.style.backgroundColor = `rgb(${R},${G},${B})`;
})

bInput.addEventListener('change', () => {
  B = bInput.value;
  bSpan.innerText = B;
  document.body.style.backgroundColor = `rgb(${R},${G},${B})`;
})
