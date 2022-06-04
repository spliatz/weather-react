export const API: string = '4a261d616465df194fa1fd866fafe4d7';

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
    sys: {
        country: '',
        id: 0,
        sunrise: 0,
        sunset: 0,
        type: 0,
    }
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
    city: {
        name: '',
        id: 0,
    },
    cnt: 0,
};

export function getString(number :number) {
    return ('' + number).length < 2 ?
        '0' + number : '' + number;
} // нужно для корректного отображения времени (вместо 6:2 6:20)

export const toCelsius = (number: number) => {
    return (number - 273.15).toFixed(1);
}

export const toMonth = (number: number) => {
   switch (number) {
       case 1:
           return 'Jan';
       case 2:
           return 'Feb';
       case 3:
           return 'Mart>';
       case 4:
           return 'Apr';
       case 5:
           return 'May';
       case 6:
           return 'Jun';
       case 7:
           return 'July';
       case 8:
           return 'Aug';
       case 9:
           return 'Sep';
       case 10:
           return 'Oct';
       case 11:
           return 'Nov';
       case 12:
           return 'Dec';
   }
}