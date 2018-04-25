import React, { Fragment } from 'react';
import ImageListItem from './ImageListItem';
import './ImageList.css'

const ImageList = ({ images }) => {
    const imageLists = images.map(({ id, webformatURL }) => {
        return <ImageListItem key={id} src={webformatURL}/>
    });
    return <Fragment>
        <ul className="IF-results">
            {imageLists}
        </ul>
    </Fragment>
}

export default ImageList;