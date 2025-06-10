import './ContactItem.scss'
import { Link } from 'react-router'
import { useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import InfoContact from '../InfoContact/InfoContact'

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/actions'


export default function ContactItem(){
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()
    
    const [modalShow, setModalShow] = useState(false)
    const [contactToDelete, setContactToDelete] = useState(null)
    const [selectedContact, setSelectedContact] = useState(null)

    const search = false

    const filteredContacts = search
        ? contacts.filter(contact =>
            `${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.status}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        : contacts

    const handleDeleteClick = (contact) => {
        setContactToDelete(contact)
        setModalShow(true)
    }

    const handleConfirmDelete = () => {
        if (contactToDelete) {
        dispatch(deleteContact(contactToDelete.id))
        setContactToDelete(null)
        setModalShow(false)
        }
    }
    const handleShowInfo = (contact) => {
        setSelectedContact(contact)
    }

    return(
    <div className='container containerBlock'>
        {filteredContacts.map(contact => (
            <div className='contackBlock' key={contact.id} onClick={() => handleShowInfo(contact)}>
                <img className="contactImg" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt=""/>
                    <div className="contactContent">
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.email} </p>
                        <p>{contact.phone} </p>
                        <p>{contact.status} </p>
                        <div className="btnGroup">
                            <Link to={`/edit-contact/${contact.id}` }><button className="contactBtn" >Edit</button></Link>
                            <button className="contactBtn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteClick(contact);
                                }}>Delete
                            </button>
                        </div>
                    </div>
            </div>
        ))}

        <DeleteModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onConfirm={handleConfirmDelete}
        />

        <InfoContact
            show={!!selectedContact}
            onHide={() => setSelectedContact(null)}
            contact={selectedContact}
        />

    </div>
    )
}