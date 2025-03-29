import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getJoke = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jokes.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getJoke;
