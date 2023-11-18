const btnStartPause = document.querySelector('#start-pause');
const btnReset = document.querySelector('#reset');
const cronometro = document.querySelector('.cronometro');

let [horas, minutos, segundos] = [0,0,0];
let estado = 'pausado';


btnStartPause.addEventListener('click', () =>{
  const btnClass = btnStartPause.classList;
  if(estado === 'pausado'){
    intervalo = window.setInterval(actualizarCronometro, 1000)
    btnClass.remove('start');
    btnClass.add('pause');
    btnStartPause.innerHTML = '<i class="bi bi-pause-fill"></i>'
    estado = 'activo'
  } else {
    window.clearInterval(intervalo)
    btnClass.remove('pause');
    btnClass.add('start');
    btnStartPause.innerHTML = '<i class="bi bi-play-fill"></i>'
    estado = 'pausado'
  }
})


function actualizarCronometro(){
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

  cronometro.innerText = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
}

function formatTime(unidad) {
  return unidad < 10 ? '0' + unidad : unidad ;
}

btnReset.addEventListener('click', () => {
  window.clearInterval(intervalo);
  estado = 'pausado';
  [horas, minutos, segundos] = [0,0,0];
  cronometro.innerText = '00:00:00'
  btnStartPause.classList = 'start'
  btnStartPause.innerHTML = '<i class="bi bi-play-fill"></i>'
})
