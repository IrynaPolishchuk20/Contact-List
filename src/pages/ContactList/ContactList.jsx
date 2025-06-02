import Sidebar from '../../components/Sidebar/Sidebar'
import ContactItem from '../../components/ContactItem/ContactItem'

import { useNavigate} from  'react-router'


import './ContactList.scss'


export default function ContactList({store, onDelete}){
    const navigate = useNavigate()
    const editContact = (id) => {
        navigate(`/edit-contact/${id}`)
    }
    return(
        <div className='contactList'>
             <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <ContactItem store ={store} onDelete={onDelete} editContact={editContact}/>
                </div>
             </div>
        </div>
       
    )
}