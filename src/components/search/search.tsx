import * as React from 'react';
import { Search } from '../../types';
import './search.scss';

const Search: React.FC<Search> = ({setCity}) => {
    const [value, setValue] = React.useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setCity(value);
        setValue('');
    };

    return (
        <form
            className={'search-form'}
            onSubmit={submitHandler}
        >

            <input
                placeholder={'write city'}
                value={value}
                onChange={changeHandler}
            />

            <button/>

        </form>
    );
};

export default Search;