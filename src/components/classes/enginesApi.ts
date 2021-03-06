import { ASYNC_RACE_API_URL } from '../constants';
import { makeRequest } from '../makeRequest';

export class EngineApi {
  constructor(private readonly url = `${ASYNC_RACE_API_URL}/engine`) {}

  startedCar = (id: number) => {
    return makeRequest({
      url: `${this.url}/?id=${id}&status=started`,
      method: 'PATCH',
    });
  };

  stoppedCar = (id: number) => {
    return makeRequest({
      url: `${this.url}/?id=${id}&status=stopped`,
      method: 'PATCH',
    });
  };

  driveCar = (id: number) => {
    return makeRequest({
      url: `${this.url}/?id=${id}&status=drive`,
      method: 'PATCH',
    });
  };
}
