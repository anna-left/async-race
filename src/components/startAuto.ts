import { garage } from '../index';
import { leftPadding, rightPadding } from './constants';

function draw(curTime: number, curSpeed: number, curTrackLength: number) {
  const curLeft = Math.min(curTime * curSpeed, curTrackLength) + leftPadding;
  return curLeft;
}

const speed = 0.3;

function startAuto(index: number) {
  const curAutoElement = garage.find((car) => Number(car.id) === index + 1);
  const track = document.querySelector(`.track[data-num="${String(index)}"]`) as HTMLElement;
  const automobile = track.querySelector('.automobile') as HTMLElement;
  if (!curAutoElement || !track || !automobile) {
    // throw new Error('car not found');
    return;
  }
  const start = Date.now(); // запомнить время начала
  const trackLength = track.offsetWidth - rightPadding - leftPadding;
  let left = 0;
  // let left = automobile.style.left;

  const timer = setInterval(function () {
    // сколько времени прошло с начала анимации?
    const timePassed = Date.now() - start;

    if (left >= trackLength) {
      clearInterval(timer); // закончить анимацию в конце дистанции
      return;
    }

    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    left = draw(timePassed, speed, trackLength);
    automobile.style.left = left + 'px';
  }, 1);
  curAutoElement.timer = timer;
}

export { startAuto };
