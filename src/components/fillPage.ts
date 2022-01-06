// import { getGarage } from './getGarage';
import { createAuto } from './createAuto';
import { garage } from '../index';
// const ASYNC_RACE_API_URL = 'http://127.0.0.1:3000';

// const path = {
//     garage: '/garage',
//     winners: '/winners ',
// }

// const getGarage = async () => {
//     const response = await fetch(`${ASYNC_RACE_API_URL}${path.garage}`);
//     const data = await response.json();
//     return data;
//     //console.log(data);

//     // const

// }
async function fillPage() {
  // const garage = await getGarage();
  // const parent = document.querySelector('.garage');
  // const trackSourse  =  document.querySelector('.track');
  // const template = document.querySelector('.template .track'); // as HTMLElement;

  // if (template && parent) {
  for (let i = 0; i < garage.length; i++) {
    createAuto(i);
    // const clone = template.cloneNode(true) as HTMLElement;
    // const name = clone.querySelector('.name');
    // if (name) {
    //   name.innerHTML = garage[i].name;
    // }
    // const automobile = clone.querySelector('.automobile') as HTMLElement;
    // if (automobile) {
    //   automobile.style.fill = garage[i].color;
    // }

    // garage[i].car = clone;

    // parent?.appendChild(clone);
  }
  // }
}

// fillPage();

export { fillPage, garage };
