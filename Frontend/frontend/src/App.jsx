import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import CreateProduct from "./pages/CreateProduct";
import Shop from "./pages/Shop";
import Wishlist from "./pages/WishList";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
         
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/create-product" element={<CreateProduct />} />
        
        <Route path="/wishlist" element={<WishList />} />

        <Route path="/notifications" element={<Notifications />} />

      </Routes>
    </>
  );
}

export default App;