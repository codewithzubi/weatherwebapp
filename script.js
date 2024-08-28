            document.getElementById('getWeather').addEventListener('click', () => {
            const city = document.getElementById('cityInput').value;
            const apiKey = 'f76d2501c19bc0fa178b0859db86abeb';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === '404' || data.cod === '400') {
                        alert('City not found or invalid request');
                        return;
                    }

                    document.getElementById('cityName').textContent = data.name;
                    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;

                    const iconCode = data.weather[0].icon;
                    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                    document.getElementById('weatherIcon').src = iconUrl;
                    document.getElementById('weatherIcon').alt = data.weather[0].description;
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again.');
                });
        });
   