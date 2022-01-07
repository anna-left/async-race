import './styles/style.css';
import './styles/normalize.css';
import { fillPage } from './components/fillPage';
import { getGarage } from './components/getGarage';
import { getWinners } from './components/getWinners';
import { Auto } from './components/classes/auto';
import { Winner } from './components/classes/winner';
import { GarageApi } from './components/classes/garageApi';

const garageApi = new GarageApi();

let garage: Array<Auto>;
let winners: Array<Winner>;

async function start() {
  // garage = await garageApi.getCars();
  garage = await getGarage();
  winners = await getWinners();
  fillPage();
}

start();

export { garage, winners, garageApi };
