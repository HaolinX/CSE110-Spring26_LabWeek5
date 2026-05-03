// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const audio = document.querySelector('audio');

  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
 
  // when the horn selection changes then change the specific image and audio
  hornSelect.addEventListener('change', function () {
    const selectedHorn = hornSelect.value;

    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = 'Air Horn';
      audio.src = 'assets/audio/air-horn.mp3';

    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = 'Car Horn';
      audio.src = 'assets/audio/car-horn.mp3';

    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = 'Party Horn';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });
 
  // when the volume slider changes then change the volume icon and audio volume
  volumeSlider.addEventListener('input', function () {
    const volume = parseInt(volumeSlider.value);
 
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';

    } else if (volume > 0 && volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';

    } else if (volume >= 33 && volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';

    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
 
    // audio volume is 0.0 to 1.0 BUT slider is 0 to 100
    audio.volume = volume / 100;
  });
 
  // when the play sound button is clicked then produce the specific sound
  playButton.addEventListener('click', function () {
    audio.currentTime = 0; // reset the audio before play
    audio.play();

    // show confetti for party horn
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}