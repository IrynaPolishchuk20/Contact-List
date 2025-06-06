import './ContactItem.scss'
import { Link } from 'react-router'
import { useState } from 'react'
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal'


export default function ContactItem({stor, onDelete}){
    const [modalShow, setModalShow] = useState(false)
    const [contactToDelete, setContactToDelete] = useState(null)

    const filteredContacts = stor.search
        ? stor.contacts.filter(contact =>
            `${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.status}`
            .toLowerCase()
            .includes(stor.search.toLowerCase())
        )
        : stor.contacts

    const handleDeleteClick = (contact) => {
        setContactToDelete(contact)
        setModalShow(true)
    }

    const handleConfirmDelete = () => {
        if (contactToDelete) {
        onDelete(contactToDelete.id)
        setContactToDelete(null)
        }
    }

    return(
    <div className='container containerBlock'>
        {filteredContacts.map(contact => (
            <div className='contackBlock' key={contact.id}>
                <img className="contactImg" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt=""/>
                    <div className="contactContent">
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.email} </p>
                        <p>{contact.phone} </p>
                        <p>{contact.status} </p>
                        <div className="btnGroup">
                            <Link to={`/edit-contct/${contact.id}`}><button className="contactBtn">Edit</button></Link>
                            <button className="contactBtn" onClick={() => handleDeleteClick(contact)}>Delete</button>
                        </div>
                    </div>
            </div>
        ))}

        <ConfirmDeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={handleConfirmDelete}
        />

    </div>
    )
}