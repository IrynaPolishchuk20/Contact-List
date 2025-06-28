import './ContactItem.scss'
import { Link } from 'react-router'
import { useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import InfoContact from '../InfoContact/InfoContact'
import ShareModal from '../ShareModal/ShareModal'

import { useSelector, useDispatch } from "react-redux";
import { deleteContact, toggleFavorite } from '../../redux/actions'

import phoneCall from './img/phoneCall.png'
import share from './img/share.png'



export default function ContactItem(){
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()
    
    const search = useSelector(state => state.search)
    const filterStatus = useSelector(state => state.contactStatus)

    
    const [modalShow, setModalShow] = useState(false)
    const [contactToDelete, setContactToDelete] = useState(null)
    const [selectedContact, setSelectedContact] = useState(null)

    const filteredContacts = contacts.filter(contact => {
      const matchesSearch = search ? (`${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.gender} ${contact.status}`).includes(search) : true;
      const matchesStatus = filterStatus && filterStatus !== 'all' ? contact.status === filterStatus : true;
      return matchesSearch && matchesStatus;
    })

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

    const [shareContact, setShareContact] = useState(null)

    return(
    <div className='container containerBlock'>
        {filteredContacts.map(contact => (
            <div className='contackBlock' key={contact.id} onClick={() => handleShowInfo(contact)}>
                <div  className='position-relative'>
                    <img className="contactImg" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt=""/>
                    <button className='favoriteBtn' onClick={(e) => {
                            e.stopPropagation();
                            dispatch(toggleFavorite(contact.id))
                        }}
                        >
                        {contact.favorite ? '♥' : '♡'  }
                    </button>
                </div>
                    <div className="contactContent">
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.birthday}</p>
                        <p>{contact.email} </p>
                        <p>{contact.phone} </p>
                        {contact.viber && <p><strong>Viber:</strong> {contact.viber}</p>}
                        {contact.telegram && <p><strong>Telegram:</strong> {contact.telegram}</p>}
                        <p>{contact.status} </p>
                        <div className='callShare'>
                            <a href={`tel:${contact.phone}`} 
                                onClick={(e) => e.stopPropagation()}>
                                <img className='phoneCall' src={phoneCall} alt="phoneCall" />
                            </a>
                            <p onClick={(e) => {
                                e.stopPropagation()
                                setShareContact(contact)
                            }}> 
                                <img className='share' src={share} alt="share" /> 
                            </p>
                        </div>
                        
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

        <ShareModal
            show={!!shareContact}
            onHide={() => setShareContact(null)}
            contact={shareContact}
        />

    </div>
    )
}