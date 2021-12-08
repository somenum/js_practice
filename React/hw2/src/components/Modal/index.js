import React from "react";
import PropTypes from "prop-types";

class Modal extends React.PureComponent {
  render() {
    const {
      header,
      closeButton,
      modalBg,
      headerBg,
      text,
      actions,
      closeModalHandler,
    } = this.props;

    return (
      <div
        className="modal-container"
        onClick={(e) => {
          e.target === e.currentTarget && closeModalHandler();
        }}
      >
        <div
          className="modal"
          style={{
            backgroundColor: modalBg,
          }}
        >
          <div
            className="modal__header"
            style={{
              backgroundColor: headerBg,
            }}
          >
            <h4 className="modal__title">{header}</h4>
            {closeButton && (
              <button
                className="modal__closeButton"
                onClick={() => {
                  closeModalHandler();
                }}
              >
                X
              </button>
            )}
          </div>
          <p className="modal__text">{text}</p>
          {actions}
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  header: "No header",
  closeButton: false,
  modalBg: "black",
  headerBg: "black",
  text: "No text",
  actions: "No actions",
  closeModalHandler: () => {},
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
};
export default Modal;
