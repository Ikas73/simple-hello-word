+✨ ¡Hola Mundo Espectacular! | Por Amós✨

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5) +[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS) +[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript) +[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)

> [!NOTE]
> 🔗 **Demo en Vivo:**[¡Pruébalo aquí!](https://ikas73.github.io/simple-hello-word/)

## 📜 Tabla de Contenidos

- [📜 Tabla de Contenidos](#-tabla-de-contenidos)
- [📝 Descripción](#-descripción)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [🎨 Personalización](#-personalización)
- [🧑‍💻 Autor(es) y Créditos](#-autores-y-créditos)
- [🔮 Posibles Mejoras Futuras](#-posibles-mejoras-futuras)
- [🤝 Contribuciones](#-contribuciones)

## 📝 Descripción

- "¡Hola Mundo Espectacular!" es una página web de una sola vista (single-page) visualmente cautivadora. Diseñada para demostrar técnicas modernas de desarrollo web, presenta un fondo dinámico de partículas 3D, una estética neón y un diseño responsivo, ofreciendo una experiencia de usuario atractiva. Este proyecto sirve como una demostración creativa y estilizada de un "Hola Mundo".
- El diseño es moderno, con animaciones 3D, efecto neón y un estilo único, tal como se describe en la meta descripción de la página.

  ## ✨ Características Principales

- 🌌 **Fondo Dinámico de Partículas 3D:** Partículas interactivas creadas con Three.js que responden sutilmente a los movimientos del ratón.
- 💡 **Efectos de Brillo Neón:** Aplicados al texto y elementos de la interfaz para un aspecto futurista y vibrante.
- 📱 **Diseño Responsivo (Mobile-First):** Asegura una visualización óptima en todos los dispositivos (smartphones, tablets, escritorios).
- 💫 **Animaciones Fluidas:** Animaciones CSS para el pulso del texto (`<h1>`) y efectos hover en elementos interactivos.
- 📌 **Encabezado y Pie de Página Fijos:** Para una navegación e información persistentes y accesibles.
- 🍔 **Menú Hamburguesa:** Para la navegación móvil, facilitando el acceso en pantallas pequeñas, con cambio de icono (bars/times).
- ✒️ **Tipografía Personalizada:** Utiliza "Orbitron" y "Roboto Mono" de Google Fonts para un estilo distintivo y moderno.
- 👍 **Iconos de Font Awesome:** Iconos limpios y escalables para enlaces a redes sociales y elementos de la interfaz.
- 💻 **HTML y CSS Modernos:** Código limpio y bien estructurado, con CSS directamente en el HTML para simplicidad en este proyecto de demostración.
- ♿ **Accesibilidad:** Atributos `aria-` utilizados para el botón del menú de navegación (`aria-label`, `aria-expanded`) mejorando la experiencia para usuarios de tecnologías asistivas.

## 🛠️ Tecnologías Utilizadas

**Frontend:**

- HTML5
- CSS3 (estilos en línea dentro del archivo HTML)
- JavaScript (ES6 Modules, scripts en línea)
- **Gráficos 3D:** Three.js (cargado mediante CDN)
- **Iconos:** Font Awesome (cargado mediante CDN)
- **Fuentes:** Google Fonts (Orbitron, Roboto Mono)
- Para ver este proyecto localmente:
-
- 1. Clona el repositorio:
     ´´´bash
     git clone https://github.com/Ikas73/simple-hello-word.git
     ´´´

- (Reemplaza `TU_USUARIO/TU_REPOSITORIO` con tu nombre de usuario y el nombre del repositorio)

  1. Navega al directorio del proyecto:

- cd TU_REPOSITORIO

  +3. Abre el archivo `index.html` en tu navegador web preferido.

- > [!TIP]
  > No se requiere ningún proceso de compilación especial ni servidor local para la funcionalidad básica. ¡Solo abre `index.html` y disfruta del espectáculo!
  ## 🏗️ Estructura del Proyecto
- El proyecto consiste principalmente en un único archivo `index.html` que incluye:
  **Estructura HTML:** Define el contenido y la disposición de la página.
  **Estilos CSS:** Integrados en la etiqueta `<style>` dentro del `<head>`, manejando la apariencia y responsividad.
  **Scripts JavaScript:**
- Un script de tipo módulo para cargar Three.js (y opcionalmente hacerlo global).
- Un script de tipo módulo para la lógica de la animación de partículas 3D con Three.js.
- Un script regular para la funcionalidad del menú hamburguesa.

  ## 🎨 Personalización

  <details>

- **Contenido de Texto:** Modifica directamente dentro de las etiquetas HTML (ej. `<h1>`, `<p class="subtitle">`, enlaces de navegación, texto del footer).
- **Colores y Estilos:** Ajusta las reglas CSS dentro de las etiquetas `<style>`. Los colores clave como el cian neón (`#00ffcc`) se pueden cambiar fácilmente buscando sus ocurrencias.
- **Animación de Partículas (en el script de Three.js):**
- `particleCount`: Número de partículas.
- Colores de partículas: Modifica la lógica de asignación de color en el bucle de creación de partículas.
- Comportamiento de la animación: Ajusta los parámetros en la función `animate()` (ej. velocidad de rotación, intensidad de interacción con el ratón).
- **Enlaces Sociales:** Actualiza los atributos `href` en los enlaces `<a>` dentro de la sección `<footer>`. +</details>

## 🧑‍💻 Autor(es) y Créditos

- **Desarrollador Principal:** Amós (AmósLab)
- GitHub: EstudiaGit (según el enlace en el pie de página del `index.html`)
  **Inspiración del Título del Proyecto/Colaboración Conceptual:** Qwen3 (mencionado en la etiqueta `<title>` de la página)
  ## 🔮 Posibles Mejoras Futuras
  <details>
- 📂 **Separar CSS y JS:** Mover los estilos CSS y los scripts JavaScript a archivos externos (`.css`, `.js`) para una mejor organización y mantenibilidad.
- ⚡ **Optimización de Rendimiento:** Aunque el proyecto es ligero, se podrían explorar optimizaciones adicionales para la animación de Three.js si se vuelve más compleja o se añaden más elementos.
- ➕ **Añadir más Secciones:** Desarrollar el contenido para las secciones "Sobre mí" y "Contacto" a las que apuntan los enlaces de navegación.
- 📧 **Formulario de Contacto Funcional:** Implementar la lógica para el enlace de email o un formulario de contacto real.
- 🎨 **Temas de Color:** Implementar un selector de temas o diferentes paletas de colores.
- 🌐 **Internacionalización (i18n):** Permitir cambiar el idioma de la interfaz. +</details>

## 🤝 Contribuciones

- Este es un proyecto personal de demostración. Sin embargo, si tienes sugerencias o encuentras errores, ¡no dudes en abrir un _issue_ o hacer un _fork_ y experimentar!
