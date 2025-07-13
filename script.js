document.addEventListener("DOMContentLoaded", () => {
  /**
   * Función reutilizable para configurar un carrusel en un modal.
   */
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

    // Esta comprobación detecta el error, ¡buen trabajo al incluirla!
    if (!modal || !showBtn || !closeBtn || !prevBtn || !nextBtn) {
      console.error(
        `BRUTAL_ERROR: Faltan elementos para el modal ${modalId}. El botón de apertura con ID "${showBtnId}" podría ser el culpable.`
      );
      return;
    }

    const images = modal.querySelectorAll(".image-container img");
    if (images.length === 0) return; // No hacer nada si no hay imágenes

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img) => img.classList.remove("active"));
      currentIndex = (index + images.length) % images.length;
      images[currentIndex].classList.add("active");
    }

    showBtn.addEventListener("click", () => {
      currentIndex = 0;
      showImage(currentIndex);
      modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          prevBtn.click();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextBtn.click();
          break;
        case "Escape":
          closeBtn.click();
          break;
      }
    });

    const imageContainer = modal.querySelector(".image-container");
    if (imageContainer) {
      let touchStartX = 0;
      let touchEndX = 0;
      const minSwipeDistance = 50;

      imageContainer.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].clientX;
        },
        { passive: true }
      );

      imageContainer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > minSwipeDistance) {
          prevBtn.click();
        } else if (swipeDistance < -minSwipeDistance) {
          nextBtn.click();
        }
      });
    }
  }

  // --- INICIALIZAR MODALES ---
  setupArtifactCarousel(
    "modal-artifacts",
    "view-artifacts-btn",
    "close-artifacts-btn",
    "prev-artifacts-btn",
    "next-artifacts-btn"
  );

  setupArtifactCarousel(
    "modal-comic",
    "view-comic-btn",
    "close-comic-btn",
    "prev-comic-btn",
    "next-comic-btn"
  );

  // --- CORRECCIÓN AQUÍ ---
  // El ID del botón de apertura debe coincidir con el del HTML: "view-chaotic-party-btn"
  setupArtifactCarousel(
    "modal-chaotic",
    "view-chaotic-party-btn", // <-- CORREGIDO
    "close-chaotic-btn",
    "prev-chaotic-btn",
    "next-chaotic-btn"
  );

  // --- LÓGICA DEL EFECTO MATRIX ESPECTACULAR ---
  const discoverMoreBtn = document.getElementById("discover-more-btn");
  const effectOverlay = document.getElementById("effect-overlay");
  const canvas = document.getElementById("matrix-canvas");

  if (discoverMoreBtn && effectOverlay && canvas) {
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    let drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    window.addEventListener("resize", () => {
      resizeCanvas();
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    });

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF00";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const toggleMatrixEffect = (start) => {
      if (start) {
        effectOverlay.classList.add("active");
        animationFrameId = setInterval(drawMatrix, 33);
      } else {
        effectOverlay.classList.remove("active");
        clearInterval(animationFrameId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    discoverMoreBtn.addEventListener("click", () => {
      if (effectOverlay.classList.contains("active")) return;
      toggleMatrixEffect(true);
      setTimeout(() => toggleMatrixEffect(false), 5000);
    });
  }

  console.log(
    "SYSTEM V4 KERNEL LOADED. MATRIX MODULE INITIALIZED. AWAITING COMMANDS."
  );
});
