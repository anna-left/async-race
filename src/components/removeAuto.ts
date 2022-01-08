import { garage, garageApi } from '../index';

async function removeAuto(index: number) {
  // const track = document.querySelector(`.track[data-num="${String(index)}"]`) as HTMLElement;
  const promise = garageApi.deleteCar(index);
  const newAuto = await promise;
  console.log(newAuto);
  console.log(garage);
}

export { removeAuto };
