import React, { Component } from 'react'
import axios from "axios";
import Modal from 'components/Modal/Modal'
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Button from 'components/Button/Button'

import css from 'components/App.module.css'



class App extends Component {
  
  state = {
  pictures: [],
  searchName: '',
  pageNumber: 1,
  showModal: false   
  }

  async componentDidUpdate(prevProps, prevState) {    
    const { searchName, pageNumber} = this.state
    if (searchName !== prevState.searchName || pageNumber !== prevState.pageNumber) {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=${pageNumber}&key=28062260-bbfec586ef8cfde1ee2834ccc&image_type=photo&orientation=horizontal&per_page=12`);
      
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.data.hits]
    }))
      }
  }

  onLoadMoreHendler = () => {
    let page = this.state.pageNumber
    this.setState({
      pageNumber: page += 1
    });
  }

    formSubmitHendler = data => {  
    const { searchName } = data;      
      this.setState({
      pictures: [],
      searchName: searchName,
      pageNumber: 1,
    });}    
  
   
  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }



  render() {     

    const { showModal, pictures, } = this.state
    
    
    
    return (
      <div className={css.Container}>
        <Searchbar onSubmit={this.formSubmitHendler} />;
        {(pictures.length > 0) && <ImageGallery pictures={pictures} onClick={this.togleModal} />};
        {(pictures.length > 0) && <Button onClick={this.onLoadMoreHendler} />}
        {showModal && <Modal onClose={this.togleModal} />}
      </div>
    );    
  }
}

export default App;
