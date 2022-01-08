type MakeRequest = {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
};

const checkIsResponseOk = (response: Response) => {
  if (response.ok && (response.status === 200 || response.status === 201)) {
    return response.json();
  }

  throw new Error(response.statusText);
};

const makeRequest = <T>({ url, method, body }: MakeRequest & { body?: T }) => {
  const requestParams: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    requestParams.body = JSON.stringify(body);
  }

  return fetch(url, requestParams)
    .then((response) => checkIsResponseOk(response))
    .catch((error) => new Error(error));
};

export { makeRequest };
