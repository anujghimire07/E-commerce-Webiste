import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ContextProvider from "./Components/Context";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;