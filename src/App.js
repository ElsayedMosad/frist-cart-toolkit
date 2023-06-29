import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
// import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
