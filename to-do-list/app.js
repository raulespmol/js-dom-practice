const inputTarea = document.querySelector('#ingresar-tarea');
const btnAgregar = document.querySelector('#agregar');
const listaTareas = document.querySelector('.lista-tareas');

btnAgregar.addEventListener('click', agregarTarea);
inputTarea.addEventListener('keydown', e => {
  if(e.key === 'Enter'){ agregarTarea() };
});

function agregarTarea() {
  if(inputTarea.value){
    let item = document.createElement('li');
    item.classList.add('tarea');

    //Tarea
    let tareaNueva = document.createElement('span');
    tareaNueva.innerText = inputTarea.value;

    //Iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');

    let iconoTerminar = document.createElement('i');
    iconoTerminar.classList.add('bi', 'bi-check-circle', 'terminar');

    let iconoEliminar = document.createElement('i');
    iconoEliminar.classList.add('bi', 'bi-x-circle', 'eliminar');

    //Estructurar
    iconos.append(iconoTerminar, iconoEliminar);
    item.append(tareaNueva, iconos);
    listaTareas.appendChild(item);

    //Resetear input
    inputTarea.value = '';
  } else {
    alert('Por favor ingresa una tarea')
  }
}