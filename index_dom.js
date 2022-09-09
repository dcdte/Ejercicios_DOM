import scrollTopButton from "./dom/button_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilter from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import speechReader from "./dom/narrador.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_spy.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Jan 29, 2023 05:00:00",
    "Feliz Cumpleaños amigo y docente digital"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/o8XLw2L9GgMG9K5w9" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1064798562643!2d-75.57652580000003!3d6.249697899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442940765030d7%3A0x3b0400aa7c95e095!2sBARRIO%20TRISTE%202!5e0!3m2!1ses!2sco!4v1657201419969!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester")
  userDeviceInfo("user-device")
  webCam("webcam")
  getGeolocation("geolocation")
  searchFilter(".card-filter", ".card")
  draw("#winner-btn", ".player")
  slider()
  scrollSpy()
  smartVideo()
  contactFormValidations()
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus()
speechReader()