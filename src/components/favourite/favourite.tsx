import * as React from 'react';
import { Favourite } from '../../types';
import "./favourite.scss";

const Favourite: React.FC<Favourite> = ({data, setCity}) => {
    return (
            <div className={"favourite"}>
                <div className={'tittle'}>Added Locations:</div>
                <div className={'favourite-list'}>
                    {data.map((item, index) => {
                        return <div
                            key={index}
                            className={'favourite-list__item'}
                            onClick={() => setCity(item)}
                        >
                            {item}
                        </div>
                    })}
                </div>
            </div>
    )
}

export default Favourite;