let btn= document.querySelector('#clickbtn');
let showclicks= document.querySelector('#showdata');
let counter= 0;

function printClick(){
    counter++;
    console.log("hiciste click en el boton")/* imprime mensaje en la consola*/
    showclicks.innerHTML= "numero de clicks: " + counter;

}

btn.addEventListener('click',printClick);/* cada vez que se hace un click se ejecuta la funcion printclick*/