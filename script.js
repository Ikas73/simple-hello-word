document.addEventListener("DOMContentLoaded", () => {
  // Función para manejar el carrusel de artefactos (imágenes)
  function setupArtifactCarousel(
    modalId,
    showBtnId,
    closeBtnId,
    prevBtnId,
    nextBtnId
  ) {
    const modal = document.getElementById(modalId);
    const showBtn = document.getElementById(showBtnId);
    const closeBtn = document.getElementById(closeBtnId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!modal || !showBtn || !closeBtn || !prevBtn || !nextBtn) {
      console.error(
        "BRUTAL_ERROR: Uno o más elementos del modal no fueron encontrados."
      );
      return;
    }

    const images = modal.querySelectorAll(".image-container img");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img) => img.classList.remove("active"));
      // Asegurarse de que el índice sea cíclico y válido
      currentIndex = (index + images.length) % images.length;
      images[currentIndex].classList.add("active");
    }

    showBtn.addEventListener("click", () => {
      currentIndex = 0;
      showImage(currentIndex);
      modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    prevBtn.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });

    // Cerrar al hacer clic en el fondo oscuro
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    // Navegación por teclado
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          showImage(currentIndex - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          showImage(currentIndex + 1);
          break;
        case "Escape":
          modal.classList.remove("active");
          break;
      }
    });
  }

  // Inicializar el carrusel de artefactos
  setupArtifactCarousel(
    "modal-artifacts",
    "view-artifacts-btn",
    "close-modal-btn",
    "prev-btn",
    "next-btn"
  );

  console.log("SYSTEM KERNEL LOADED. AWAITING COMMANDS.");
});
