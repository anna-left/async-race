import { garage, garageApi } from '../index';
import { changeСounter } from './changeСounter';

async function removeAuto(index: number) {
  const track = document.querySelector(`.track[data-num="${String(index)}"]`) as HTMLElement;
  const curAutoElement = garage.find((car) => Number(car.id) === index);

  const promise = garageApi.deleteCar(index);
  const newAuto = await promise;
  if (curAutoElement) {
    const curAutoElementIndex = garage.indexOf(curAutoElement);
    garage.splice(curAutoElementIndex, 1);
  }
  track.remove();
  changeСounter();
  console.log(newAuto);
  // console.log(garage);
}

export { removeAuto };
