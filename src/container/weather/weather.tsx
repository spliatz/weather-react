import * as React from 'react';
import Search from '../../components/search/search';
import ContentWrapper from '../../components/content-wrapper/content-wrapper';
import "./weather.scss";

const Weather = () => {
    return (
        <div className={"wrapper"} onContextMenu={() => false}>
            <Search/>
            <ContentWrapper/>
        </div>
    )
}

export default Weather;