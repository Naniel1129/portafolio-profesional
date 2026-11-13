
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

    // Abrir y cerrar el menú
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );
    });

    // Cerrar el menú al seleccionar una opción
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Cerrar el menú con Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Cerrar el menú al hacer clic fuera de la navegación
    document.addEventListener("click", (event) => {
        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });

    // Cerrar el menú cuando se cambia a escritorio
    window.addEventListener("resize", () => {
        if (window.innerWidth > 680) {
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
