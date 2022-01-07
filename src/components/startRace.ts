import { garage } from '../index';
import { startAuto } from './startAuto';

function startRace() {
  for (let i = 0; i < garage.length; i++) {
    startAuto(i);
  }
}

export { startRace };
