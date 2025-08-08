const botonCerrar = document.getElementById("menu-hamburguesa");
const anchors = document.querySelectorAll(".navbar a");

anchors.forEach((a) =>{
    a.addEventListener("click", function(){
        botonCerrar.click();
    });
});

console.log("Hola visitante, ¿Qué haces fisgoneando?")
console.log("Bueno, ya que viniste hasta acá, bienvenido a mi humilde morada.")
console.log("No es mucho, pero es trabajo honesto.")
console.log("Disfruta la visita, y que estés bien, ¡Chau!")
