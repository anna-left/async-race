// import { getGarage } from './getGarage';
import { createAuto } from './createAuto';
import { garage } from '../index';

async function fillPage() {
  for (let i = 0; i < garage.length; i++) {
    createAuto(i);
  }
}

export { fillPage, garage };
