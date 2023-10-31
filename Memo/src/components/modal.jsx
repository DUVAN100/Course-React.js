import { Modal, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import '../App.css'

// eslint-disable-next-line react/prop-types
function CustomModal({ show, onClose, title, children }) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CustomModal;
