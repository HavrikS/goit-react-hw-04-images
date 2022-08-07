import React, { Component } from 'react'
import axios from "axios";
import Modal from 'components/Modal/Modal'
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Button from 'components/Button/Button'
import Loader from 'components/Loader/Loader'
import css from 'components/App.module.css'



class App extends Component {
  
  state = {
    pictures: [],
    largeImage: '',
    searchName: '',
    pageNumber: 1,
    showModal: false,
    loading: false    
  }


  async componentDidUpdate(prevProps, prevState) {    
    const { searchName, pageNumber} = this.state
    if (searchName !== prevState.searchName || pageNumber !== prevState.pageNumber) {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=${pageNumber}&key=28062260-bbfec586ef8cfde1ee2834ccc&image_type=photo&orientation=horizontal&per_page=12`);      
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.data.hits],
        loading: false,
    }))
      }
  }

  onLoadMoreHendler = () => {
    let page = this.state.pageNumber
    this.setState({
      pageNumber: page += 1,
      loading: true,
    });
  }

  onImageHendler = (largeImageURL) => {    
    this.setState({
      largeImage: largeImageURL,
    });
  }

    formSubmitHendler = data => {  
    const { searchName } = data;      
      this.setState({
      pictures: [],
      searchName: searchName,
      pageNumber: 1,
      loading: true,
    });}    
  

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }



  render() {     

    const { showModal, pictures, largeImage, loading} = this.state
    
    
    
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.formSubmitHendler} />;
        {loading && <Loader/>}
        {(pictures.length > 0) && <ImageGallery pictures={pictures} onClick={this.togleModal} onImageClick={this.onImageHendler} />};
        {(pictures.length > 0) && <Button onClick={this.onLoadMoreHendler} />}
        {showModal && <Modal onClose={this.togleModal} largeImage={largeImage} />}
      </div>
    );    
  }
}

export default App;
