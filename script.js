
  /* ========================================
    1. MENÚ DE NAVEGACIÓN
  ======================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  function closeMenu() {
    if (!menuToggle || !navLinks) {
      return;
    }

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  /* ========================================
    2. COPIAR CORREO ELECTRÓNICO
  ======================================== */

  const copyButton = document.querySelector("#copy-email");
  const feedback = document.querySelector("#contact-feedback");

  if (copyButton && feedback) {
    copyButton.addEventListener("click", async () => {
      const email = copyButton.dataset.email;

      if (!email) {
        feedback.textContent = "No se ha configurado el correo.";
        return;
      }

      try {
        await navigator.clipboard.writeText(email);
        feedback.textContent = "Correo copiado al portapapeles.";
      } catch {
        feedback.textContent =
          `No se pudo copiar automáticamente. Puedes copiar este correo: ${email}`;
      }
    });
  }
