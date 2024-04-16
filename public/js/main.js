let section = document.querySelectorAll("section");
let form = document.getElementById("form");
let jugar = document.getElementById("jugar");
let animacion = document.getElementById("animacion");
let bienvenida = document.getElementById("bienvenida");
let carousel = document.getElementById("carousel");
let cartasNaruto = document.querySelector(".carousel-inner");
let tituBoton = document.querySelector(".titu-boton");
let header = document.querySelector("header");
let btncerrar = document.getElementById("btncerrar");
let modal = document.querySelector("#modal");
let volverJugar = document.querySelector("#volverJugar");
let verResultados = document.querySelector("#verResultados");
let resultados = document.querySelector("#resultados");
let cartasJugador1 = document.querySelector(".cartas-jugador1");
let cartasJugador2 = document.querySelector(".cartas-jugador2");
let match = document.querySelector(".match");
let btnvolver = document.querySelector("#btnvolver");
let btnguardar = document.querySelector("#btnguardar");
let partidasAnteriores = document.querySelector("#partidasAnteriores");
let contenidoAnteriores = document.querySelector(".contenidoAnteriores");
let boton2 = document.querySelector("#boton2");
let cerrando = document.querySelector("#cerrando");
let btnBack = document.querySelector("#btnBack");
let volverHome = document.querySelector("#volverHome");
let btnAtras = document.querySelector("#atras");

let jugador1;
let jugador2;
let suma = 0;
let todasLasPartidas = [];
let active = "";
let newCartas = [];

//BOTON GUARDAR CUANDO MUESTRO CARTAS
let guardar = () => {
  console.log("Te guardo las partidas pa");
};

//BOTON VOLVER A JUGAR CUANDO MUESTRO CARTAS
let home = () => {
  newSection(bienvenida);
  header.style.display = "flex";
  form.reset();
};

//BOTON X DEL CAROUSEL
let cerrar = () => {
  header.style.display = "flex";
  newSection(modal);
};
//BOTON VOLVER A JUGAR
volverJugar.addEventListener("click", (e) => {
  paginaSlide = [""];
  newSection(bienvenida);
  reiniciarPartida();
  form.reset();
});

//vacía los innerHTML anteriores
const reiniciarPartida = () => {
  paginaSlide.innerHTML = "";
  cartasJugador1.innerHTML = "";
  cartasJugador2.innerHTML = "";
  match.innerHTML = "";
  suma = 0;
  newCartas = [];
};

//array que guarda las jugadas anteriores (pushea seisCartas)
partidasViejas = [];
// array que guarda los jugadores (pushea los input.value)
jugadoresAnteriores = [];
posicionArray = 0;
btnguardar.addEventListener("click", () => {
  bienvenida.style.display = "flex";
  carousel.style.display = "none";
  resultados.style.display = "none";
  header.style.display = "flex";
  partidasAnteriores.style.display = "block";

  jugadoresAnteriores.push({ jugador1, jugador2 });
  partidasViejas.push(newCartas);
  reiniciarPartida();
  form.reset();
  //vacía el array de newCartas
  newCartas = [""];

  /*   Se crea el <li> con los nombres de los jugadores y
  se le da el valor de la variable al botón, para luego compararlo
  con la posición de array en partidasViejas y jugadoresAnteriores */
  let verDetalles = `
  <li class="partidaGuardada">
  <p>${jugador1}</p>
    <span><p>&</p></span>
  <p>${jugador2}</p>
  <button posicionArray="${posicionArray++}">Ver</button>
  </li>`;
  contenidoAnteriores.innerHTML += verDetalles;
});

contenidoAnteriores.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.getAttribute("posicionArray")) {
    showResultados(
      partidasViejas[e.target.getAttribute("posicionArray")],
      jugadoresAnteriores[e.target.getAttribute("posicionArray")]
    );
  }
});

volverHome.addEventListener("click", () => {
  header.style.display = "flex";
  newSection(bienvenida);
});

btnAtras.addEventListener("click", () => {
  bienvenida.style.display = "flex";
  carousel.style.display = "none";
  resultados.style.display = "none";
  header.style.display = "flex";
  partidasAnteriores.style.display = "block";
});

let back = () => {
  newSection(cerrando);
};

const showResultados = (e, pjs) => {
  reiniciarPartida();
  carousel.style.display = "block";
  bienvenida.style.display = "none";
  resultados.style.display = "none";
  header.style.display = "none";

  cartaNum = 0;
  paginaSlide = [];
  e.forEach((carta, index) => {
    if (index === 0) active = "active";
    else active = "";
    if (index < 3) {
      cartaNum++;

      //ACÁ COMIENZA EL CAROUSEL
      paginaSlide += `
      <div class="carousel-item ${active} card-${index}">
      <div class="titu-boton">
      <h4>Carta ${cartaNum}/3 de: ${pjs.jugador1}</h4>
      <button type="button" id="btnBack" onclick="back('${btnBack}')">X</button>
      </div>
      <img src="${carta.img}" class="d-block w-100" alt="${carta.name}"/>
      <div class="name-desc">
      <h4>${carta.name}</h4>
      <p>${carta.desc}</p>
      </div>
      </div>
      `;
    }
    if (cartaNum === 3) {
      cartaNum = 0;
    }
    if (index > 2 && index < 6) {
      cartaNum++;
      paginaSlide += `
      <div class="carousel-item ${active} card-${index}">
      <div class="titu-boton">
      <h4>Carta ${cartaNum}/3 de: ${pjs.jugador2}</h4>
      <button type="button" id="btnBack" onclick="back('${btnBack}')">X</button>
      </div>
      <img src="${carta.img}" class="d-block w-100" alt="${carta.name}"/>
      <div class="name-desc">
      <h4>${carta.name}</h4>
      <p>${carta.desc}</p>
      </div>
      </div>
      `;
      cartasNaruto.innerHTML = paginaSlide;
    }
  });
};
//BOTON VER RESULTADOS
verResultados.addEventListener("click", () => {
  newSection(resultados);
  header.style.display = "none";
  cartasJugador1.innerHTML = `
  <h3 class="cartas-jugador1">Cartas de ${jugador1}</h3>
  <div class="resultados-img">
      <img src="${newCartas[0].img}" alt="carta de jugador1">
      <img src="${newCartas[1].img}" alt="carta de jugador1">
      <img src="${newCartas[2].img}" alt="carta de jugador1">
  </div>
  `;
  cartasJugador2.innerHTML = `
  <h3 class="cartas-jugador2">Cartas de ${jugador2}</h3>
  <div class="resultados-img">
      <img src="${newCartas[3].img}" alt="carta de jugador2">
      <img src="${newCartas[4].img}" alt="carta de jugador2">
      <img src="${newCartas[5].img}" alt="carta de jugador2">
  </div>
  `;
  newSection(resultados);
});

//BOTON JUGAR COMIENZA EL JUEGO!!!
const startGame = () => {
  while (newCartas.length < 6) {
    console.log(newCartas);
    random = Math.floor(Math.random() * cartas.length);
    if (newCartas.indexOf(cartas[random]) === -1) {
      newCartas.push(cartas[random]);
    }
  }

  cartaNum = 0;
  paginaSlide = [];
  newCartas.forEach((carta, index) => {
    if (index === 0) active = "active";
    else active = "";

    if (index < 3) {
      cartaNum++;

      //COMIENZA EL CAROUSEL
      //ACA MUESTRO MI CAROUSEL JUGADOR 1
      paginaSlide += `
      <div class="carousel-item ${active} id="card${index + 1}" data-number="${
        index + 1
      }">
      <div class="titu-boton">
      <h4>Carta ${cartaNum}/3 de: ${jugador1}</h4>
      <button type="button" id="btncerrar" onclick="cerrar('${btncerrar}')">X</button>
      </div>
      <img src="${carta.img}" class="w-100" alt="${carta.name}"/>
      <div class="name-desc">
      <h4>${carta.name}</h4>
      <p>${carta.desc}</p>
      </div>
      </div>
      `;
      suma = suma + carta.score;
      console.log(suma);
    }
    if (cartaNum === 3) {
      cartaNum = 0;
    }

    if (index > 2 && index < 6) {
      cartaNum++;
      //ACA MUESTRO MI CAROUSEL JUGADOR 2
      paginaSlide += `
      <div class="carousel-item ${active}" id="card${index + 1}" data-number="${
        index + 1
      }">
      <div class="titu-boton">
      <h4>Carta ${cartaNum}/3 de: ${jugador2}</h4>
      <button type="button" id="btncerrar" onclick="cerrar('${btncerrar}')">X</button>
      </div>
      <img src="${carta.img}" class="d-block w-100" alt="${carta.name}"/>
      <div class="name-desc">
      <h4>${carta.name}</h4>
      <p>${carta.desc}</p>
      </div>
      </div>
      `;
      suma = suma + carta.score;
      console.log(suma);
      cartasNaruto.innerHTML = paginaSlide;
    }

    //SI LA SUMA DEL SCORE ES DIVISIBLE POR 2
    //ES UN NUMERO PAR Y RETORNA TRUE
    let data1 = newCartas[0].score + newCartas[1].score + newCartas[2].score;
    let data2 = newCartas[3].score + newCartas[4].score + newCartas[5].score;
    if ((data1 - data2) % 2) {
      match.innerHTML = `
      <div class="match">
      <h3>💖 HAY MATCH 💖</h3>
      <p>Naruto se aferra a sus amigos y maestros como personas de su misma sangre y los quiere a  ${jugador1} y ${jugador2}, como si fueran sus hermanos.</p>
      </div>
      
      `;
    } else {
      match.innerHTML = `
      <div class="nomatch">
      <h3>😢 NO HAY MATCH 😪</h3>
      <p>"El trabajo duro es inútil para aquellos que no creen en sí mismos..."</p>
      </div>
      `;
    }

    console.log(match);
  });

  newSection(carousel);
};

const newSection = (pantalla) => {
  section.forEach((section, index) => {
    section.style.display = "none";
  });
  pantalla.style.display = "flex";

  if (pantalla === animacion) {
    console.log("entrando al carousel padre");
    setTimeout(() => {
      newSection(carousel);
      startGame();
    }, 3000);
  }
};

jugar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Mandando ando");
  jugador1 = document.getElementById("jugador1").value;
  jugador2 = document.getElementById("jugador2").value;
  // console.log(jugador1, jugador2);
  if (jugador1 != "" && jugador2 != "") {
    newSection(animacion);
    header.style.display = "none";
  } else {
    alert("Faltan completar datos!");
  }
});

form.addEventListener("submit", (e) => {
  console.log(e);
});
