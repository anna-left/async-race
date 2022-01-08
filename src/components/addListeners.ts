import { startRace } from './startRace';
import { createNewAuto } from './createNewAuto';
import { generateCars } from './generateCars';

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
}

export { addListeners };
