
let botonAgregar = document.querySelector('.boton-agregar')


botonAgregar.addEventListener('click', (event)=>{
    event.preventDefault()
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

    let current_tasks = document.querySelectorAll(".delete");
    for(let i=0; i<current_tasks.length; i++){
        current_tasks[i].addEventListener('click',function(){
            this.parentElement.remove();
        }) }
    // let edit_tasks = document.querySelectorAll(".edit");
    // for(let i=0; i<edit_tasks.length; i++){
    //     edit_tasks[i].addEventListener('click',function(){
    //         this.parentElement.innerHTML = entrada.value;
    //     }) }

})


