import * as React from 'react';
import { TabOne, TabsItem } from '../../../types';
import {toCelsius} from '../../../consts';
import Heart from './Heart';
import './tab-one.scss';

const TabOne: React.FC<TabOne & TabsItem> = ({isActive, data, setFavourite, favouriteList}) => {

    const [isFavourite, toggleFavourite] = React.useState(false);

    const weatherImage = (`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    const temp = toCelsius(data.main.temp);

    React.useEffect(() => {
        if (favouriteList.includes(data.name)) {
            toggleFavourite(true);
        } else {
            toggleFavourite(false);
        }
    });
    if (isActive) {
        return (
            <div className="tab-one tab-content">
                <div className={'temperature'}>{temp + '°'}</div>
                <div className={'weather-image'}>
                    <img src={weatherImage} alt={'sorry, picture did not find'}/>
                </div>
                <div className={'city-and-favourite'}>
                    <div className={'city-name'}>{data.name}</div>
                    <button
                        onClick={() => {
                            if (isFavourite) {
                                setFavourite([...favouriteList.filter(item => item !== data.name)]);
                            } else {
                                setFavourite([...favouriteList, data.name]);
                            }
                        }}
                        className={'favourite-btn'}>
                        <Heart isFavourite={isFavourite}/>
                    </button>
                </div>
            </div>
        );
    }
    return null;
};

export default TabOne;
