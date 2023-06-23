import "./App.css";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cartpage from "./pages/Cartpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Home />}></Route>
            <Route path="/allproducts" element={<ProductList />}></Route>
            {/* <Route path="/cart" element={<Cartpage />}></Route> */}
            <Route
              path="/ProductDetail/:id/"
              element={<ProductDetail />}
            ></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
