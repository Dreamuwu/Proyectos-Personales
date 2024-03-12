const greenButton = document.getElementById('greenButton');
const redButton = document.getElementById('redButton');

const growthPercentage = 0.1;
const disableThreshold = 0.9;
const maxClicks = 11;

let clickCount = 0;

redButton.addEventListener('click', () => {
  const currentWidth = greenButton.offsetWidth;
  const currentHeight = greenButton.offsetHeight;
  const targetWidth = window.innerWidth * (1 - growthPercentage);
  const targetHeight = window.innerHeight * (1 - growthPercentage);
  const newWidth = currentWidth + (targetWidth - currentWidth) * growthPercentage;
  const newHeight = currentHeight + (targetHeight - currentHeight) * growthPercentage;
  greenButton.style.width = `${newWidth}px`;
  greenButton.style.height = `${newHeight}px`;
  greenButton.style.fontSize = `${parseInt(window.getComputedStyle(greenButton).fontSize) * (1 + growthPercentage)}px`; // Ajuste del tamaño de fuente

  if (newWidth >= window.innerWidth * disableThreshold && newHeight >= window.innerHeight * disableThreshold) {
    redButton.style.display = 'none';
  }

  clickCount++;
  switch (clickCount) {
    case 1:
      redButton.textContent = 'MSJ 1';
      break;
    case 2:
      redButton.textContent = 'MSJ 2';
      break;
    case 3:
      redButton.textContent = 'MSJ 3';
      break;
    case 4:
      redButton.textContent = 'MSJ 4';
      break;
    case 5:
      redButton.textContent = 'MSJ 5';
      break;
    case 6:
      redButton.textContent = 'MSJ 6';
      break;
    case 7:
      redButton.textContent = 'MSJ 7';
      break;
    case 8:
      redButton.textContent = 'MSJ 8';
      break;
    case 9:
      redButton.textContent = 'MSJ 9';
      break;
    case 10:
      redButton.textContent = 'MSJ 10';
      break;
    default:
      break;
  }

  if (clickCount >= maxClicks) {
    redButton.style.display = 'none';
  }
});

greenButton.addEventListener('click', () => {
  greenButton.textContent = 'MSJ FINAL BOTÓN VERDE';
  redButton.style.display = 'none';
});

/* Recomendable no agregar más MSJ ni cambiar nada de este script */