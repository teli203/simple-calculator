 const bubbleCount = 100;
 let bubblesPopped = 0;
 let timerStarted = false;
 let timeLeft = 60;
 let timerInterval;

const timerDisplay = document.createElement('div');
 timerDisplay.id = 'timer';
 timerDisplay.style.marginTop = '40px';
 timerDisplay.style.fontSize = '18px';
 timerDisplay.style.textAlign = 'center';
 timerDisplay.textContent = '1:00';

 const restartButton = document.createElement('button');
 restartButton.id = 'restartTimer';
 restartButton.textContent = 'Restart';

 const toggleDiv = document.querySelector('.toggle');
 toggleDiv.appendChild(timerDisplay);
 toggleDiv.appendChild(restartButton);

 function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
 }




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

  // Click to POP!!!! //
  
  bubble.addEventListener("click", () => {
    bubble.remove();
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

