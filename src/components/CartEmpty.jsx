import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from '../assets/cartImg/empty-cart.jpg'

const CartEmpty = () => {
  return (
    <>
    <div class="cart cart--empty">
      <h2>
        Корзина пустая
      </h2>
      <p>
        Для того, чтобы сделать заказ, добавьте хотя-бы один товар.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
    </>
  );
};

export default CartEmpty;
