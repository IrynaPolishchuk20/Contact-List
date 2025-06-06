import { Modal, Button } from 'react-bootstrap'
import './ConfirmDeleteModal.scss'

export default function ConfirmDeleteModal({ show, onHide, onConfirm }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="confirm-delete-modal"
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
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
