import React from 'react'
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'


const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick, onImageClick}) => {
    
    return (<li className={css.imageGalleryItem} onClick={onClick}>
        <img src={webformatURL} alt="" className={css.imageGalleryItemImage} onClick={() => onImageClick(largeImageURL)} />
        </li>)
};

export default ImageGalleryItem;


ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    onImageClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,  
}
