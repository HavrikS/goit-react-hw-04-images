import React, { Component } from 'react'
import css from 'components/Modal/Modal.module.css'


class Modal extends Component {
  
    componentDidMount() {
            window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = event => {
    if (event.code === 'Escape') {   
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }



    render() {     

        

        return (      
        <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                {/* <img src="" alt="" />     */}
            </div>
        </div>
        );
    }
}

export default Modal;