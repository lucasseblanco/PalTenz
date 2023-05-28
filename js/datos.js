let encabezado=`
<h1>Cocinando JUNTOS</h1>
        <nav>
        <div id="menu-icon"></div>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="about.html">Sobre nosotros</a></li>
                <li><a href="recetas.html">Recetas</a></li>
                <li><a href="gallery.html">Galería</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                               
            </ul>
        </nav>

`
let piePagina=`
        <div class="social">
            <ul class="social-icons">
                  <li>Siguenos en:</li>
                    <li><a href="https://www.instagram.com"><i class="fab fa-instagram" style="color: #ffffff;"></i></a></li>
                  <li><a href="https://www.facebook.com"><i class="fab fa-facebook" style="color: #ffffff;"></i></a></li>
                  <li><a href="mailto:contacto@recetasjuntos.com.ar"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></a></li>
              </ul>
          </div>
        <p>Derechos reservados &copy; 2023 Recetas de Cocina</p>`

        
        


document.querySelector("header").innerHTML=encabezado
document.querySelector("footer").innerHTML=piePagina



document.getElementById('contact-form').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (email === '') {
    alert('Por favor, ingresa tu correo.');
    event.preventDefault(); // Evitar el envío del formulario si hay errores
  }
  
  if (message === '') {
    alert('Por favor, ingresa un mensaje.');
    event.preventDefault(); // Evitar el envío del formulario si hay errores
  }
});


// JavaScript para el menú hamburguesa

document.getElementById('menu-icon').addEventListener('click', function() {
  var menuItems = document.getElementById('menu-items');
  menuItems.classList.toggle('visible');
});







