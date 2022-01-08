import { ASYNC_RACE_API_URL } from '../constants';
import { makeRequest } from '../makeRequest';

type CarPayload = {
  name: string;
  color: string;
};

export class GarageApi {
  constructor(private readonly url = `${ASYNC_RACE_API_URL}/garage`) {}

  getCars = () => {
    return makeRequest({
      url: this.url,
      method: 'GET',
    });
  };

  getCar = (id: number) => {
    return makeRequest({
      url: `${this.url}/${id}`,
      method: 'GET',
    });
  };

  createCar = (carPayload: CarPayload) => {
    return makeRequest<CarPayload>({
      url: this.url,
      method: 'POST',
      body: carPayload,
    });
  };

  deleteCar = (id: number) => {
    return makeRequest({
      url: `${this.url}/${id}`,
      method: 'DELETE',
    });
  };

  updateCar = (id: number, carPayload: CarPayload) => {
    return makeRequest<CarPayload>({
      url: `${this.url}/${id}`,
      method: 'PUT',
      body: carPayload,
    });
  };
}
