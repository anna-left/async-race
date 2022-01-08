import './styles/style.css';
import './styles/normalize.css';
import { fillPage } from './components/fillPage';
// import { getGarage } from './components/getGarage';
import { getWinners } from './components/getWinners';
import { startRace } from './components/startRace';
import { createNewAuto } from './components/createNewAuto';
import { Auto } from './components/classes/auto';
import { Winner } from './components/classes/winner';
import { GarageApi } from './components/classes/garageApi';
import { EngineApi } from './components/classes/engiesApi';
import { generateCars } from './components/generateCars';

const garageApi = new GarageApi();
const engineApi = new EngineApi();

let garage: Array<Auto>;
let winners: Array<Winner>;

async function start() {
  const promise = garageApi.getCars();
  garage = await promise;
  winners = await getWinners();
  fillPage();
}

start();
document.querySelector('.race-btn')?.addEventListener('click', () => startRace());
document.querySelector('.create-btn')?.addEventListener('click', () => {
  const newName = document.querySelector('.new-name') as HTMLInputElement;
  const color = document.querySelector('.color-auto') as HTMLInputElement;
  createNewAuto(newName.value, color.value);
});
document.querySelector('.generate-btn')?.addEventListener('click', () => {
  generateCars();
});

export { garage, winners, garageApi, engineApi };
