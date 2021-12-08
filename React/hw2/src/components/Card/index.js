import Button from "../Button";
import React from "react";
import Modal from "../Modal";

class Card extends React.PureComponent {
  state = {
    firstStar: true,
    secondStar: false,
    secondModal: false,
  };

  cartHandler = (id, article) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!cart.some((el) => el.id === id)) {
      cart.push(article);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  addModalHandler = (name, article) => {
    this.cartHandler(name, article);
    this.setState((state) => {
      return {
        ...state,
        secondModal: !state.secondModal,
      };
    });
  };

  ModalHandler = () => {
    this.setState((state) => {
      return {
        ...state,
        secondModal: !state.secondModal,
      };
    });
  };

  starHandlerAdd = (id, article) => {
    const favorite = JSON.parse(localStorage.getItem("favorite") || "[]");
    if (!favorite.some((el) => el.id === id)) {
      favorite.push(article);
      localStorage.setItem("favorite", JSON.stringify(favorite));
      this.setState((state) => {
        return {
          ...state,
          firstStar: state.secondStar,
          secondStar: !state.secondStar,
        };
      });
    }
  };

  starHandlerRemove = (name, article) => {
    localStorage.removeItem(name, article);
    this.setState((state) => {
      return {
        ...state,
        firstStar: state.secondStar,
        secondStar: !state.secondStar,
      };
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="card__container">
        <img src={data.url} alt="just text" className="card__img" />
        <div className="card__body">
          <h4 className="card__title">Product name and price</h4>
          <p className="card__text">
            {data.name} {data.price}
            {"kg "}
          </p>
        </div>

        <div className="card__addCart">
          {this.state.firstStar && (
            <Button
              text={
                <svg
                  className="card__svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>star</title>
                  <path
                    d="M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z"
                    fill="#0000"
                    stroke="black"
                  ></path>
                </svg>
              }
              bgc=""
              onClick={() => {
                this.starHandlerAdd(data.id, data);
              }}
              btnClName="card__star"
            ></Button>
          )}

          {this.state.secondStar && (
            <Button
              text={
                <svg
                  className="card__svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>star</title>
                  <path
                    d="M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z"
                    fill="darkgreen"
                    stroke="black"
                  ></path>
                </svg>
              }
              bgc=""
              onClick={() => {
                this.starHandlerRemove(data.id, data);
              }}
              btnClName="card__star"
            ></Button>
          )}

          <Button
            text="ADD TO CART"
            bgc="darkgreen"
            onClick={() => {
              this.setState((state) => {
                return {
                  ...state,
                  secondModal: !state.secondModal,
                };
              });
            }}
            btnClName="button card__button"
          />
        </div>
        {this.state.secondModal && (
          <Modal
            text="If you tap OK button, this item will be added to your Cart.  "
            header="Do you want to add this item to your Cart?"
            modalBg="green"
            headerBg="darkgreen"
            actions={
              <div className="modal__buttons">
                <Button
                  text="Ok"
                  bgc="darkgreen"
                  onClick={() => {
                    this.addModalHandler(data.id, data);
                  }}
                  btnClName="button modal__button"
                />
              </div>
            }
            closeButton={true}
            closeModalHandler={this.ModalHandler}
          />
        )}
      </div>
    );
  }
}

Card.defaultProps = {
  data: [],
  addItem: () => {},
};

export default Card;
