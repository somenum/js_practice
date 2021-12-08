import React from "react";

class Modal extends React.PureComponent {
  render() {
    const {
      header,
      closeButton,
      text,
      actions,
      closeModalHandler,
      children,
    } = this.props;

    return (
      <div
        className="modal-container"
        onClick={(e) => {
          e.target === e.currentTarget && closeModalHandler();
        }}
      >
        <div className="modal">
          <div className="modal__header-content">
            <span
              className="modal__close"
              onClick={() => {
                closeModalHandler();
              }}
              style={closeButton ? {} : { display: "none" }}
            ></span>
            <h4 className="modal__content modal__header">{header}</h4>
          </div>
          <p className="modal__content modal__text">{text}</p>
          <div className="modal__content modal__section-btn">{actions}</div>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
