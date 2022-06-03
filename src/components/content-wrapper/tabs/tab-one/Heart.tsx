import * as React from 'react';
import { Heart } from '../../../../types';

const Heart: React.FC<Heart> = ({isFavourite}) => {
    return (
        <svg width="30" height="30" viewBox="0 0 24 25" fill={isFavourite ? '#e4605e' : 'none'}
             xmlns="http://www.w3.org/2000/svg">
            <path opacity="1" fillRule="evenodd" clipRule="evenodd"
                  d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                  stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    );
};

export default Heart;