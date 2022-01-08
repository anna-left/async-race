import { getRandomValue } from './getRandomValue';

function getRandomColor() {
  const red = getRandomValue(20, 255);
  const green = getRandomValue(20, 255);
  const blue = getRandomValue(20, 255);

  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

export { getRandomColor };
