var div_histor = document.querySelector("#historial");
var div_imagenes = document.querySelector("#contenido");
var info = document.createElement('h3');
var informacion = [];
var contador=0;
var min = 0;
var max = 19;
var x =0;


$(document).ready(function(){

 $(".button").click(function(){

contador++;
console.log(contador);
personajes1();


 });

});


function personajes1(){


x = Math.floor(Math.random()*(max-min+1)+min);
console.log(x, info, informacion);


fetch('https://rickandmortyapi.com/api/character?page=1')
.then(data => data.json())
.then(character => {
	informacion[x] = character.results[x];
	console.log(informacion);

informacion.map((character, i) => {
    

    let cero = document.createElement('h3')
    let img = document.createElement('h3');
    let his = document.createElement('h3');
    var identificacion = [];


    info.innerHTML =  "<br/>" + "nombre:" +character.name + "<br/>" + "estado :" +character.status + "<br/>" + "especie :" +character.species + 
    "<br/>" + "genero :" +character.gender + "<br/>" + "ubicacion :" + character.location.name;
    console.log(info);
    img.innerHTML = character.image;
    
    his.innerHTML = (contador)+ ". id :"+ character.id +" " +" personaje :"+ character.name + "<br/>"
      

   for (var i = 0; i < contador; i++) {

   identificacion= i;
    console.log(identificacion);


   }


   	div_imagenes.appendChild(info);
    div_histor.appendChild(his);


      return{
        div_foto:img
      }

  	});
    delete informacion[x];
    console.log(informacion);
 });
     

}




