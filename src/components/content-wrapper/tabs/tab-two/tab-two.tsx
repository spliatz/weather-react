import * as React from 'react';
import { TabsItem, TabTwo } from '../../../../types';
import "./tab-two.scss";

const TabTwo: React.FC<TabTwo & TabsItem> = ({isActive, data}) => {
    return (
        <div className={isActive ? 'tab-content tab-two active-tab' : 'tab-content tab-two'}>

        </div>
    )
}

export default TabTwo;