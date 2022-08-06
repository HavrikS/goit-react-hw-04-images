import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'
import Searchbar from 'components/Searchbar/Searchbar';
// import css from 'components/App.module.css'



class App extends Component {
  
  state = {
  searchName: '',
  showModal: false   
  }

  //   componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts})
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const {contacts} = this.state
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }
    formSubmitHendler = data => {  
    const { searchName } = data;
      
    this.setState({
        searchName: searchName
    });}    
  
  // handleChangeFilter = event => {
  //   const { name, value } = event.target;
  //   this.setState({      
  //     [name]: value
  //   });
  // }

  // formSubmitHendler = data => {  
  //   const { name, number } = data;
  //   if (this.state.contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is alreadi in contacts.`);
  //   } else
  //   {const newContacts = {
  //       id: nanoid(),
  //       name: name,
  //       number: number
  //   };    
  //   this.setState(prevState => ({
  //       contacts: [newContacts, ...prevState.contacts]
  //   }));}    
  // }

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  //   }))
  // }


  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact => contact.name.toLowerCase()
  //           .includes(normalizedFilter))
  // }
  
  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }



  render() {     

    const {showModal} = this.state

    return (
      <>
        <Searchbar onSubmit={this.formSubmitHendler} />
        <button type='bytton' onClick={this.togleModal}></button>
        {showModal && <Modal onClose={this.togleModal} />}
      </>
    );
  }
}
export default App;
