import { useState, useRef } from 'react'
import PropTypes from 'prop-types';
import { IoSearchOutline } from "react-icons/io5";
import css from 'components/Searchbar/Searchbar.module.css'


export function Searchbar({onSubmit}) {

const [searchName, setSearchName] = useState('');

const inputEl = useRef(null);

const handleChange = () => {
    setSearchName(inputEl.current.value);
}

const handleSubmit = event => {
    event.preventDefault();    
    onSubmit(searchName)    
};


return (   
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
                <span className={css.searchFormButtonLabel}><IoSearchOutline className={css.searchLabel}/></span>
        </button>

        <input
        className={css.searchFormInput}
        type="text"
        name="searchName"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchName}
        ref={inputEl}
        onChange={handleChange}
        />
    </form>
    </header>       
);
}



Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
