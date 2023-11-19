const btnStartPause = document.querySelector('#start-pause');
const btnClass = btnStartPause.classList;
const btnReset = document.querySelector('#reset');
const cronometro = document.querySelector('.cronometro');

let [horas, minutos, segundos] = [0,0,0];
let estado = 'pausado';
let intervalo;

btnStartPause.addEventListener('click', () => 
  estado === 'pausado' ? iniciar() : detener() );

function iniciar() {
  intervalo = window.setInterval(correrCronometro, 1000)
  btnClass.remove('start');
  btnClass.add('pause');
  btnStartPause.innerHTML = '<i class="bi bi-pause-fill"></i>'
  estado = 'activo'
}

function detener() {
  window.clearInterval(intervalo)
  btnClass.remove('pause');
  btnClass.add('start');
  btnStartPause.innerHTML = '<i class="bi bi-play-fill"></i>'
  estado = 'pausado'
}


function correrCronometro(){
  segundos++;
  if(segundos === 60){
    segundos = 0;
    minutos++;
    if(minutos === 60){
      minutos = 0;
      horas++;
    }
  }

  let formatoHoras = formatTime(horas);
  let formatoMinutos = formatTime(minutos);
  let formatoSegundos = formatTime(segundos);

  function formatTime(unidad) {
    return unidad < 10 ? '0' + unidad : unidad ;
  }

  cronometro.innerText = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
}


btnReset.addEventListener('click', () => {
  detener();
  [horas, minutos, segundos] = [0,0,0];
  cronometro.innerText = '00:00:00'
})
