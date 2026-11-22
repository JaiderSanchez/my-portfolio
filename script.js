
// Visor de imágenes de los proyectos.
const modalImagen = document.getElementById("modal-img");
const imagenAmpliada = document.getElementById("modal-img-content");
const botonCerrarImagen = document.getElementById("modal-close");
let elementoAnterior = null;

function cerrarModal(idModal) {
  const modal = document.getElementById(idModal);
  if (!modal) return;

  modal.style.display = "none";

  if (idModal === "modal-img" && imagenAmpliada) {
    imagenAmpliada.removeAttribute("src");
  }

  if (elementoAnterior instanceof HTMLElement) {
    elementoAnterior.focus();
    elementoAnterior = null;
  }
}

function abrirModal(idModal) {
  const modal = document.getElementById(idModal);
  if (!modal) return;

  elementoAnterior = document.activeElement;
  modal.style.display = "block";
}

if (modalImagen && imagenAmpliada) {
  document.querySelectorAll(".logos-proyectos img").forEach((imagen) => {
    imagen.addEventListener("click", () => {
      elementoAnterior = document.activeElement;
      imagenAmpliada.src = imagen.src;
      imagenAmpliada.alt = imagen.alt;
      modalImagen.style.display = "flex";
    });
  });

  botonCerrarImagen?.addEventListener("click", () => {
    cerrarModal("modal-img");
  });
}

// Cerrar cualquier modal al pulsar fuera de su contenido.
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) cerrarModal(modal.id);
  });
});

// Cerrar con Escape el modal que esté abierto.
document.addEventListener("keydown", (evento) => {
  if (evento.key !== "Escape") return;

  const modalAbierto = [...document.querySelectorAll(".modal")]
    .find((modal) => getComputedStyle(modal).display !== "none");

  if (modalAbierto) cerrarModal(modalAbierto.id);
});
