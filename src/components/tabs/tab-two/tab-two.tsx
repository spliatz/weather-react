import * as React from 'react';
import { TabsItem, TabTwo } from '../../../types';
import { getString } from '../../../consts';
import './tab-two.scss';

const TabTwo: React.FC<TabTwo & TabsItem> = ({isActive, data}) => {

    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);
    const sunrise = (sunriseTime.getHours()) + ':' + getString(sunriseTime.getMinutes());
    const sunset = (sunsetTime.getHours()) + ':' + getString(sunsetTime.getMinutes());

    if (isActive) {
        return (
            <div className="tab-content tab-two">
                <p>{data.name}</p>
                <ul className={'data-list'}>
                    <li>Temperature: {((data.main.temp - 273.15).toFixed(1) + '°')}</li>
                    <li>Feels like: {(data.main.feels_like - 273.15).toFixed(1) + '°'}</li>
                    <li>Weather: {data.weather[0].main}</li>
                    <li>Sunrise: {sunrise}</li>
                    <li>Sunset: {sunset}</li>
                </ul>
            </div>
        );
    }
    return null;
};

export default TabTwo;