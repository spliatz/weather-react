export interface Search {
    setCity(argument: string): void;
}

export interface Content {
    dataNow: NowResponse;
    dataList: ListResponse;
    favouriteList: Array<string>;
    setFavourite: (argument: Array<string>) => void;
    setCity: (argument: string) => void;
}

export interface Favourite {
    data: Array<string>;
    setCity: (argument: string) => void;
}

export interface ListResponse {
    cod: number;
    list?: Array<List>;
    name?: string;
    weather: Array<Weather>
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

export interface Heart {
    isFavourite: boolean;
}

export interface TabTwo {
    data: NowResponse
}

export interface TabThree {
    data: ListResponse;
}

export interface TabList {
    isActive: boolean;
    data: ListResponse;
}

export interface NowResponse {
    cod: number;
    dt: number;
    main: Main;
    name: string;
    weather: Array<Weather>;
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