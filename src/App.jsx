import './App.scss'
import BackgroundStars from './components/BackgroundStars'

import {BrowserRouter as Router, Routes, Route} from 'react-router'

import ContactList from './pages/ContactList/ContactList'
import AddContact from './pages/AddContact/AddContact'
import EditContact from './pages/EditContact/EditContact'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header'

function App() {

  return (
     <>
      <BackgroundStars />
        <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList/>}/>
          <Route path='/add-contact' element={<AddContact/>}/>
          <Route path='/edit-contact' element={<EditContact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>

    
  )
}

export default App
