import { useState, useEffect } from 'react';

import airQualityWeatherRequest from '../../requests/airQualityWeatherRequest';

import './AirQualityWeather.scss';

function getIconUrl(iconId) {
  return `https://www.airvisual.com/images/${iconId}.png`;
}

function AirQualityWeather() {
  const [city, setCity] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [mainPollutant, setMainPollutant] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setIconWeather] = useState(null);

  let message;
  let colour;
  if (airQuality <= 50) {
    message = 'La qualité de l\'air est au top !';
    colour = 'green';
  } else if (airQuality > 50 && airQuality <= 100) {
    message = 'La qualité de l\'air est pas top.';
    colour = 'yellow';
  } else if (airQuality > 100 && airQuality <= 150) {
    message = 'La qualité de l\'air est pas top du tout.';
    colour = 'orange';
  } else if (airQuality > 150 && airQuality <= 200) {
    message = 'La qualité de l\'air est pourrie.';
    colour = 'red';
  } else if (airQuality > 200 && airQuality <= 300) {
    message = 'Achète un masque à gaz.';
    colour = 'purple';
  } else if (airQuality > 300) {
    message = 'Arrête de respirer !';
    colour = 'maroon';
  }
  useEffect(() => {
    const callRequest = async () => {
      const response = await airQualityWeatherRequest();
      if (response.status === 200) {
        setCity(response.data?.data?.city);
        setAirQuality(response.data?.data?.current?.pollution?.aqius);
        setMainPollutant(response.data?.data?.current?.pollution?.mainus);
        setTemperature(response.data?.data?.current?.weather?.tp);
        setIconWeather(response.data?.data?.current?.weather?.ic);
      }
    };
    callRequest();
  }, []);

  console.log(weatherIcon);

  return (
    <div>
      <header className="card-header">
        <h3 className="card-header-title">
          {city}
        </h3>
        <p className="card-header-message">{message}</p>
      </header>
      <main className="card-main">
        <section className={`card-main-air ${colour}`}>
          <p className="card-main-airQuality">{airQuality} US AQI
            <span className="card-main-airPollutant"> Polluant principal {mainPollutant}</span>
          </p>
        </section>
        <section className="card-main-weather">
          <img src={getIconUrl(weatherIcon)} alt="icône météo" className="card-main-weatherIcon" />
          <p className="card-main-weatherTemperature">{temperature}°C</p>
        </section>
      </main>
    </div>
  );
}

export default AirQualityWeather;
