import * as React from 'react';
import Search from '../../components/search/search';
import ContentWrapper from '../../components/content-wrapper/content-wrapper';
import * as CONST from '../../consts';
import './weather.scss';

const Weather = () => {
    const [city, setCity] = React.useState('Moscow');
    const [dataNow, setDataNow] = React.useState(CONST.INITIAL_DATA_NOW);
    const [dataList, setDataList] = React.useState(CONST.INITIAL_DATA_LIST);
    const [favourites, setFavourite] = React.useState(['']);

    React.useEffect(() => {
        const getDataNow = async () => {
            const url = `${CONST.SERVER_URL}?q=${city}&appid=${CONST.API}`;
            const response = await fetch(url);
            const dataNow: any = await response.json();
            if (dataNow.cod === 200) {
                setDataNow(await dataNow);
            }
        };

        const getDataList = async () => {
            const latAndLon = await getLatAndLon(city);
            const lat = await latAndLon.lat;
            const lon = await latAndLon.lon;
            const dataListUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f660a2fb1e4bad108d6160b7f58c555f&cnt=${2}`;
            const response = await fetch(dataListUrl);
            const dataList: any = await response.json();
            if (+dataList.cod === 200) {
                setDataList(await dataList);
            }
        };

        getDataNow();
        getDataList();
    }, [city]);

    return (
        <div className={'wrapper'}>
            <Search setCity={setCity}/>
            <ContentWrapper
                dataNow={dataNow}
                dataList={dataList}
                favouriteList={favourites}
                setFavourite={setFavourite}
                setCity={setCity}
            />
        </div>
    );
};

function getLatAndLon(city: string) {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${CONST.API}`;
    return fetch(
        URL, {method: 'GET'})
        .then((res) => {
            return res.json();
        })
        .then(res => {
            if (res.length > 0) {
                return {lat: res[0].lat, lon: res[0].lon};
            } else {
                alert("city does not exist")
                return {};
            }
        });
}

export default Weather;