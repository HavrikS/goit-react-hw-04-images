import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { IoSearchOutline } from "react-icons/io5";
import css from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends Component {

state = {    
    searchName: ''    
};

handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleSubmit = event => {
    event.preventDefault();    
    this.props.onSubmit(this.state)
};


render() {     
return (   
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={this.handleSubmit}>
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
        value={this.state.searchName}
        onChange={this.handleChange}
        />
    </form>
    </header>       
);
}
}


export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
