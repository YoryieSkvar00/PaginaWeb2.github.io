function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hora').textContent = hora;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  }
  
  actualizarReloj(); // Actualizar el reloj al cargar la página
  
  setInterval(actualizarReloj, 1000); // Actualizar el reloj cada segundo
  