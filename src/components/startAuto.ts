import { garage, engineApi } from '../index';
import { leftPaddingTrack, rightPaddingTrack, velocityCalculationFactor } from './constants';

function draw(curTime: number, velocity: number, curTrackLength: number) {
  const curLeft = Math.min(curTime * velocity, curTrackLength) + leftPaddingTrack;
  return curLeft;
}

async function startAuto(index: number) {
  const curAutoElement = garage.find((car) => Number(car.id) === index + 1);
  const track = document.querySelector(`.track[data-num="${String(index)}"]`) as HTMLElement;
  const automobile = track.querySelector('.automobile') as HTMLElement;
  if (!curAutoElement || !track || !automobile) {
    // throw new Error('car not found');
    return;
  }

  const promise = engineApi.startCar(index);
  const answer = await promise;
  const velocity = answer.distance / answer.velocity / velocityCalculationFactor;

  const start = Date.now(); // запомнить время начала
  const trackLength = track.offsetWidth - rightPaddingTrack - leftPaddingTrack;
  let left = 0;

  const timer = window.setInterval(function () {
    // сколько времени прошло с начала анимации?
    const timePassed = Date.now() - start;

    if (left >= trackLength) {
      clearInterval(timer); // закончить анимацию в конце дистанции
      return;
    }

    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    left = draw(timePassed, velocity, trackLength);
    automobile.style.left = left + 'px';
  }, 1);
  // requestEngineDrive().catch(error => clearInterval(timer));
  curAutoElement.timer = timer;
}

export { startAuto };
