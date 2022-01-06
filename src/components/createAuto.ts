import { garage } from '../index';

function createAuto(index: number) {
  // const garage = await getGarage();
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
  const automobile = clone.querySelector('.automobile') as HTMLElement;
  if (automobile) {
    automobile.style.fill = garage[index].color;
  }
  garage[index].carElement = clone;
  parent?.appendChild(clone);
}

export { createAuto };
