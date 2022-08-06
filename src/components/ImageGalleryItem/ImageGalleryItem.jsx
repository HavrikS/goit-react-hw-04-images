import React from 'react'
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'


const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick}) => {
    
    return (<li className={css.ImageGalleryItem} >
        <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} onClick={onClick} />
        </li>)
};

export default ImageGalleryItem;


ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,    
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,  
}
