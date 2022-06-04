import * as React from 'react';
import { TabsItem, TabThree } from '../../../types';
import { toMonth, toCelsius, getString } from '../../../consts';
import './tab-three.scss';

const TabThree: React.FC<TabThree & TabsItem> = ({isActive, data}) => {
    if (isActive) {
        return (
            <div className="tab-content tab-three">
                <p className={'tittle__city-name'}>{data.city.name}</p>
                <div className={'forecast-list'}>
                    {data.list.filter((item, index) => index === 0 || index % 2 === 0).map((item, index) => {
                        const data = new Date(item.dt_txt);
                        const time = getString(data.getUTCHours()) + ':' + getString(data.getMinutes());
                        const day = data.getDate();
                        const month = Number(data.getMonth());
                        return (
                            <div key={index} className={'forecast-item'}>
                                <p className={'date'}>
                                    {day} {toMonth(month + 1)}
                                </p>
                                <p>{time}</p>
                                <div className={'temperatures'}>
                                    <p>{'Temperature: ' + toCelsius(item.main.temp) + 'º'}</p>
                                    <p>{'Feels like: ' + toCelsius(item.main.feels_like) + 'º'}</p>
                                </div>
                                <div className={'weather-view'}>
                                    <p>{item.weather[0].main}</p>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    return null;
};

export default TabThree;