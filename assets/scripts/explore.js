// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const faceImage = document.querySelector('img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');

      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = i;

      voiceSelect.appendChild(option);
    }
  }

  populateVoices();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', function () {
    const text = textToSpeak.value;

    if (text === '' || voiceSelect.value === 'select') {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];

    utterance.addEventListener('start', function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open mouthed smiling face';
    });

    utterance.addEventListener('end', function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(utterance);
  });
}