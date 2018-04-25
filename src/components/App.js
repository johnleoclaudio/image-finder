import React, { Component } from 'react';
import Images from './Images/ImageList';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    state = {
        images: [],
        searchInputValue: ''
    }
    
    componentDidMount() {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=coffee&image_type=photo&page=1&orientation=horizontal`)
        .then(result => result.json())
        .then(({ hits }) => this.setState({ images: hits }))
        .catch(error => console.error('Error:', error))
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        const searchInput = e.target.elements.searchInput.value;
        const api_call = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchInput}`);
        const images = await api_call.json();
        this.setState({ images: images.hits, searchInputValue: '' })
    }

    handleInputChange = (e) => {
        this.setState({
            searchInputValue: e.target.value
        })
    }

    render () {
        return(
            <div className="row">
                <SearchBar onFormSubmit={this.handleFormSubmit} onInputChange={this.handleInputChange} inputValue={this.state.searchInputValue}/>
                <Images images={this.state.images}/>
            </div>
        )
    }
}

export default App;