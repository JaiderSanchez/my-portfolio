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