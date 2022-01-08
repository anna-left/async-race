import { garage, garageApi } from '../index';
import { createAuto } from './createAuto';

async function createNewAuto(name: string, color: string) {
  const promise = garageApi.createCar({ name, color });
  const newAuto = await promise;
  if (newAuto) {
    garage.push(newAuto);
    createAuto(newAuto.id);
  }
}

export { createNewAuto };
