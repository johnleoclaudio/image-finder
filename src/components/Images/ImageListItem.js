import React from 'react';

const ImageListItem = ({ src }) => {
    return (
        <li><img src={src} alt="" className="IF-images"/></li>
    )
}

export default ImageListItem;