import './App.scss'
import BackgroundStars from './components/BackgroundStars/BackgroundStars'

import {BrowserRouter as Router, Routes, Route} from 'react-router'
import { useState } from 'react'

import ContactList from './pages/ContactList/ContactList'
import AddContact from './pages/AddContact/AddContact'
import EditContact from './pages/EditContact/EditContact'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header'

function App() {
  const [stor, setStore] = useState({
    contacts: [
        {
          id: "1a2b3c4d-0001-4a2f-89d3-bb11a111a111",
          firstName: "Anna",
          lastName: "Ivanova",
          phone: "+380631234567",
          email: "anna.ivanova@gmail.com",
          avatar: 11,
          gender: "women",
          status: "family",
          favorite: false
        },
        {
          id: "1a2b3c4d-0002-4a2f-89d3-bb11a111a112",
          firstName: "Oleh",
          lastName: "Shevchenko",
          phone: "+380991112233",
          email: "oleh.shevchenko@gmail.com",
          avatar: 2,
          gender: "men",
          status: "work",
          favorite: true
        },
        {
          id: "1a2b3c4d-0003-4a2f-89d3-bb11a111a113",
          firstName: "Maria",
          lastName: "Koval",
          phone: "+380671234567",
          email: "maria.koval@yahoo.com",
          avatar: 53,
          gender: "women",
          status: "friends",
          favorite: false
        },
        {
          id: "1a2b3c4d-0004-4a2f-89d3-bb11a111a114",
          firstName: "Dmytro",
          lastName: "Bondarenko",
          phone: "+380503334455",
          email: "dmytro.bondarenko@ukr.net",
          avatar: 34,
          gender: "men",
          status: "family",
          favorite: true
        },
        {
          id: "1a2b3c4d-0005-4a2f-89d3-bb11a111a115",
          firstName: "Olha",
          lastName: "Petrenko",
          phone: "+380932223344",
          email: "olha.petrenko@gmail.com",
          avatar: 45,
          gender: "women",
          status: "work",
          favorite: false
        },
        {
          id: "1a2b3c4d-0006-4a2f-89d3-bb11a111a116",
          firstName: "Serhii",
          lastName: "Tkachenko",
          phone: "+380662224455",
          email: "serhii.tkachenko@hotmail.com",
          avatar: 6,
          gender: "men",
          status: "friends",
          favorite: false
        },
        {
          id: "1a2b3c4d-0007-4a2f-89d3-bb11a111a117",
          firstName: "Natalia",
          lastName: "Melnyk",
          phone: "+380981112244",
          email: "natalia.melnyk@gmail.com",
          avatar: 87,
          gender: "women",
          status: "family",
          favorite: true
        },
        {
          id: "1a2b3c4d-0008-4a2f-89d3-bb11a111a118",
          firstName: "Andrii",
          lastName: "Zhuk",
          phone: "+380501234789",
          email: "andrii.zhuk@meta.ua",
          avatar: 8,
          gender: "men",
          status: "private",
          favorite: false
        },
        {
          id: "1a2b3c4d-0009-4a2f-89d3-bb11a111a119",
          firstName: "Tetiana",
          lastName: "Hrytsenko",
          phone: "+380672226677",
          email: "tetiana.hrytsenko@gmail.com",
          avatar: 19,
          gender: "women",
          status: "friends",
          favorite: false
        },
        {
          id: "1a2b3c4d-0010-4a2f-89d3-bb11a111a120",
          firstName: "Ivan",
          lastName: "Krutyi",
          phone: "+380991117788",
          email: "ivan.krutyi@gmail.com",
          avatar: 10,
          gender: "men",
          status: "others",
          favorite: true
        }
    ],
    search: '',
  })

  const searchBySymbols =(symbol) => {
    setStore(prevStore =>{return {...prevStore, search: symbol}})
  }

  const handleNewContact = (newContact) => {
    setStore(prevStore => {return {...prevStore, contacts: [...prevStore.contacts, newContact]}})
  }

  const deleteContact = (id) => {
    const contacts = stor.contacts.filter(contact => contact.id !== id)
    setStore(prevStore => {return {...prevStore, contacts}})
  }

  const handleEditContact = (updateContact) => {
    const contacts = stor.contacts.map(contact => {
      if (contact.id === updateContact.id) {
        return {...contact, ...updateContact}
      }
      return contact
    })
    setStore(prevStore => {return {...prevStore, contacts}})
  }

  return (
     <>
      <BackgroundStars />
        <Router>
          <Header searchBySymbols={searchBySymbols}/>
            <Routes>
              <Route path='/' element={<ContactList stor={stor} onDelete={deleteContact}/>}/>
              <Route path='/add-contact' element={<AddContact addNewContact={handleNewContact} />}/>
              <Route path='/edit-contact/:id' element={<EditContact editContact={handleEditContact} stor={stor}/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
