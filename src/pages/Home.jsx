import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import LoftBlock from "../components/LoftBlock";
import Skeleton from "../components/LoftBlock/Skeleton";
import Banner from "../components/Banner";

const Home = () => {
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
    <>
      <Banner />
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
    </>
  );
};

export default Home;
