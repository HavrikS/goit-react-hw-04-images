import React, { Component } from 'react'
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
    <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
        className={css.SearchFormInput}
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