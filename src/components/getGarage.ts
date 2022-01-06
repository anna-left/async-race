const ASYNC_RACE_API_URL = 'http://127.0.0.1:3000';

const path = {
  garage: '/garage',
  winners: '/winners ',
};

const getGarage = async () => {
  const response = await fetch(`${ASYNC_RACE_API_URL}${path.garage}`);
  const data = await response.json();
  // console.log(data);
  return data;
};

export { getGarage };
