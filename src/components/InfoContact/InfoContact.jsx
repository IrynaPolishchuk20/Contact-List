import { Modal, Button } from 'react-bootstrap'
import './InfoContact.scss'

export default function InfoContact({ show, onHide, contact }) {
  if (!contact) return null;

  return (
    <Modal 
        show={show} 
        onHide={onHide} 
        size="md" 
        centered 
        dialogClassName="info-modal fade-in-modal"
    >
      <Modal.Header>
        <Modal.Title>Contact information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="contact-details">
          <img
            src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
            alt="avatar"
            className="contact-avatar"
          />
          <h4>{contact.firstName} {contact.lastName}</h4>
          <p><strong>Birthday:</strong> {contact.birthday}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          {contact.viber && <p><strong>Viber:</strong> {contact.viber}</p>}
          {contact.telegram && <p><strong>Telegram:</strong> {contact.telegram}</p>}
          <p><strong>Status:</strong> {contact.status}</p>
          <p><strong>Gender:</strong> {contact.gender}</p>
          <p><strong>Favorite:</strong> {contact.favorite ? 'Yes' : 'No'}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button  className='btn btn-outline-info btn-lg px-5' variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}