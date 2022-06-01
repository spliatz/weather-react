import * as React from 'react';
import Tabs from './tabs/tabs';
import "./content-wrapper.scss";
import Favourite from './favourite/favourite';

const ContentWrapper = () => {
    return (
        <div className={"content-wrapper"}>
            <Tabs/>
            <Favourite/>
        </div>
    )
}

export default ContentWrapper;