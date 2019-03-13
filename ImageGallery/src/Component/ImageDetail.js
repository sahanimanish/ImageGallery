import React from 'react';
import { Modal } from 'react-bootstrap';

class ImageDetail extends React.Component {
  render() {
    if (!this.props.Image) {
      return null;
    }
    return (
      <>
        <Modal
          show={this.props.show}
          size="lg"
          onHide={this.props.handleHide}
          dialogClassName="modal-90w"
          centered
        >
          <Modal.Body>
            <img
              src={this.props.Image.current.currentSrc}
              alt={this.props.Image.current.alt}
              className="model"
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ImageDetail;
