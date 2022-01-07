import { ASYNC_RACE_API_URL } from './constants';
import { path } from './constants';

const getWinners = async () => {
  const response = await fetch(`${ASYNC_RACE_API_URL}${path.winners}`);
  const data = await response.json();
  return data;
};

export { getWinners };
