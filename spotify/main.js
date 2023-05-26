const topBar = document.querySelector('.topbar');

// Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});

// Nueva variable para almacenar altura del Topbar
let topbarHeight = topBar.offsetHeight;
// Añadimos un paddingTop basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;

/* ********************************** */
/*             BOTON PLAY             */
/* ********************************** */
const containerConcentracion = document.querySelectorAll('.card-rock');
const audioFiles = [
  'mp3/A_D_I_D_A_S_ - Korn.flac',
  'mp3/Drive - Incubus [FLAC Lossless].flac',
  'mp3/Elevation - U2 [FLAC Lossless].flac',
  'mp3/Feint - Epica [FLAC Lossless].flac'
  // Agrega aquí más nombres de archivos MP3
];

let currentAudio = null; // Variable para almacenar el elemento de audio actual
let isPlaying = false; // Variable de estado para controlar la reproducción/pausa

// Función para reproducir o detener la canción
const togglePlay = (audioElement) => {
  if (isPlaying) {
    audioElement.pause(); // Pausar la canción
    audioElement.currentTime = 0; // Reiniciar la canción al principio
    isPlaying = false;
  } else {
    // Si hay una canción en reproducción, la detenemos antes de reproducir la nueva canción
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    audioElement.play(); // Reproducir la canción
    isPlaying = true;
  }
};

// Función para reproducir una canción aleatoria
const playRandomSong = () => {
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const audioElement = new Audio(audioFiles[randomIndex]);

  togglePlay(audioElement); // Reproducir o detener la nueva canción
  currentAudio = audioElement; // Almacenar el elemento de audio actual
};

// Función que se va a repetir
const createButton = (card) => {
  // Crear el botón
  const button = document.createElement('button');
  button.innerHTML = '<i class="fa-solid fa-play"></i>';

  // Agregar el botón al elemento hijo
  card.appendChild(button);

  // Ocultar el botón inicialmente
  button.style.display = 'none';
  button.classList.add('btn-play');

  // Agregar evento de click al botón para reproducir o detener canciones aleatorias
  button.addEventListener('click', () => {
    // Si hay una canción en reproducción y es la misma que se está pausando, la detenemos por completo
    if (currentAudio && currentAudio.paused && currentAudio.src === audioFiles[randomIndex]) {
      togglePlay(currentAudio);
      currentAudio = null;
    } else {
      playRandomSong();
    }
  });

  // Agregar eventos de hover al elemento card
  card.addEventListener('mouseover', () => {
    button.style.display = 'block';
  });

  card.addEventListener('mouseout', () => {
    button.style.display = 'none';
  });
};

containerConcentracion.forEach((card) => {
  createButton(card);
});