import { ASYNC_RACE_API_URL } from './constants';
import { path } from './constants';

const getGarage = async () => {
  const response = await fetch(`${ASYNC_RACE_API_URL}${path.garage}`);
  const data = await response.json();
  return data;
};

export { getGarage };
