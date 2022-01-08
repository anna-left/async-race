import { numberCarsCreated } from './constants';
import { createNewAuto } from './createNewAuto';
import { getRandomColor } from './getRandomColor';
import { getRandomName } from './getRandomName';

function generateCars() {
  for (let i = 0; i < numberCarsCreated; i++) {
    createNewAuto(getRandomName(), getRandomColor());
  }
}

export { generateCars };
