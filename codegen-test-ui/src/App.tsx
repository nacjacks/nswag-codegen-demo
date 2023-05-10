import React from 'react';
import './App.css';
import { IConfig } from './services/ApiBase';
import { WeatherForecast, WeatherForecastClient } from './services/WeatherForecastClient';

function App() {
  const [weather, setWeather] = React.useState<WeatherForecast[] | null>();
  
  React.useEffect(() => {
    async function loadWeather() {
      const weatherClient = new WeatherForecastClient(new IConfig, "https://localhost:7030/api");
      const forecast = await weatherClient.get();
      setWeather(forecast);
    }
    loadWeather();
  }, [setWeather]);
  
  return (
      <div className="App">
        <header className="App-header">
          {weather ? (
              <table>
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Summary</th>
                  <th>Centigrade</th>
                  <th>Fahrenheit</th>
                </tr>
                </thead>
                <tbody>
                {weather.map(({ date, summary, temperatureC, temperatureF }) => (
                    <tr>
                      <td>{new Date(date).toLocaleDateString()}</td>
                      <td>{summary}</td>
                      <td>{temperatureC}</td>
                      <td>{temperatureF}</td>
                    </tr>
                ))}
                </tbody>
              </table>
          ) : (
              <p>Loading weather...</p>
          )}
        </header>
      </div>
  );
}

export default App;
