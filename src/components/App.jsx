import { useState, useEffect } from 'react'
import Modal from 'components/Modal/Modal'
import fetchData from '../services/pictures-api'
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
  

    async function getPictures() {
    const responseData = await fetchData(searchName, pageNumber);
      setPictures([...pictures, ...responseData.data.hits]);
      setLoading(false)
  }


  useEffect(() => {    
    if (searchName === '') {
      return
    }
    getPictures();  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, searchName]);




  const onLoadMoreHendler = () => {
    let page = pageNumber
    setPageNumber(page += 1);
    setLoading(true)
  }

  const onImageHendler = (largeImageURL) => {    
    setLargeImage(largeImageURL);
  }

  const formSubmitHendler = (searchName) => { 
    setSearchName(searchName);
    setPictures([]);
    setPageNumber(1);
    setLoading(false);
  }    
  

  const togleModal = () => {
    setShowModal(!showModal)
  };


  
  return (
    <div className={css.container}>
      <Searchbar onSubmit = {formSubmitHendler} />
      {loading && <Loader/>}
      {(pictures.length > 0) && <ImageGallery pictures={pictures} onClick={togleModal} onImageClick={onImageHendler} />}
      {(pictures.length > 0) && <Button onClick={onLoadMoreHendler} />}
      {showModal && <Modal onClose= {togleModal} largeImage={largeImage} />}
    </div>
  );    
}

