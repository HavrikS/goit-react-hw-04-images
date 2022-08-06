import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css'

const ImageGallery = ({pictures, onClick}) => (
    <ul className={css.ImageGallery}>
        {pictures.map(({id, webformatURL, largeImageURL}) =>
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onClick={onClick} />)}        
    </ul>
)

export default ImageGallery;

ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    pictures:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired       
        })
    )
};