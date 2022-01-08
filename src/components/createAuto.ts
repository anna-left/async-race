import { garage } from '../index';
import { startAuto } from './startAuto';
import { stopAuto } from './stopAuto';
import { changeСounter } from './changeСounter';
import { removeAuto } from './removeAuto';

function createAuto(index: number) {
  const parent = document.querySelector('.garage') as HTMLElement;
  const template = document.querySelector('.template .track') as HTMLElement;
  const clone = template.cloneNode(true) as HTMLElement;
  const nameElement = clone.querySelector('.name');
  if (!garage[index]) {
    return;
  }
  if (nameElement) {
    nameElement.innerHTML = garage[index].name;
  }
  clone.setAttribute('data-num', String(index));
  const automobile = clone.querySelector('.automobile') as HTMLElement;
  if (automobile) {
    automobile.style.fill = garage[index].color;
    automobile.setAttribute('data-num', String(index));
  }
  garage[index].carElement = clone;
  clone.querySelector('.start-btn')?.addEventListener('click', () => {
    startAuto(index);
  });
  clone.querySelector('.stop-btn')?.addEventListener('click', () => {
    stopAuto(index);
  });
  clone.querySelector('.remove-btn')?.addEventListener('click', () => {
    removeAuto(index);
  });
  parent?.appendChild(clone);
  changeСounter();
}

export { createAuto };
