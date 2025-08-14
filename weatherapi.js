document.getElementById('fetchWeather').addEventListener('click', () => {

  const location = document.getElementById('locationInput').value.trim();
  

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=metric&appid=976cc88277af568ebcaac65b8b7379a4`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error("Location Entered Is Not Found, Kindly Provide A Valid Location");
      return response.json();
    })
    .then(data => {

        console.log(data);
      const weatherDiv = document.getElementById('lcationWeather');

      const { name, main, weather } = data;

      weatherDiv.innerHTML = `
        <h3 class="text-xl font-semibold">${name}</h3>
        <p class="text-4xl font-bold mt-2">${main.temp}°C</p>
        <p class="text-4xl font-bold mt-2"> <span>Minimum Temparature </span>${main.temp_min}</p>
        <p class="text-4xl font-bold mt-2"> <span>Maximum Temparature </span>${main.temp_max}</p>
        <p class="capitalize">${weather[0].description}</p>
        <p class="capitalize">${weather[0].main}</p>


      `;
    })
    .catch(err => {
      document.getElementById('lcationWeather').innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
    });
});
