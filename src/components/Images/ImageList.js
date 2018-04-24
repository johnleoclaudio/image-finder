import React, { Fragment } from 'react';
import ImageListItem from './ImageListItem';

const ImageList = ({ images }) => {
    const imageLists = images.map(({ id, webformatURL }) => {
        return <ImageListItem key={id} src={webformatURL}/>
    });
    return <Fragment>
        <div className="row">
            {imageLists}
        </div>
    </Fragment>
}

export default ImageList;