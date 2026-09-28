/* ==================================
   MENÚ RESPONSIVE
================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("mostrar");

    });

}


/* ==================================
   PÉTALOS
================================== */

const contenedorPetalos =
    document.getElementById("petalos");


function crearPetalo() {

    if (!contenedorPetalos) {
        return;
    }

    const petalo =
        document.createElement("div");

    petalo.classList.add("petalo");

    petalo.innerHTML = "🌸";

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        (Math.random() * 12 + 10) + "px";

    petalo.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    petalo.style.animationDelay =
        (Math.random() * 2) + "s";

    contenedorPetalos.appendChild(petalo);


    setTimeout(() => {

        petalo.remove();

    }, 10000);

}


setInterval(crearPetalo, 700);


/* ==================================
   JOYA INTERACTIVA
================================== */

const joya =
    document.getElementById("joya");

const deseoMensaje =
    document.getElementById("deseoMensaje");


if (joya && deseoMensaje) {

    joya.addEventListener("click", () => {

        deseoMensaje.classList.add("mostrar");

        joya.style.animation = "none";

        joya.innerHTML = "✨";

        crearExplosion();

    });

}


/* ==================================
   EFECTO AL HACER CLIC
================================== */

function crearExplosion() {

    for (let i = 0; i < 15; i++) {

        const estrella =
            document.createElement("div");

        estrella.innerHTML = "✨";

        estrella.style.position = "fixed";

        estrella.style.left = "50%";

        estrella.style.top = "50%";

        estrella.style.fontSize = "20px";

        estrella.style.zIndex = "2000";

        estrella.style.pointerEvents = "none";

        const x =
            (Math.random() - 0.5) * 500;

        const y =
            (Math.random() - 0.5) * 500;

        estrella.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)"
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1)`,
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x * 1.5}px, ${y * 1.5}px) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        document.body.appendChild(estrella);


        setTimeout(() => {

            estrella.remove();

        }, 1300);

    }

}


/* ==================================
   ENTRADA DE LA PÁGINA
================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add("pagina-cargada");

    }
    
);
const musica = document.getElementById("musica");

if (musica) {

    // Recuperar el segundo donde quedó la canción
    const tiempoGuardado = localStorage.getItem("tiempoMusica");

    if (tiempoGuardado) {
        musica.currentTime = parseFloat(tiempoGuardado);
    }

    // Intentar reproducir la canción
    window.addEventListener("load", () => {

        musica.play().catch(() => {
            console.log("El navegador bloqueó el autoplay.");
        });

    });

    // Guardar constantemente la posición de la canción
    setInterval(() => {

        if (!musica.paused) {
            localStorage.setItem(
                "tiempoMusica",
                musica.currentTime
            );
        }

    }, 500);

}