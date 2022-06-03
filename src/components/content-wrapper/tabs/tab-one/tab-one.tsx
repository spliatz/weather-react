import * as React from 'react';
import { TabOne, TabsItem } from '../../../../types';
import Heart from './Heart';
import './tab-one.scss';

const TabOne: React.FC<TabOne & TabsItem> = ({isActive, data, setFavourite, favouriteList}) => {

    const [isFavourite, toggleFavourite] = React.useState(false)

    const weatherImage = (`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    const temp = (data.main.temp - 273.15).toFixed(1);

    React.useEffect(() => {
        if (favouriteList.includes(data.name)) {
            toggleFavourite(true)
        } else {
            toggleFavourite(false)
        }
    })
    return (
        <div className={isActive ? 'tab-one active-tab tab-content' : 'tab-one tab-content '}>
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
};

export default TabOne;
