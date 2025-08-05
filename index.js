const botonCerrar = document.getElementById("menu-hamburguesa");
const anchors = document.querySelectorAll(".navbar a");

anchors.forEach((a) =>{
    a.addEventListener("click", function(){
        botonCerrar.click();
    });
});