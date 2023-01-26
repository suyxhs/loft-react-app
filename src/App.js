import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Sort from "./components/Sort";
import LoftBlock from "./components/LoftBlock";

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
            <LoftBlock title="Складной стол Loft" price={1000}/>
            <LoftBlock title="Светильник Loft" price={10000}/>
            <LoftBlock title="Шкаф Купе Loft" price={500}/>
            <LoftBlock title="Светильник Loft" price={10000}/>
            <LoftBlock title="Шкаф Купе Loft" price={500}/>
            <LoftBlock title="Светильник Loft" price={10000}/>
            <LoftBlock title="Шкаф Купе Loft" price={500}/>
            <LoftBlock title="Светильник Loft" price={10000}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
