import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Sort from "./components/Sort";
import LoftBlock from "./components/LoftBlock";

import itemLoft from "./assets/itemLoft.json";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Вся мебель</h2>
          <div className="content__items">
            {itemLoft.map((obj) => (
              <LoftBlock
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
