import * as React from 'react';
import * as CONST from '../../consts';
import Search from '../../components/search/search';
import Tabs from '../../components/tabs/tabs';
import Favourite from '../../components/favourite/favourite';
import './weather.scss';

const Weather = () => {
    const [city, setCity] = React.useState(
        JSON.parse(localStorage.getItem('LAST_CITY') as string) || 'Moscow');
    const [favourites, setFavourite] = React.useState(
        JSON.parse(localStorage.getItem('FAVOURITE_LIST_LOCAl') as string) || ['']);
    const [dataNow, setDataNow] = React.useState(CONST.INITIAL_DATA_NOW);
    const [dataList, setDataList] = React.useState(CONST.INITIAL_DATA_LIST);

    React.useEffect(() => {
        const getDataNow = async () => {
            const url = `${CONST.SERVER_URL}?q=${city}&appid=${CONST.API}`;
            const response = await fetch(url);
            const dataNow: any = await response.json();
            if (dataNow.cod === 200) {
                setDataNow(await dataNow);
                console.log(await dataNow);
            }
        };

        const getDataList = async () => {
            const latAndLon = await getLatAndLon(city);
            const lat = await latAndLon.lat;
            const lon = await latAndLon.lon;
            const dataListUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f660a2fb1e4bad108d6160b7f58c555f&cnt=${2}`;
            const response = await fetch(dataListUrl);
            const dataList: any = await response.json();
            if (+dataList.cod === 200) {
                setDataList(await dataList);
            }
        };

        localStorage.setItem('LAST_CITY', JSON.stringify(city));
        localStorage.setItem('FAVOURITE_LIST_LOCAl', JSON.stringify(favourites));
        getDataNow();
        getDataList();

    }, [city, favourites]);

    return (
        <div className={'wrapper'}>
            <Search setCity={setCity}/>
            <div className={'main-block'}>
                <Tabs dataNow={dataNow} dataList={dataList} favouriteList={favourites} setFavourite={setFavourite}/>
                <Favourite data={favourites} setCity={setCity}/>
            </div>
        </div>
    );
};

function getLatAndLon(city: string) {
    const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${CONST.API}`;
    return fetch(
        URL, {method: 'GET'})
        .then((res) => {
            return res.json();
        })
        .then(res => {
            if (res.length > 0) {
                return {lat: res[0].lat, lon: res[0].lon};
            } else {
                alert('city does not exist');
                return {};
            }
        });
}

export default Weather;