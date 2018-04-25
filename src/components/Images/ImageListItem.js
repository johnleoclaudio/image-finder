import React from 'react';

const ImageListItem = ({ src }) => {
    return (
        <li><img src={src} alt="" className="img-fluid"/></li>
    )
}

export default ImageListItem;