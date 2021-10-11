import styles from "../Modal/Modal.module.css";
import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modal = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEsc);
  }

  onEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={this.onBackdrop}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modal
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
