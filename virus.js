setInterval(createVirus, 50);
function createVirus() {
  const virus = document.createElement("i");
  virus.classList.add("fas");
  virus.classList.add("fa-virus");
  virus.style.left = Math.random() * window.innerWidth + "px";
  virus.style.animationDuration = Math.random() * 3 + 2 + "s";
  virus.style.opacity = Math.random();
  virus.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.appendChild(virus);
  setTimeout(() => {
    virus.remove();
  }, 2000);
}
