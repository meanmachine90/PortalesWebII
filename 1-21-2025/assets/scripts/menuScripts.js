document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Eliminar la clase "active" de todos los enlaces
            menuLinks.forEach(link => link.classList.remove("active"));

            // Agregar la clase "active" al enlace seleccionado
            link.classList.add("active");
        });
    });
});