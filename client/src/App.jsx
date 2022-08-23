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

function App() {
  const [phones, setPhones] = useState([]);
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
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home phones={phones} />} />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
