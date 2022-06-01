import * as React from 'react';
import TabOne from './tab-one/tab-one';
import TabTwo from './tab-two/tab-two';
import TabThree from './tab-three/tab-three';
import './tabs.scss';

const Tabs = () => {
    const [toggleState, setToggleState] = React.useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <div className={'tabs'}>

            <TabOne isActive={toggleState === 1}/>
            <TabTwo isActive={toggleState === 2}/>
            <TabThree isActive={toggleState === 3}/>

            <div className={'tab-selection-wrapper'}>
                <div
                    className={toggleState === 1 ? 'tab-select-one tab-selection active' : 'tab-select-one tab-selection'}
                    onClick={() => toggleTab(1)}>Now
                </div>
                <div
                    className={toggleState === 2 ? 'tab-select-two tab-selection active' : 'tab-select-two tab-selection'}
                    onClick={() => toggleTab(2)}>Details
                </div>
                <div
                    className={toggleState === 3 ? 'tab-select-three tab-selection active' : 'tab-select-three tab-selection'}
                    onClick={() => toggleTab(3)}>Forecast
                </div>
            </div>

        </div>
    );
};

export default Tabs;