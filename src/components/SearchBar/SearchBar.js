import React from 'react';

const SearchBar = props => {
    return <nav className="navbar">
        <div className="navbar-container">
            <h2>ImgFndr</h2>
            <form id="search-bar" onSubmit={props.onFormSubmit}>
                <input className="search-bar" type="text" name="searchInput" placeholder="Search any image" onChange={props.onInputChange} value={props.inputValue} autoComplete="off"/>
                <input className="search-button" type="submit" value="Search" />
            </form>
        </div>
    </nav>
}

export default SearchBar;