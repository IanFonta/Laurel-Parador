function toggleIcons() {
  const container = document.getElementById("iconContainer");
  const arrow = document.getElementById("arrow");

  container.classList.toggle("show");
  arrow.classList.toggle("rotate");
}

function showTienda(name) {
  const cardTiendas = document.querySelector('.card-tiendas');
  const card = document.querySelector('.card');
  let content = "";

  switch (name) {
    case "home":
      content = `
        <h2>Laurel Home</h2>
        <p class="subtitle">Ambientaciones</p>
        <p><strong>Dirección:</strong>Solís y, B7130 Chascomús, Provincia de Buenos Aires.</p>
        <p><strong>Horario:</strong> Lunes a viernes 9 a 13 ~ 16 a 20 hs.</p>
        <div class="social">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          <span><a href="https://www.instagram.com/laurelhome_/?hl=es" style="text-decoration: none; color: white;">Instagram</a></span>
        </div>
      `;
      break;
    case "parador":
      content = `
        <h2>Laurel Parador</h2>
        <p class="subtitle">Restaurante</p>
        <p><strong>Dirección:</strong>Av. Costanera España 11, B7130 Chascomús, Provincia de Buenos Aires.</p>
        <p><strong>Horario:</strong> Miercoles a lunes 8 a 24 hs.</p>
        <div class="social">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          <span><a href="https://www.instagram.com/laurelparador/?hl=es" style="text-decoration: none; color: white;">Instagram</a></span>
        </div>
      `;
      break;
    case "hotel":
      content = `      
        <h2>Casa Laurel</h2>
        <p class="subtitle">Ambientaciones</p>
        <p><strong>Dirección:</strong>Lavalle 227, B7130 Chascomús, Provincia de Buenos Aires.</p>
        <p><strong>Horario:</strong> Todos los dias, 24 hs.</p>
        <div class="social">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          <span><a href="https://www.instagram.com/casalaurelhotel/?hl=es" style="text-decoration: none; color: white;">Instagram</a></span>
        </div>
        `;
      break;
    case "latienda":
      content = `
        <h2>Laurel La Tienda</h2>
        <p class="subtitle">Ambientaciones</p>
        <p><strong>Dirección:</strong>Lavalle 227, B7130 Chascomús, Provincia de Buenos Aires.</p>
        <p><strong>Horario:</strong> Lunes, Miércoles , Jueves y Viernes 9 a 12 ~ 16 a 21 hs.</p>
        <div class="social">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          <span><a href="https://www.instagram.com/casalaurel_tienda/" style="text-decoration: none; color: white;">Instagram</a></span>
        </div>
      `;
      break;
  }

  cardTiendas.innerHTML = content;
  cardTiendas.classList.add("visible");
  card.classList.add("expand");

  const container = document.getElementById("iconContainer");
  if (!container.classList.contains("show")) {
    container.classList.add("show");
  }
}
