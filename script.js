const bubbleCount = 40;

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