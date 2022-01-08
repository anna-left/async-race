import { ASYNC_RACE_API_URL } from '../constants';
import { makeRequest } from '../makeRequest';

// http://127.0.0.1:3000/engine/?id=2&status=drive

export class EngineApi {
  constructor(private readonly url = `${ASYNC_RACE_API_URL}/engine`) {}

  startCar = (id: number) => {
    return makeRequest({
      url: `${this.url}/?id=${id + 1}&status=started`,
      method: 'PATCH',
    });
  };
}
