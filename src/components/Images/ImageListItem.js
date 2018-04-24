import React from 'react';

const ImageListItem = ({ src }) => {
    return (
        <div>
            <img src={src} alt="" className="img-fluid"/>
        </div>
    )
}

export default ImageListItem;