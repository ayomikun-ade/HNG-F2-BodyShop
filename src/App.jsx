// import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      {/* <ShopPage /> */}
    </>
  );
}

export default App;
