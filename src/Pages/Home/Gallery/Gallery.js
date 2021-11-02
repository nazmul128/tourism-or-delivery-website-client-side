import React, { useEffect, useState } from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import './Gallery.css'

const Gallery = () => {
    const [Gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('/gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div id='gallery'>
            <h1 className='my-5 text-primary'>Gallery</h1>
            <div className='gallery-container'>
                {
                    Gallery.map(photoGallery => <PhotoGallery
                        key={photoGallery.key}
                        photoGallery={photoGallery}
                    ></PhotoGallery>)
                }
            </div>
        </div>
    );
};

export default Gallery;