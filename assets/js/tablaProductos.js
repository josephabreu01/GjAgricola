
var productos = document.querySelector('#productos');
var cabecera = document.querySelector('#cabecera');
var listado;

    function listaProductos() {
    fetch('assets/js/productos.json')
    .then(res=>res.json())
    .then(lista=>{
        tablaProductos(lista)
        listado =lista;
    })
    $('#listadoProductos').hide()
    $('#cerarListadoProductos').show();
    $('#productos').show();
    $('#cabecera').show();
    $('#buscador').show();
}

function tablaProductos(lista){
    productos.innerHTML ='';
    cabecera.innerHTML='';
    
    lista.forEach(producto => {
            productos.innerHTML += `
        <tr>
        <td>${''}</td>
        <td>${producto.nombre}</td>
        <td>${producto.Tipo}</td>
      </tr>
        `
        });
        cabecera.innerHTML=`
        <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
      </tr>
        ` 
    
}

function ocularListadoProductos() {
    $('#listadoProductos').show();
    $('#cerarListadoProductos').hide();
    $('#productos').hide();
    $('#cabecera').hide();
    $('#buscador').hide();
}
$('#cerarListadoProductos').hide();
$('#buscador').hide();

function buscar() {
    var nombre =  document.getElementById("nombre").value.toString();
    var tipo = document.getElementById("tipo").value.toString();
    var filtrados = [];
    nombre = nombre.toUpperCase();
    listado.forEach(productos => {
        if(productos.nombre.includes(nombre) && productos.Tipo.includes(tipo)){
           return filtrados.push(productos);
        }
    });

    if(filtrados.length){tablaProductos(filtrados)}
     else{ tablaProductos("")}
    
}

function limpiarBusqueda() {
    listaProductos();
    document.getElementById("nombre").value = '';
    document.getElementById("tipo").value = '';
}