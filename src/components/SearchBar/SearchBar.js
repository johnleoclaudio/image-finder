import React from 'react';

const SearchBar = props => {
    return <form onSubmit={props.onFormSubmit}>
        <input type="text" name="searchInput" placeholder="Search any image" onChange={props.onInputChange} value={props.inputValue} autoComplete="off"/>
        <input type="submit" value="Submit" />
    </form>
}

export default SearchBar;