import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullLoft from "./pages/FullLoft";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/loft/:id" element={<FullLoft />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
