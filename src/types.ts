export interface Search {
    setCity(argument: string): void;
}

export interface Tabs {
    dataNow: NowResponse;
    dataList: ListResponse;
    favouriteList: Array<string>;
    setFavourite: (argument: Array<string>) => void;
}

export interface TabsItem {
    isActive: boolean;
}

export interface TabOne {
    data: NowResponse;
    favouriteList: Array<string>;
    setFavourite: (argument: Array<any>) => void;
}

export interface TabTwo {
    data: NowResponse;
}

export interface TabThree {
    data: ListResponse;
}

export interface Favourite {
    data: Array<string>;
    setCity: (argument: string) => void;
    setFavourite: (argument: Array<string>) => void;
}

export interface ListResponse {
    cod: number;
    list: Array<List>;
    city: {name: string, id: number};
    cnt: number;
}

export interface Heart {
    isFavourite: boolean;
}

export interface NowResponse {
    cod: number;
    dt: number;
    main: Main;
    name: string;
    weather: Array<Weather>;
    sys: ISys;
}

interface List {
    dt: number;
    main: Main;
    weather: Array<Weather>;
    dt_txt: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

interface Weather {
    id?: number;
    main?: string;
    description?: string;
    icon: string;
}

interface ISys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}