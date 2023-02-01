import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Sort from "./components/Sort";
import LoftBlock from "./components/LoftBlock";
import Footer from "./components/Footer";
import Skeleton from "./components/LoftBlock/Skeleton";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63d83131baa0f79e09a56b4b.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

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
            {isLoading
              ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => (
                  <LoftBlock
                    key={obj.id}
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    sizes={obj.sizes}
                  />
                ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
