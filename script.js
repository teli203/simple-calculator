const bubbleCount = 100;
let bubblesPopped = 0;
let timerStarted = false;
let timeLeft = 60; // minute in seconds
let timerInterval;

const timerDisplay = document.createElement('div');
timerDisplay.id = 'timer';
timerDisplay.style.marginTop = '40px';
timerDisplay.style.fontSize = '18px';
timerDisplay.style.textAlign = 'center';
timerDisplay.textContent = "1:00";

const restartButton = document.createElement('button');
restartButton.id = 'restartTimer';
restartButton.innerHTML = '🔄'; // Replace code text: restartButton.textContent = 'Restart' 
restartButton.style.fontSize = '20px';
restartButton.style.marginTop = '10px';
restartButton.style.padding = '6px 10px';
restartButton.style.border = 'none';
restartButton.style.borderRadius = '8px';
restartButton.style.cursor = 'pointer';
restartButton.style.backgroundColor = '#bd71c1b0';
restartButton.style.color = 'rgb(91, 46, 96)';
restartButton.style.boxShadow = '3px 5px 6px rgb(58, 25, 149)';
restartButton.style.display = 'block';
restartButton.style.marginInline = 'auto';

const toggleDiv = document.querySelector('.toggle');
toggleDiv.appendChild(timerDisplay);
toggleDiv.appendChild(restartButton);

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${formatTime(timeLeft)}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = `🎉 Time's up! Bubbles popped: ${bubblesPopped}`;
    }
  }, 1000);
}

restartButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timeLeft = 60;
  bubblesPopped = 0;
  timerStarted = false;
  timerDisplay.textContent = `${formatTime(timeLeft)}`;
});

// Create Bubbles //

for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const number = Math.floor(Math.random() * 10);
  bubble.textContent = number;

  const size = Math.random() * 30 + 30;
  const left = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = Math.random() * 20 + 10;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;
  bubble.style.fontSize = `${size / 2.5}px`;

  // Click to POP and Trigger the Timer //

  bubble.addEventListener("click", () => {
    bubble.remove();
    bubblesPopped++;

    if (!timerStarted) {
      startTimer();
      timerStarted = true;
    }
  });

  document.body.appendChild(bubble);
}

// Dark Mode //

const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});