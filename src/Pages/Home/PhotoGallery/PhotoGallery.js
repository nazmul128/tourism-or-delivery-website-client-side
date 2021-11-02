import React from 'react';
import './PhotoGallery.css'
const PhotoGallery = (props) => {
    // console.log(props.photoGallery);
    const { img } = props.photoGallery;
    return (
        <div className='photo-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default PhotoGallery;