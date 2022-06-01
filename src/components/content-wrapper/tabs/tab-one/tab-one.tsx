import * as React from 'react';
import "./tab-one.scss";

const TabOne: React.FC<any> = ({isActive}) => {
    return (
        <div className={isActive ? 'tab-content tab-one active-tab' : 'tab-content tab-one'}/>
    )
}

export default TabOne;