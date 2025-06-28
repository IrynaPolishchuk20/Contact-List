import { Modal, Button } from 'react-bootstrap'
import './DeleteModal.scss'

export default function DeleteModal({ show, onHide, onConfirm }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="confirm-delete-modal"
      centered
      dialogClassName="delete-modal"
    >
      <Modal.Header>
        <Modal.Title id="confirm-delete-modal">
          Delete confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this contact?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => {
          onConfirm();
          onHide();
        }}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
