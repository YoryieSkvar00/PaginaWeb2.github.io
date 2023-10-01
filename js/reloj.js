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
  // const elementoFijo = document.getElementById('reloj');
  // const footer = document.querySelector('footer');
  
  // function mostrarElementoFijo() {
  //   const scrollY = window.scrollY;
  //   const footerTop = footer.getBoundingClientRect().top;
  
  //   if (scrollY >= footerTop) {
  //     elementoFijo.style.display = 'none'; // Se desaparece cuando llega al footer
  //   } else {
  //     elementoFijo.style.display = 'in-line'; // Se muestra en cualquier otra posición
  //   }
  // }
  
  // window.addEventListener('scroll', mostrarElementoFijo);
    