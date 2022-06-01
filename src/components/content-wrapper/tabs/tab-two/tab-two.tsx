import * as React from 'react';
import "./tab-two.scss";

const TabTwo: React.FC<any> = ({isActive}) => {
    return (
        <div className={isActive ? 'tab-content tab-two active-tab' : 'tab-content tab-two'}/>
    )
}

export default TabTwo;