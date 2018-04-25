import React from 'react';
import ImageListItem from './ImageListItem';


const ImageList = ({ images }) => {
    const imageLists = images.map(({ id, webformatURL }) => {
        return <ImageListItem key={id} src={webformatURL}/>
    });
    return (
            <ul className="IF-results">
                {imageLists}
            </ul>
    )
}

export default ImageList;