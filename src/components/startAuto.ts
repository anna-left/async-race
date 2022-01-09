import { garage, engineApi } from '../index';
import { leftPaddingTrack, rightPaddingTrack, velocityCalculationFactor } from './constants';

async function startAuto(index: number) {
  const curAutoElement = garage.find((car) => Number(car.id) === index);
  const track = document.querySelector(`.track[data-num="${String(index)}"]`) as HTMLElement;
  const automobile = track.querySelector('.automobile') as HTMLElement;
  if (!curAutoElement || !track || !automobile) {
    // throw new Error('car not found');
    return;
  }

  const promiseStart = engineApi.startedCar(index);
  const answerStart = await promiseStart;
  const velocity = (answerStart.distance / answerStart.velocity) * velocityCalculationFactor;
  // let answerStop;

  const start = Date.now(); // запомнить время начала
  const trackLength = track.offsetWidth - rightPaddingTrack - leftPaddingTrack;
  let left = 0;

  const timer = window.setInterval(async function () {
    //поломка двигателя
    // console.log(answerStop);

    // сколько времени прошло с начала анимации?
    const timePassed = Date.now() - start;

    if (left >= trackLength) {
      clearInterval(timer); // закончить анимацию в конце дистанции
      const promiseStop = engineApi.stoppedCar(index);
      // const answerStop = await promiseStop;
      await promiseStop;
      // console.log(answerStop);
      return;
    }

    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    left = Math.min(timePassed * velocity, trackLength) + leftPaddingTrack;
    automobile.style.left = left + 'px';
  }, 1);

  // const promiseStop = engineApi.stoppedCar(index);
  // answerStop = await promiseStop;
  // requestEngineDrive().catch(error => clearInterval(timer));
  curAutoElement.timer = timer;
}

export { startAuto };
