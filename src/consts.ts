export const API: string = 'f660a2fb1e4bad108d6160b7f58c555f';

export const SERVER_URL: string = 'http://api.openweathermap.org/data/2.5/weather';

export const DEFAULT_CITY: string = 'Moscow';

export const INITIAL_DATA_NOW = {
    cod: 0,
    dt: 0,
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
    },
    name: '',
    weather: [
        {
            id: 0,
            main: '',
            description: '',
            icon: '',
        },
    ],
};

export const INITIAL_DATA_LIST = {
    cod: 0,
    list: [
        {
            dt: 0,
            main: {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                pressure: 0,
                sea_level: 0,
                grnd_level: 0,
                humidity: 0,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '',
                },
            ],
            dt_txt: '',
        },
    ],
    name: '',
    weather: [
        {
            id: 0,
            main: '',
            description: '',
            icon: '',
        },
    ],
};