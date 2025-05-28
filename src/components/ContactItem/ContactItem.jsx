export default function ContactItem({store, onDelete}){
    
    return(
    <div>
        {store.map(contact => (
            <div style={{ border: '1px, solid', padding: '20px' }} key={contact.id}>
                <img src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt=""/>
                <div>
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <p>{contact.email} </p>
                    <p>{contact.phone} </p>
                    <p>{contact.status} </p>
                    <button onClick={() => onDelete(contact.id)}>Delete</button>
                </div>
            </div>
        ))}
    </div>
    )
}