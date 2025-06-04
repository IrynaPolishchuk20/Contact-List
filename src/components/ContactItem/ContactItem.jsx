import './ContactItem.scss'

export default function ContactItem({stor, onDelete, editContact}){
    
    return(
    <div className='container containerBlock'>
        {stor.map(contact => (
            <div className='contackBlock' key={contact.id}>
                <img className="contactImg" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt=""/>
                    <div className="contactContent">
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.email} </p>
                        <p>{contact.phone} </p>
                        <p>{contact.status} </p>
                        <div className="btnGroup">
                            <button className="contactBtn" onClick={() => editContact(contact.id)}>Edit</button>

                            {/* <Link to={`/edit-contct/${contact.id}`}><button className="contactBtn">Edit</button></Link> */}
                            <button className="contactBtn" onClick={() => onDelete(contact.id)}>Delete</button>
                        </div>
                    </div>
            </div>
        ))}
    </div>
    )
}