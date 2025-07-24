const modal = document.getElementById("modal-img");
const modalImg = document.getElementById("modal-img-content");
const modalClose = document.getElementById("modal-close");

document.querySelectorAll(".logos-proyectos img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
});
});

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
});

// Código JS para los modales de Detalles de los proyectos

function abrirModal(idModal) {
  document.getElementById(idModal).style.display = "block";
}

function cerrarModal(idModal) {
  document.getElementById(idModal).style.display = "none";
}

// Cierra el modal al hacer clic fuera de él
window.onclick = function(event) {
  const modales = document.querySelectorAll(".modal");
  modales.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};