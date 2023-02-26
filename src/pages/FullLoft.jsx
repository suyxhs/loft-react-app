import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullLoft = () => {
  const [loft, setLoft] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchLoft() {
      try {
        const { data } = await axios.get(
          `https://63d83131baa0f79e09a56b4b.mockapi.io/items/` + id
        );
        setLoft(data);
      } catch (error) {
        alert('Ошибка при получении данных предмета!');
      }
    }
  }, []);

  return (
    <div className="container">
      <img src="" alt="" />
      <h2>Hello, World</h2>
      <p>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
      <h4>price</h4>
    </div>
  );
};

export default FullLoft;
