const btn = document.getElementById('btn');
const cita = document.querySelector('.cita');
const autor = document.querySelector('.autor');

function randomNumber(min,max){
  //maximo incluido
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generarCita(){
  let randomIndex = randomNumber(0, citas.length - 1)
  cita.innerText = `"${citas[randomIndex].texto}"`
  autor.innerText = `- ${citas[randomIndex].autor}`
}

generarCita();
btn.addEventListener('click', generarCita);