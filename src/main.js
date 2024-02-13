const API_KEY = '3325286-fa3dfcca09e09505ab6e3c966';
const searchTerm = 'cat'; // Приклад: пошук картинок котів

fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}`)
  .then(response => response.json())
  .then(data => {
    // Обробка отриманих даних
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
