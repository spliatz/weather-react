import * as React from 'react';
import * as CONST from '../../consts';
import Search from '../../components/search/search';
import Tabs from '../../components/tabs/tabs';
import Favourite from '../../components/favourite/favourite';
import './weather.scss';

const Weather = () => {
    const [city, setCity] = React.useState(
        JSON.parse(localStorage.getItem('LAST_CITY') as string) || CONST.DEFAULT_CITY);
    const [favourites, setFavourite] = React.useState(
        JSON.parse(localStorage.getItem('FAVOURITE_LIST_LOCAl') as string) || ['']);
    const [dataNow, setDataNow] = React.useState(CONST.INITIAL_DATA_NOW);
    const [dataList, setDataList] = React.useState(CONST.INITIAL_DATA_LIST);

    React.useEffect(() => {
        const getDataNow = async () => {
            const url = `${CONST.SERVER_URL}?q=${city}&appid=${CONST.API}`;
            const response = await fetch(url);
            const dataNow: any = await response.json();
            if (await dataNow.cod >= 400 && dataNow.cod < 600) {
                alert('city did not find');
                return;
            }
            setDataNow(await dataNow);
            await localStorage.setItem('LAST_CITY', JSON.stringify(city));
        };

        const getDataList = async () => {
            const latAndLon = await getLatAndLon(city);
            const lat = await latAndLon.Lat;
            const lon = await latAndLon.Lon;
            const dataListUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f660a2fb1e4bad108d6160b7f58c555f&cnt=${40}`;
            const response = await fetch(dataListUrl);
            const dataList: any = await response.json();
            setDataList(await dataList);
        };

        getDataNow();
        getDataList();
        localStorage.setItem('FAVOURITE_LIST_LOCAl', JSON.stringify(favourites));

    }, [city, favourites]);

    return (
        <div className={'wrapper'}>
            <Search setCity={setCity}/>
            <div className={'main-block'}>
                <Tabs dataNow={dataNow} dataList={dataList} favouriteList={favourites} setFavourite={setFavourite}/>
                <Favourite data={favourites} setCity={setCity} setFavourite={setFavourite}/>
            </div>
        </div>
    );
};

async function getLatAndLon(city: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${CONST.API}`;
    const response = await fetch(url);
    const info = await response.json();
    if (info.length > 0) {
        const Lat = await info[0].lat;
        const Lon = await info[0].lon;
        return {Lat, Lon};
    }
    return {Lat: null, Lon: null};
}

export default Weather;