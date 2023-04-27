import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import AccountPage from "./Pages/AccountPage";
import { ProductProvider } from "./Components/ProductContext";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
