import './styles/style.css';
import './styles/normalize.css';
import { fillPage } from './components/fillPage';
// import { getGarage } from './components/getGarage';
import { getWinners } from './components/getWinners';
import { Auto } from './components/classes/auto';
import { Winner } from './components/classes/winner';
import { GarageApi } from './components/classes/garageApi';
import { EngineApi } from './components/classes/enginesApi';
import { addListeners } from './components/addListeners';

const garageApi = new GarageApi();
const engineApi = new EngineApi();

let garage: Array<Auto>;
let winners: Array<Winner>;

async function start() {
  const promise = garageApi.getCars();
  garage = await promise;
  winners = await getWinners();
  fillPage();
  addListeners();
}

start();

export { garage, winners, garageApi, engineApi };
