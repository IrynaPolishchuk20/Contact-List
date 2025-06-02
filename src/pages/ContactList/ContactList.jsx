import Sidebar from '../../components/Sidebar/Sidebar'
import ContactItem from '../../components/ContactItem/ContactItem'

import { useNavigate} from  'react-router'


import './ContactList.scss'


export default function ContactList({stor, onDelete}){
    const navigate = useNavigate()
    const editContact = (id) => {
        navigate(`/edit-contact/${id}`)
    }
    return(
        <div className='contactList'>
             <div className="row">
                <div className="col-3">
                    <Sidebar stor={stor}/>
                </div>
                <div className="col-9">
                    <ContactItem stor ={stor} onDelete={onDelete} editContact={editContact}/>
                </div>
             </div>
        </div>
       
    )
}