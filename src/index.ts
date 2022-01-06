import './styles/style.css';
import './styles/normalize.css';
import { fillPage } from './components/fillPage';
import { getGarage } from './components/getGarage';
import { Auto } from './components/classes/auto';

let garage: Array<Auto>;

async function start() {
  garage = await getGarage();
  fillPage();
}

start();

export { garage };
