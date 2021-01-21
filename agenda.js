
//Clase
function contacto(){

    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
}

//Objeto 'con' de la clase "Contacto"
con = new contacto();


//variables en arreglo para almacenar instancias de "Contanto"
//Es tipo var, porque es global lo que indica que la podemos usar dentro de una funcion.
var contactos = new Array();

//Abreviacion de document.getElementById
function doc(id){
    return document.getElementById(id);
}

//Funcion para agregar contacto
function agregarContacto(){

doc("divFormulario").style.display='inline';
doc('txtNombre').focus();

}

//Funcion para vaciar form
function vaciar(){
    doc('txtNombre').value = '';
    doc('txtApellido').value = '';
    doc('txtTelefono').value = '';
}

//Funcion para registrar contacto
function guardar(){
    //Objeto 'con' de la clase "Contacto"
    con = new contacto();
    
    con.nombre = doc('txtNombre').value;
    con.apellido = doc('txtApellido').value;
    con.telefono = doc('txtTelefono').value;
    
    //Creamos una variable para almacenar estos valores, con los atributos dentro.
    contacto = {nombre: con.nombre , apellido: con.apellido, telefono: con.telefono};
    
    fetch("http://www.raydelto.org/agenda.php", 
{
 method:'POST', 
 body:JSON.stringify(contacto)} //Enviamos esta variable 
).then( res => res.json()).then(
 (res) => 
{
 console.log(res); // Imprime la respuesta del servidor en la API
}
);

    contactos[contactos.length] = con; //Obtiene el valor en el arreglo
    vaciar();
    alert("Haga click en MOSTRAR para visualizar su contacto guardado en CONFIRMADOS.");
 

}

function ocultar(){

    doc("divFormulario").style.display='none'
}


//Funcion para mostrar contactos

function mostrar(){

//Vaciar el div para no repetir lo mismo
doc('Todosloscontactos').innerHTML = '';

for( x = 0; x < contactos.length; x++){ 

//Creamos una variable que tendra el array con la posicion de x.
con =  contactos [x];

//Creamos un div
div = document.createElement('div');

//Le agregamos atributos
div.setAttribute('class', 'contacto');

//Agregamos estos valores en el div creado dentro de este bucle
div.innerHTML = 
"Nombre: " + con.nombre + "<br/>" +
"Apellido: " + con.apellido + "<br/>" +
"Telefono: " + con.telefono + "<br/>";

//Pasamos este div creado en el for como hijo en el div Padre.
doc('Todosloscontactos').appendChild(div);


    }

}
  
function obtenerDatos(){
    fetch("http://www.raydelto.org/agenda.php") //url
    .then(
        function(valor)
        {
            return valor.json();
        }
    ).then(function(valor)
    {

        
        doc('itla').innerHTML = '';

        for(let i = 0; i < valor.length; i++){
        
        //Creamos un div

        div = document.createElement('div');

        //Creamos variables para almacenar los valores
        coon =  valor[i].nombre;

        conn =  valor[i].apellido;

        connn =  valor[i].telefono;

        //Agregamos estos valores en el div creado dentro de este bucle

        div.innerHTML += 
        "Nombre: " + coon + "<br/>" +
        "Apellido: " + conn + "<br/>" +
        "Telefono: " + connn + "<br/>";

        //Pasamos este div creado en el for como hijo en el div Padre.
        
        doc('itla').appendChild(div);
        
        }

        
    }
  );
}