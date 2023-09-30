particlesJS("particles-js", {
    particles: {
        number: {
            value: 50, // Número de partículas
        },
        color: {
            value: "#3d3b3b", // Color de las partículas (cambia a tu elección)
        },
        opacity: {
            value: 0.1 // Transparencia de las partículas (0 = totalmente transparente, 1 = totalmente opaco)
        },
        size: {
            value: 100, // Tamaño de las partículas
        },
        line_linked: {
            enable: false, // Deshabilita las líneas que conectan las partículas
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false, // Deshabilita la interacción al pasar el mouse
            },
        },
    },
});
