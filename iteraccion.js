document.getElementById("boton").addEventListener("click", function() {
    alert("¡Gracias por visitar mi página!");
});


// Efecto de aparición al hacer scroll
const elementos = document.querySelectorAll(".fade-in");

function mostrarElementos(){

    const trigbottom = window.innerHeight * 0.84;

    elementos.forEach(el => {
        const boxtop = el.getBoundingClientRect().top;

        if (boxtop < trigbottom) {
            el.classList.add("visible");

        }
    });
}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


// efecto para mandar a llamar cierta parte de la pagina 

const botones = document.querySelectorAll("button[data-target]");

botones.forEach((boton) =>{
    boton.addEventListener("click", () => {
        const idDestino = boton.getAttribute("data-target");
        const seccion = document.getElementById(idDestino);
        seccion.scrollIntoView({behavior: "smooth"});
    })
})
