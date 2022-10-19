function leer() {
    return document.getElementById("todo").value //con value se obtiene el contenidio de la casilla
}

function agregar() {
    nodo = document.createElement("li")
    //texto = document.createTextNode("hola")//crear texto
    texto = document.createTextNode(leer())//convertir el string en objeto, "leer" es una función
    //console.log("texto") //quq aparezca en consola el texto
    nodo.appendChild(texto) //agregar texto
    nodo.setAttribute("id", leer())
    document.getElementById("lista").appendChild(nodo)//mandar al objeto
}

    /*
    MI BUSCAR CON FOROF

    listaTodo= document.getElementsByTagName('li');
    for (let li of listaTodo) {
        if (leer() != null){
        alert( "ya existe");
        }
    }*/

function buscarId() {
    //Buscar por id
    if(document.getElementById(leer()) == null){
        alert("no existe")
    }else{
        alert("Ya existe")
    }   
}
function buscarFor() {
    listaTodo= document.getElementsByTagName('li');
    for (let i = 0; i < listaTodo.length; i++) {
        const tarea = listaTodo [i];
        if(leer()== tarea.textContent)
        console.log("ya existe")
    }
}

function buscarOf(){
    listaTodo= document.getElementsByTagName('li');
    for (let li of listaTodo) {
        if(leer()== tarea.textContent){
        console.log("ya existe")
        }
    }
}
function buscar(){
    listaTodo= document.getElementsByTagName('li');
    for (let li in listaTodo) {
        if(Object.hasOwnProperty.call(listaTodo, tarea)){//busca propiedades que corresponda 
            a = listaTodo[tarea].childNodes[0]
            b = leer()
            //sconsole.log ("a", typeof a,textContent, "b", typeof b)
            console.log(listaTodo[tarea].childNodes[0].valuesOF)
            if(leer() == listaTodo[tarea].childNodes[0].valuesOF()){
                alert("ya existe")
            }else{
                alert("no existe")
            }
        }
    }
}

