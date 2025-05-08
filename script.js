// SCRIPT PRINCIPAL CON TODAS LAS FUNCIONES
document.addEventListener("DOMContentLoaded", () => {
  const activateButton = document.getElementById("activate-styles-btn");
  let stylesActivated = false;
  let threeJsInitialized = false;
  let menuInitialized = false;
  let textAnimationsInitialized = false;
  let spaceshipFeatureInitialized = false;

  // --- Funciones para inicializar características ---

  function initThreeJS() {
    if (threeJsInitialized || !window.THREE) return;
    threeJsInitialized = true;
    const THREE = window.THREE;
    const container = document.getElementById("particle-canvas");
    if (container && container.childElementCount === 0) {
      console.log("Three.js: Inicializando...");
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      function createCircleTexture(color = "white", size = 64) {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size / 2 - 2;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
        return new THREE.CanvasTexture(canvas);
      }
      const particleTexture = createCircleTexture("white", 64);
      const particleCount = 1800;
      const SPREAD_FACTOR = 45;
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const color = new THREE.Color();
      const phosphorGreenHex = 0x39ff14;
      for (let i = 0; i < particleCount; i++) {
        positions.push((Math.random() - 0.5) * SPREAD_FACTOR);
        positions.push((Math.random() - 0.5) * SPREAD_FACTOR);
        positions.push((Math.random() - 0.5) * SPREAD_FACTOR);
        color.setHex(phosphorGreenHex);
        colors.push(color.r, color.g, color.b);
      }
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );
      const material = new THREE.PointsMaterial({
        map: particleTexture,
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        depthWrite: false,
        alphaTest: 0.1,
      });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      camera.position.z = SPREAD_FACTOR / 2;
      let mouseX = 0,
        mouseY = 0;
      function animateParticles() {
        requestAnimationFrame(animateParticles);
        const time = Date.now() * 0.0001;
        particles.rotation.y = time * 0.05;
        particles.rotation.x = time * 0.02;
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      }
      animateParticles();
      function onDocumentMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      }
      document.addEventListener("mousemove", onDocumentMouseMove, {
        passive: true,
      });
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
      window.addEventListener("resize", onWindowResize);
    } else if (!container) {
      console.error(
        "Elemento con ID 'particle-canvas' no encontrado para Three.js."
      );
    }
  }

  function initMenu() {
    if (menuInitialized) return;
    menuInitialized = true;
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    if (menuToggle && mainNav) {
      const navLinks = mainNav.querySelectorAll("a");
      const bodyEl = document.body;
      menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        mainNav.classList.toggle("nav-active");
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        const icon = menuToggle.querySelector("i");
        if (mainNav.classList.contains("nav-active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
          bodyEl.style.overflow = "hidden";
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
          bodyEl.style.overflow = "auto";
        }
      });
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (mainNav.classList.contains("nav-active")) {
            mainNav.classList.remove("nav-active");
            menuToggle.setAttribute("aria-expanded", "false");
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            bodyEl.style.overflow = "auto";
          }
        });
      });
    } else {
      if (!menuToggle)
        console.error("Menu toggle button not found inside initMenu.");
      if (!mainNav) console.error("Main navigation not found inside initMenu.");
    }
  }

  function handleGlitchEnter(event) {
    event.currentTarget.classList.add("glitch-active");
  }
  function handleGlitchLeave(event) {
    setTimeout(() => {
      if (event.currentTarget) {
        event.currentTarget.classList.remove("glitch-active");
      }
    }, 50);
  }

  function initTextAnimations() {
    if (textAnimationsInitialized) return;
    textAnimationsInitialized = true;
    const subtitleElement = document.querySelector(".subtitle");
    if (subtitleElement) {
      const textContent = subtitleElement.textContent.trim();
      const words = textContent.split(/\s+/);
      subtitleElement.innerHTML = "";
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + (index < words.length - 1 ? " " : "");
        wordSpan.classList.add("word-animated");
        wordSpan.style.transitionDelay = `${index * 0.08}s`;
        subtitleElement.appendChild(wordSpan);
      });
      void subtitleElement.offsetWidth;
      setTimeout(() => {
        subtitleElement.querySelectorAll(".word-animated").forEach((span) => {
          span.classList.add("visible");
        });
      }, 50);
    } else {
      console.error("Subtitle element not found inside initTextAnimations.");
    }
    const glitchableSpans = document.querySelectorAll(
      "#inicio .glitchable-span"
    );
    glitchableSpans.forEach((span) => {
      if (!span.dataset.text) {
        span.dataset.text = span.textContent;
      }
      span.removeEventListener("mouseenter", handleGlitchEnter);
      span.removeEventListener("mouseleave", handleGlitchLeave);
      span.addEventListener("mouseenter", handleGlitchEnter);
      span.addEventListener("mouseleave", handleGlitchLeave);
    });
  }

  function setupSpaceshipFeature() {
    if (spaceshipFeatureInitialized) return;
    spaceshipFeatureInitialized = true;
    const ctaButton = document.querySelector(".cta-btn");
    let spaceshipElement = null;
    let isSpaceshipFlying = false;
    let buttonReappearTimeout = null;

    function launchSpaceship() {
      if (isSpaceshipFlying) {
        return;
      }
      isSpaceshipFlying = true;
      if (ctaButton) {
        ctaButton.classList.add("button-hidden");
      }
      clearTimeout(buttonReappearTimeout);

      if (!spaceshipElement) {
        spaceshipElement = document.createElement("div");
        spaceshipElement.classList.add("spaceship-container");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-space-shuttle", "spaceship-icon");
        spaceshipElement.appendChild(icon);
        document.body.appendChild(spaceshipElement);
      }

      spaceshipElement.addEventListener(
        "animationend",
        () => {
          if (!spaceshipElement) return;
          spaceshipElement.classList.remove("animate");
          spaceshipElement.style.opacity = "0";
          spaceshipElement.style.transform = "translateX(-150px)";
          isSpaceshipFlying = false;
          if (ctaButton) {
            const reappearDelay = 2000;
            buttonReappearTimeout = setTimeout(() => {
              ctaButton.classList.remove("button-hidden");
            }, reappearDelay);
          }
        },
        { once: true }
      );

      const shipHeightEst = spaceshipElement.offsetHeight || 50;
      const randomTop =
        Math.random() * (window.innerHeight - shipHeightEst - 100) + 50;
      spaceshipElement.style.top = `${randomTop}px`;

      // *** AJUSTE CLAVE: Quitar clase 'animate' antes de resetear ***
      spaceshipElement.classList.remove("animate");

      spaceshipElement.style.transform = "translateX(-150px)";
      spaceshipElement.style.opacity = "0";
      void spaceshipElement.offsetWidth;
      spaceshipElement.classList.add("animate");
    }

    if (ctaButton) {
      ctaButton.removeEventListener("click", launchSpaceship);
      ctaButton.addEventListener("click", launchSpaceship);
    } else {
      console.error("CTA button not found when setting up spaceship.");
    }
  }

  // --- Listener del Botón de Activación ---
  if (activateButton) {
    activateButton.addEventListener(
      "click",
      () => {
        if (stylesActivated) return;
        stylesActivated = true;
        console.log("Activando estilos y características...");
        document.body.classList.add("styles-activated");
        setTimeout(() => {
          initThreeJS();
          initMenu();
          initTextAnimations();
          setupSpaceshipFeature();
        }, 50);
      },
      { once: true }
    );
  } else {
    console.error("Botón de activación #activate-styles-btn no encontrado.");
  }
});
