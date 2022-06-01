import * as React from 'react';
import './search.scss';

const Search = () => {
    const [value, setValue] = React.useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(value);
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