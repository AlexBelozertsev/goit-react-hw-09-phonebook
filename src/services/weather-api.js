// const apiKey = `e69a38ded68355e34e1bf35be61978dd`;
const apiKey = `b17a2dddb01d7481fea6373f92c2e546`;

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

function getFetch(query) {
  const url = `${baseUrl}${query}&units=metric&appid=${apiKey}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        alert('No weather found.');
      }
      return response.json();
    })
    .then(data => data);
}

export default { getFetch };
