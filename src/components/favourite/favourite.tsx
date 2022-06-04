import * as React from 'react';
import { Favourite } from '../../types';
import "./favourite.scss";

const Favourite: React.FC<Favourite> = ({data, setCity, setFavourite}) => {

    return (
            <div className={"favourite"}>
                <div className={'tittle'}>Added Locations:</div>
                <div className={'favourite-list'}>
                    {data.map((item, index) => {
                        if (item) {
                            return (
                                <div
                                    key={index}
                                    className={'favourite-list__item'}>

                                    <p onClick={() => setCity(item)}>{item}</p>
                                    <button className={"delete-fav"}
                                    onClick={() => {
                                        setFavourite([...data.filter(removeItem => item !== removeItem)])
                                    }}
                                    />

                                </div>
                            )
                        }
                    })}
                </div>
            </div>
    )
}

export default Favourite;