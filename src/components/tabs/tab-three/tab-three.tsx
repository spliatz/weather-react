import * as React from 'react';
import { TabsItem, TabThree } from '../../../types';
import './tab-three.scss';

const TabThree: React.FC<TabThree & TabsItem> = ({isActive, data}) => {
    if (isActive) {
        return (
            <div className="tab-content tab-three">

            </div>
        );
    }
    return null;
};

export default TabThree;