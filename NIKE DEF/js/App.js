const carrito = document.getElementById('carrito');
const Gorra = document.getElementById('');
const ListGorra = document.querySelector('');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners () {
 Gorra.addEventListener('click', comprarGorra);
 carrito.addEventListener('click', eliminarCarrito);
 vaciarcarritoBtn.addEventListener('click', vaciarCarrito);
 document.addEventListener('DOMContentLoaded',leerLocalStorange)
}

function comprarGorra(e){
   e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')) { 
       const gorra = e.target.parentElement.parentElement;
       leerDatosGorra(gorra);
   }
}

function leerDatosGorra(gorra) {
    const infoGorra = {
        imagen: gorra.querySelector('img').src,
        titulo: gorra.querySelector('h4').textContent,
        precio: gorra.querySelector('precio span').textContent,
        id: gorra.querySelector('a').getAttribute('date-id')
       }
       insertarCarrito(infogorra);
}

function insertarCarrito(gorra) {
    const row = document.createElement('tr');
    rw.innerHTML = '
    <td>
        <img src="${gorra.imagen}" width=100>
    </td>        
    <td>${gorra.titulo}</td> 
    <td>${gorra.precio}</td>
    <td>
        <a herf="#" class ="borrar-gorra" data-id"${gorra.id}>">X</a>
    </td>
   ';
    listagorra.appendChild(row);
    guardarGorraLocalStorage(gorra);
}


function eliminarGorra(e) {
    e.preventDefault();
    
    let gorra,
    gorraId;
    if(e.target.classList.contains('borrar-gorra')){
        e.target.parentElement.parentElement.remove();
        gorra = e.target.parentElement.parentElement;
        gorraId = gorra.querySelector('a').getAttribute('data-id');
    }
    eliminarGorraLocalStorage(gorraId);
}

function vaciarCarrito(){
    while(listGorra.firstChild){
        listGorra.removeChild(listaGorra.firstChild);
    }
    
    vaciarLocalStorage();
    return false;
} 

function guardarGorraLocalStorage(gorra) {
    let gorra;
    gorra = obtenerGorraLocalStorage();
    gorra.push(gorra);
    localStorage.setItem('gorra', JSON.stringify(gorra))
} 

function obtenerGorraLocalStorage() {
    let gorraLS;
    
    if(localStorage.getItem('gorra') === null){
        gorraLS = [];
     } else {
         gorraLS = JSON.parse(localStorage.getItem('gorra'));
     }
     return gorraLS;
}

function leerLocalStorage() {
    let gorraLS;
    
    gorraLS = obtenerGorraLocalStorage();
    
    gorraLS.forEach(function(gorra)){
       const row = document.createElement('tr');
       row.innerHTML = '
           <td>
               <img src="${gorra.imagen}" width=100>
           </td> 
           <td>${gorra.titulo}</td>
           <td>${gorra.precio}</td>
           <td>
               <a herf="#" class="borrar-gorra" data-id="${gorra.id}">X</a>
           </td>
        ';
        ListaGorra.appendChild(row);
    });

}

function eliminarGorraLocalStorage(gorra) {
    let gorraLS;
    
    gorraLS = obtenerGorraLocalStorage();
    
    gorraLS.forEach(function(gorraLS , Temporadas)){
        if(gorraLS.id === gorra){
            gorraLS.splice(Temporadas, 1)
        }
    });

    localStorage.setItem('gorra', JSON.stringify(gorraLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}


    
               
    
        
    
    
    
       