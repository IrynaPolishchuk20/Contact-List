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
  const [stor, setStore] = useState(
    [
      {
        id: '3434ec03-aa58-4419-9ae4-b73a6742f6c0',
        firstName: 'Isdvgs',
        lastName: 'sdvfcxvk',
        phone: '09650254650',
        email: 'zfdhbzdf@gmail.com',
        avatar: '5',
        gender: 'women',
        status: 'others',
        favorite: true
      },
      {
        id: '3434ec03-aa58-4419-9ae4-b73a6742f6c8',
        firstName: 'zdhgdhg',
        lastName: 'zzdzdgb',
        phone: '09650254659',
        email: 'zdfcbx@gmail.com',
        avatar: '7',
        gender: 'men',
        status: 'family',
        favorite: true
      },
      {
        id: '3434ec03-aa58-4419-9ae4-b73a6742f6c3',
        firstName: 'zhbzdh',
        lastName: 'zefhbdxfv',
        phone: '09650254650',
        email: 'zhbhbk@gmail.com',
        avatar: '55',
        gender: 'women',
        status: 'work',
        favorite: true
      },
      {
        id: '3434ec03-aa58-4419-9ae4-b73a6742f6c2',
        firstName: 'zhbzdh',
        lastName: 'zefhbdxfv',
        phone: '09650254650',
        email: 'zhbhbk@gmail.com',
        avatar: '60',
        gender: 'men',
        status: 'others',
        favorite: true
      }
    ]
  )

  const handleNewContact = (newContact) => {
    setStore(prevStore => [...prevStore, newContact])
  }

  const deleteContact = (id) => {
    setStore(prevStore => prevStore.filter(contact => contact.id !== id))
  }

  const handleEditContact = (updateContact) => {
    setStore(prevStore => prevStore.map(contact => {
      if (contact.id === updateContact.id) {
        return {...contact, ...updateContact}
      }
      return contact
    }))
  }

  return (
     <>
      <BackgroundStars />
        <Router>
          <Header/>
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
