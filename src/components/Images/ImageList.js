import React, { Fragment } from 'react';
import ImageListItem from './ImageListItem';

const ImageList = ({ images }) => {
    const imageLists = images.map(({ id, previewURL }) => {
        return <ImageListItem key={id} src={previewURL}/>
    });
    return <Fragment>
        <ul>
            {imageLists}
        </ul>
    </Fragment>
}

export default ImageList;