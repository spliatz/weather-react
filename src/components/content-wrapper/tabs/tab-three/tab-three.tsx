import * as React from 'react';
import { TabsItem, TabThree } from '../../../../types';
import "./tab-three.scss";

const TabThree: React.FC<TabThree & TabsItem> = ({isActive, data}) => {
    return (
        <div className={isActive ? 'tab-content tab-three active-tab' : 'tab-content tab-three'}>

        </div>
    )
}

export default TabThree;