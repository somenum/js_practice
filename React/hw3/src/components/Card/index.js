import Button from "../Button";
import React from "react";
import Modal from "../Modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDataFavorite } from "../../redux/actions";
import { removeDataFavorite } from "../../redux/actions";
import { addDataCart } from "../../redux/actions";
import { removeDataCart } from "../../redux/actions";
import { addConfirmModal } from "../../redux/actions";
import { removeConfirmModal } from "../../redux/actions";
import { addRegectModal } from "../../redux/actions";
import { removeRegectModal } from "../../redux/actions";

function Card({
  data = [],
  addButCart = "",
  delButCart = "",
  addEmptyrtStar = "",
  addFullStar = "",
}) {
  const [firstStar, setFstar] = useState(addEmptyrtStar);
  const [secondStar, setSstar] = useState(addFullStar);
  const [secondModal, setSmodal] = useState(false);
  const [firstModal, setFmodal] = useState(false);
  const [addButtonCart] = useState(addButCart);
  const [delButtonCart] = useState(delButCart);
  const dispatch = useDispatch();

  //функции для работы с корзиной

  //добавление в корзину

  const cart = useSelector((store) => {
    return store.cart;
  });

  console.log(cart);

  const cartHandlerAdd = (id, data) => {
    if (!cart.some((el) => el.id === id)) {
      const newCart = [...cart, data];
      dispatch(addDataCart(newCart));
    }
  };

  //удаление из корзины
  const cartHandlerRemove = (id, data) => {
    cart.forEach(function (el, i) {
      if (el.id === id) {
        cart.splice(i, 1);
        const newCart = [...cart];
        dispatch(removeDataCart(newCart));
      }
    });
  };

  //нажатие кнопки ок в красной модалке
  const ОкFirstModalHandler = (id, data) => {
    cartHandlerRemove(id, data);
    setFmodal(!firstModal);
    dispatch(removeRegectModal());
  };

  //функция закрытия модалок

  const ModalHandler = () => {
    setSmodal(false);
    setFmodal(false);
    dispatch(removeConfirmModal());
    dispatch(removeRegectModal());
  };

  // ========+================================================

  //функции для работы с избранным

  //добавление в  избранное

  const favorite = useSelector((store) => {
    return store.favorite;
  });

  const starHandlerAdd = (id, data) => {
    if (!favorite.some((el) => el.id === id)) {
      const newFavorit = [...favorite, data];

      setFstar(secondStar);
      setSstar(!secondStar);
      dispatch(addDataFavorite(newFavorit));
    }
  };

  //удаление из избранного

  const starHandlerRemove = (id, data) => {
    favorite.forEach(function (el, i) {
      if (el.id === id) {
        favorite.splice(i, 1);
        const newFavorit = [...favorite];
        dispatch(removeDataFavorite(newFavorit));
      }
      setFstar(secondStar);
      setSstar(!secondStar);
    });
  };

  const OkSecondModalHandler = (id, data) => {
    cartHandlerAdd(id, data);
    setSmodal(!secondModal);
    dispatch(removeConfirmModal());
  };

  return (
    //карточка товара
    <div className="card__container">
      <img src={data.url} alt="just text" className="card__img" />
      <div className="card__body">
        <h4 className="card__title">Product name and price</h4>
        <p className="card__text">
          {data.name} {data.price}
          {"per kg"}
        </p>
      </div>

      <div className="card__addCart">
        {firstStar && ( //прозрачная звезда
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
              starHandlerAdd(data.id, data);
            }}
            btnClName="card__star"
          ></Button>
        )}

        {secondStar && ( //зеленая звезда
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
              starHandlerRemove(data.id, data); //зеленая звезда
            }}
            btnClName="card__star"
          ></Button>
        )}

        {addButtonCart && (
          <Button
            text="ADD TO CART"
            bgc="darkgreen"
            onClick={() => {
              setSmodal(!secondModal); // добавление зеленого модального окна
              dispatch(addConfirmModal());
            }}
            btnClName="button card__button"
          />
        )}
        {delButtonCart && (
          <Button
            text="Delete from CART"
            bgc="red"
            onClick={() => {
              setFmodal(!firstModal); // добавление красного модального окна
              dispatch(addRegectModal());
            }}
            btnClName="button card__button"
          />
        )}
      </div>
      {/* ================ */}
      {firstModal && ( // красная модалка
        <Modal
          text="If you tap OK button, this item will be deleted from your Cart.  "
          header="Do you want to delete this item to your Cart?"
          modalBg="red"
          headerBg="crimson"
          actions={
            <div className="modal__buttons">
              <Button
                text="Ok"
                bgc="crimson"
                onClick={() => {
                  ОкFirstModalHandler(data.id, data); //обработка кнопка добавления в корзину//
                }}
                btnClName="button modal__button"
              />
            </div>
          }
          closeButton={true}
          closeModalHandler={ModalHandler} // закрытие модалки
        />
      )}

      {secondModal && ( // зеленая модалка
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
                  OkSecondModalHandler(data.id, data); //обработка кнопки ОК зеленой модалки
                }}
                btnClName="button modal__button"
              />
            </div>
          }
          closeButton={true}
          closeModalHandler={ModalHandler} //закрытие модалки
        />
      )}
    </div>
  );
}

export default Card;
