import React from "react";

import Styles from "./NotFoundBlock.module.scss";

const NotFoundBLock = () => {
  return (
    <div className={Styles.root}>
      <h1>
        <img src="../img/smile/NotFound.png" alt="smile" />
        <br />
        Ничего не найдено
      </h1>
      <p className={Styles.description}>К сожалению данная страница не готова к использованию</p>
    </div>
  );
};

export default NotFoundBLock;
