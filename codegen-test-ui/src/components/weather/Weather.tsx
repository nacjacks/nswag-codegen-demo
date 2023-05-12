import React from 'react';
import './Weather.css';
import {WeatherForecast, IConfig, WeatherForecastClient} from '../../services/ApiClient';

function Weather() {
    const [weather, setWeather] = React.useState<WeatherForecast[] | null>();
    const apiConfig = new IConfig();

    React.useEffect(() => {
        async function loadWeather() {
            const weatherClient = new WeatherForecastClient(apiConfig);
            const forecast = await weatherClient.get();
            setWeather(forecast);
        }
        loadWeather();
    }, [setWeather]);

    return (
        <div className="Weather">
            <header className="Weather-header">
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

export default Weather;
