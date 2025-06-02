import './ContactItem.scss'

export default function ContactItem({store, onDelete, editContact}){
    
    return(
    <div className='containerBlock'>
        {store.map(contact => (
            <div className='contackBlock' key={contact.id}>
                <img className="contactImg" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt=""/>
                    <div className="contactContent">
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.email} </p>
                        <p>{contact.phone} </p>
                        <p>{contact.status} </p>
                        <div className="btnGroup">
                            <button className="contactBtn" onClick={() => onDelete(contact.id)}>Delete</button>
                            <button className="contactBtn" onClick={() => editContact(contact.id)}>Edit</button>
                        </div>
                    </div>
            </div>
        ))}
    </div>
    )
}