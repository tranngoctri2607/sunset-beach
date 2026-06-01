const $ = selector => document.querySelector(selector);

const wavesAudio = $('#wavesAudio');
const pianoAudio = $('#pianoAudio');

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const nextScreen = $('#' + id);
  nextScreen.classList.add('active');
}

function playAudio() {
  wavesAudio.volume = 0.7;
  pianoAudio.volume = 0.28;

  wavesAudio.play().catch(() => {});
  pianoAudio.play().catch(() => {});
}

$('#startBtn').addEventListener('click', () => {
  playAudio();
  showScreen('screen2');
});

$('#nextBtn').addEventListener('click', () => {
  alert('Screen tiếp theo sẽ là: chai thủy tinh kỷ niệm 🌊');
});