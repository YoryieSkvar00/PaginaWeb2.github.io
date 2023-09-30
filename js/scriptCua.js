const div = document.getElementById('myDiv');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const divX = div.getBoundingClientRect().left + div.clientWidth / 2;
    const divY = div.getBoundingClientRect().top + div.clientHeight / 2;

    const diffX = mouseX - divX;
    const diffY = mouseY - divY;

    const angleX = -(diffY / 70); // Inclinación en el eje X (ajustado para menos inclinación)
    const angleY = -(diffX / 70); // Inclinación en el eje Y (ajustado para menos inclinación)

    div.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});