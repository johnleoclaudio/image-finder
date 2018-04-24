import React, { Component } from 'react';
import Images from './Images/ImageList';

class App extends Component {
    state = {
        images: []
    }
    
    componentDidMount() {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo`)
        .then(result => result.json())
        .then(({ hits }) => this.setState({ images: hits }))
        .catch(error => console.error('Error:', error))
    }

    render () {
        return(
            <Images images={this.state.images}/>
        )
    }
}

export default App;