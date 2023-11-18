const btn = document.querySelector('#color-btn');
const colorSpan = document.querySelector('.color-code');

function generateColor() {
  let digitos = '0123456789ABCDEF';
  let colorCode = '#';
  for(i = 0; i < 6 ; i++){
    let indice = Math.floor(Math.random() * 16);
    colorCode += digitos[indice];
  }
  return colorCode;
}

btn.addEventListener('click', () => {
  let randomColor = generateColor();
  colorSpan.innerText = randomColor;
  document.body.style.backgroundColor = randomColor;
  document.documentElement.style.setProperty('--random-color', randomColor);
});

