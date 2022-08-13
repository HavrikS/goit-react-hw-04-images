import  { useEffect } from 'react'
// import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css'


const Modal = ({largeImage, onClose}) => {    

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    }
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') { onClose() }};
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, []);

    return (      
    <div className={css.overlay} onClick={handleBackdropClick}>
            <div >
            <img className={css.modal} src={largeImage} alt="" />    
        </div>
    </div>
    );
}


export default Modal;