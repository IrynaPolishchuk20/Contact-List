import Sidebar from '../../components/Sidebar/Sidebar'
import ContactItem from '../../components/ContactItem/ContactItem'

import './ContactList.scss'


export default function ContactList({store, onDelete}){

    return(
        <div className='contactList'>
             <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <ContactItem store ={store} onDelete={onDelete}/>
                </div>
             </div>
        </div>
       
    )
}