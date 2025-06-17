import './App.scss'
import BackgroundStars from './components/BackgroundStars/BackgroundStars'

import {BrowserRouter as Router, Routes, Route} from 'react-router'
import {Provider} from "react-redux"
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import ContactList from './pages/ContactList/ContactList'
import AddContact from './pages/AddContact/AddContact'
import EditContact from './pages/EditContact/EditContact'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header'
import ContactStatuss from './pages/ContactStatuss/ContactStatuss'
import AddStatus from './components/AddStatus/AddStatus'
import EditStatus from './components/EditStatus/EditStatus'

function App() {
  return (
    <>
      <BackgroundStars />
        <Provider store ={store}>
            <Router>
                <Header/>
                    <Routes>
                      <Route path='/' element={<ContactList />}/>
                      <Route path='/contact-statuss' element={<ContactStatuss />}/>
                      <Route path='/contact-statuss/add-status' element={<AddStatus />} />
                      <Route path='/contact-statuss/edit-status/:status' element={<EditStatus />} />
                      <Route path='/add-contact' element={<AddContact/>}/>
                      <Route path='/edit-contact/:id' element={<EditContact/>}/>
                      <Route path='*' element={<NotFound/>}/>
                    </Routes>
            </Router>
        </Provider>
    </>
  )
}

export default App
