import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  onEscapePress = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.onBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
