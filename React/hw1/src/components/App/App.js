import Button from "../Button";
import Modal from "../Modal";
import React from "react";

class App extends React.PureComponent {
  state = {
    firstModal: false,
    secondModal: false,
  };

  firstModalHandler = () => {
    this.setState((state) => {
      return {
        ...state,
        firstModal: !state.firstModal,
      };
    });
  };

  secondModalHandler = () => {
    this.setState((state) => {
      return {
        ...state,
        secondModal: !state.secondModal,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Button
          text="Open first modal"
          bgc="lightblue"
          onClick={this.firstModalHandler}
          className="btn first_btn"
        />
        <Button
          text="Open second modal"
          bgc="lightgreen"
          onClick={this.secondModalHandler}
          className="btn second_btn"
        />

        {this.state.firstModal && (
          <Modal
            text={
              "Once you delete this file, it won't be possible to undo thus action. " +
              " Are you sure you want to delete it?"
            }
            header="Do you want to delete this file?"
            closeButton={true}
            closeModalHandler={this.firstModalHandler}
            actions={[
              <Button
                key="1"
                bgc="#b3382c"
                text="Ok"
                onClick={this.firstModalHandler}
                className="modal__btn"
              />,
              <Button
                key="2"
                bgc="#b3382c"
                text="Cancel"
                onClick={this.firstModalHandler}
                className="modal__btn"
              />,
            ]}
          />
        )}
        {this.state.secondModal && (
          <Modal
            text={
              "Once you think about this, it won't be possible to undo thus action." +
              " Are you sure you want to be a Bill Gates?"
            }
            header="Do you want to have a lot of money?"
            closeButton={true}
            closeModalHandler={this.secondModalHandler}
            actions={[
              <Button
                key="1"
                bgc="#b3382c"
                text="YEAH!"
                onClick={this.secondModalHandler}
                className="modal__btn"
              />,
              <Button
                key="2"
                bgc="#b3382c"
                text="Sure!!"
                onClick={this.secondModalHandler}
                className="modal__btn"
              />,
            ]}
          />
        )}
      </div>
    );
  }
}

export default App;
