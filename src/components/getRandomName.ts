import { getRandomValue } from './getRandomValue';

const marks = [
  'Honda',
  'Toyota',
  'Subaru',
  'Audi',
  'Mitsubishi',
  'Nissan',
  'Lexus',
  'Mazda ',
  'Rolls-royce',
  'Porshe',
  'Maserati',
  'Lamborfhini',
  'McLaren',
  'Ferrari',
  'BMW',
];

const models = [
  'A8',
  'S5',
  'M8',
  'CX-30',
  'CX-9',
  'Solaris',
  'Elantra',
  'LS',
  'LC',
  'ES',
  'Land Cruiser',
  'RAV4',
  'Highlander',
  'DB11',
  'DB9',
];

function getRandomName() {
  const ind1 = getRandomValue(0, 14);
  const ind2 = getRandomValue(0, 14);

  return `${marks[ind1]} ${models[ind2]}`;
}

export { getRandomName };
