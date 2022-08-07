import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css'

const ImageGallery = ({pictures, onClick, onImageClick}) => (
    <ul className={css.imageGallery}>
        {pictures.map(({id, webformatURL, largeImageURL}) =>
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onClick={onClick} onImageClick={onImageClick} />)}        
    </ul>
)

export default ImageGallery;

ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    onImageClick: PropTypes.func.isRequired,
    pictures:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired       
        })
    )
};