
let botonAgregar = document.querySelector('.boton-agregar')


botonAgregar.addEventListener('click', (e)=>{
    e.preventDefault();
    let entrada = document.querySelector('.input')
    let entradaValue = entrada.value 
    entrada.value = '';
    let task = document.createElement('div')
    task.className = 'item2';
    task.innerHTML = `
    <div class="parrafo">
        <p class=''>${entradaValue}</p>
    </div>
    <button class ='delete'><i class="fas fa-trash"></i> </button>
    `
    document.body.appendChild(task);  

    function removeTrash(){
        this.parentElement.remove()
    }

    let current_tasks = document.querySelectorAll(".delete");
    current_tasks.forEach(el=>el.addEventListener('click', removeTrash))    

})
