const inputTarea = document.querySelector('#ingresar-tarea');
const btnAgregar = document.querySelector('#agregar');
const listaTareas = document.querySelector('.lista-tareas');

// inputTarea.addEventListener('key', agregarTarea())
btnAgregar.addEventListener('click', agregarTarea);

function agregarTarea() {
  if(inputTarea.value){
    let tareaNueva = document.createElement('li');
    tareaNueva.classList.add('tarea');
    tareaNueva.innerHTML = `
      <span>${inputTarea.value}</span>
      <div class="iconos">
        <i class="bi bi-check-circle"></i>
        <i class="bi bi-x-circle"></i>
      </div>
    `
    listaTareas.appendChild(tareaNueva);
    inputTarea.value = ''
    // console.log(tareaNueva)
  }
}