        apiKey = "ENTER YOU API KEY";
        apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const weatherIcon = document.querySelector('.weather-icon');
        const search = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');


        async function checkWeather(city){
           const response = await fetch(apiUrl + city + apiKey); 


            if(response.status == 404){
                document.querySelector('.weather').style.display = "none";
                document.querySelector('.error').style.display = "block";
            } else {
                var data = await response.json();
            console.log(data);

            let date = new Date().toLocaleDateString("it-IT");
            

            var city = document.querySelector('.city');
            var temp = document.querySelector('.temp');
            var humidity = document.querySelector('.humidity');
            var wind = document.querySelector('.wind');
            var conditions = document.querySelector('.conditions');
            let max = document.querySelector('.temp-max');
            let min = document.querySelector('.temp-min');
            let percepita = document.querySelector('.temp-percepita');
            let dateInput = document.querySelector('.date');
            

            city.innerHTML = data.name;
            temp.innerHTML = Math.round(data.main.temp) + "°C";
            wind.innerHTML = Math.round(data.wind.speed) + "Km/h";
            humidity.innerHTML = data.main.humidity + "%";
            conditions.innerHTML = data.weather[0].description;
            percepita.innerHTML = Math.round(data.main.feels_like) + "°C"
            max.innerHTML = Math.round(data.main.temp_max) + "°C";
            min.innerHTML = Math.round(data.main.temp_min) + "°C";
            dateInput.innerHTML = date;

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png";
            }


        }

            }


          
        searchBtn.addEventListener("click", function(){
            document.querySelector('.weather').style.display = "block";
            document.querySelector('.error').style.display = "none";
            checkWeather(search.value);
        })

        document.addEventListener("keydown", function(event){
            if (event.keyCode === 13 || event.which === 13) {
                searchBtn.click();

        }
    });
