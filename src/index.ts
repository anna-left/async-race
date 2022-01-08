import './styles/style.css';
import './styles/normalize.css';
import { fillPage } from './components/fillPage';
// import { getGarage } from './components/getGarage';
import { getWinners } from './components/getWinners';
import { startRace } from './components/startRace';
import { Auto } from './components/classes/auto';
import { Winner } from './components/classes/winner';
import { GarageApi } from './components/classes/garageApi';
import { EngineApi } from './components/classes/engiesApi';

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

export { garage, winners, garageApi, engineApi };
