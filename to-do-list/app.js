const inputTarea = document.querySelector('#ingresar-tarea');
const btnAgregar = document.querySelector('#agregar');
const listaTareas = document.querySelector('.lista-tareas');

// inputTarea.addEventListener('key', agregarTarea())
btnAgregar.addEventListener('click', agregarTarea);

function agregarTarea() {
  if(inputTarea.value){
    let item = document.createElement('li');
    item.classList.add('tarea');

    let tareaNueva = document.createElement('span');
    tareaNueva.innerText = inputTarea.value;

    let iconos = document.createElement('div');
    iconos.classList.add('iconos');

    let iconoTerminar = document.createElement('i');
    iconoTerminar.classList.add('bi', 'bi-check-circle', 'terminar');

    let iconoEliminar = document.createElement('i');
    iconoEliminar.classList.add('bi', 'bi-x-circle', 'eliminar');
    
    iconos.appendChild(iconoTerminar);
    iconos.appendChild(iconoEliminar);

    item.appendChild(tareaNueva);
    item.appendChild(iconos);

    listaTareas.appendChild(item);
    
    inputTarea.value = ''
    // console.log(tareaNueva)
  }
}