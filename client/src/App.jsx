import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import "./css/App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { getPhoneList } from "./api/api";
import { useEffect } from "react";
import Order from "./pages/Order";

function App() {
  const [phones, setPhones] = useState([]);
  const [active, setActive] = useState("모바일 기기");

  const fetchPhones = async () => {
    const { data } = await getPhoneList();
    setPhones(data);
  };

  useEffect(() => {
    fetchPhones();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header setActive={setActive} />
        <NavBar active={active} setActive={setActive} />
        <Routes>
          <Route path="/" exact element={<Home phones={phones} />} />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/order" exact element={<Order/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
