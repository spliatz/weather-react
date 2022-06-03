import * as React from 'react';
import Tabs from './tabs/tabs';
import './content-wrapper.scss';
import Favourite from './favourite/favourite';
import { Content } from '../../types';

const ContentWrapper: React.FC<Content> = ({
                                               dataNow,
                                               dataList,
                                               favouriteList,
                                               setFavourite,
                                               setCity,
                                           }) => {
    return (
        <div className={'content-wrapper'}>
            <Tabs dataNow={dataNow} dataList={dataList} setFavourite={setFavourite} favouriteList={favouriteList}/>
            <Favourite data={favouriteList} setCity={setCity}/>
        </div>
    );
};

export default ContentWrapper;