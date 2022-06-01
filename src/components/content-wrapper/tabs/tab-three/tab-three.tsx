import * as React from 'react';
import "./tab-three.scss";

const TabThree: React.FC<any> = ({isActive}) => {
    return (
        <div className={isActive ? 'tab-content tab-three active-tab' : 'tab-content tab-three'}/>
    )
}

export default TabThree;