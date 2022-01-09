import { startRace } from './startRace';
import { createNewAuto } from './createNewAuto';
import { generateCars } from './generateCars';
import { leftPaddingTrack } from './constants';

function addListeners() {
  document.querySelector('.race-btn')?.addEventListener('click', () => startRace());
  document.querySelector('.create-btn')?.addEventListener('click', () => {
    const newName = document.querySelector('.new-name') as HTMLInputElement;
    const color = document.querySelector('.color-auto') as HTMLInputElement;
    createNewAuto(newName.value, color.value);
  });
  document.querySelector('.generate-btn')?.addEventListener('click', () => {
    generateCars();
  });
  document.querySelector('.reset-btn')?.addEventListener('click', () => {
    const garageTrack = document.querySelectorAll('.garage .track');
    if (garageTrack) {
      for (let i = 0; i < garageTrack.length; i++) {
        const automobile = garageTrack[i].querySelector('.automobile') as HTMLElement;
        automobile.style.left = leftPaddingTrack + 'px';
      }
    }
  });
}

export { addListeners };
