import { useState, useEffect } from 'react'
import axios from "axios";
import Modal from 'components/Modal/Modal'
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Button from 'components/Button/Button'
import Loader from 'components/Loader/Loader'
import css from 'components/App.module.css'



export default function App() {
  
  const [pictures, setPictures] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [searchName, setSearchName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);  
  

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=${pageNumber}&key=28062260-bbfec586ef8cfde1ee2834ccc&image_type=photo&orientation=horizontal&per_page=12`);      
      setPictures([...pictures, ...response.data.hits]);
      setLoading(false)
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {    
    if (searchName === '') {
      return
    }
      fetchData()
  }, [pageNumber, searchName]);




  const onLoadMoreHendler = () => {
    let page = pageNumber
    setPageNumber(page += 1);
    setLoading(true)
  }

  const onImageHendler = (largeImageURL) => {    
    setLargeImage(largeImageURL);
  }

  const formSubmitHendler = ({ searchName }) => { 
    setSearchName(searchName);
    setPictures([]);
    setPageNumber(1);
    setLoading(false);
  }    
  

  const togleModal = () => {
    setShowModal( !showModal )
  }


  
  return (
    <div className={css.container}>
      <Searchbar onSubmit={formSubmitHendler} />
      {loading && <Loader/>}
      {(pictures.length > 0) && <ImageGallery pictures={pictures} onClick={togleModal} onImageClick={onImageHendler} />}
      {(pictures.length > 0) && <Button onClick={onLoadMoreHendler} />}
      {showModal && <Modal onClose={togleModal} largeImage={largeImage} />}
    </div>
  );    
}

