/* eslint-disable react-hooks/exhaustive-deps */
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
import { useCookies } from "react-cookie";
<<<<<<< HEAD
import ComparedPopup from "./components/ComparedPopup";
=======
import Order from "./pages/Order";
>>>>>>> b90d209c02ce20f88fb6c0ec4e532cccc3b77b74

function App() {
  const [phones, setPhones] = useState([]);
  const [active, setActive] = useState("모바일 기기");
  const [cookies, setCookie, removeCookie] = useCookies();
  const [cart, setCart] = useState({ count: 0, data: [] });

  const fetchPhones = async () => {
    const { data } = await getPhoneList();
    setPhones(data);
  };

  // 장바구니 데이터 쿠키에서 가져오기
  const getCartDatas = () => {
    // 쿠키에 데이터가 있을 시 가져오기
    if (cookies.cart) {
      setCart(cookies.cart);
    } else {
      // 데이터가 없을 경우 빈 배열로 장바구니 생성
      setCookie("cart", cart);
    }
  };

  // 장바구니에 저장하기
  const saveCart = (object) => {
    // 장바구니에 저장할 데이터
    // color, phone, plan의 id, 할인 정보(공시지원금, 선택약정), 배송 방법
    const cookieUploadObject = () => ({
      color: object.color.colorId,
      discount: object.discount,
      phone: object.phone.phoneId,
      plan: object.plan.name,
      ship: object.ship,
    });

    // 장바구니 내에 같은 데이터가 존재하는 지 여부
    const existSameValueInCart = () => {
      let result = false;
      for (let i of cart.data) {
        if (
          i.color === cookieUploadObject().color &&
          i.discount === cookieUploadObject().discount &&
          i.phone === cookieUploadObject().phone &&
          i.plan === cookieUploadObject().plan &&
          i.ship === cookieUploadObject().ship
        ) {
          result = true;
          break;
        }
      }
      return result;
    };
    // 장바구니가 쿠키에 존재하고
    if (cart) {
      // 장바구니에 겹치는 데이터가 없다면
      if (!existSameValueInCart()) {
        // 원래의 장바구니 데이터에 추가로 데이터를 저장
        const newCart = {
          count: cart.count + 1,
          data: [...cart.data, { id: cart.count, ...cookieUploadObject() }],
        };
        setCookie("cart", newCart);
        setCart(newCart);
        return "success";
      } else return "alreadyExist";
    } else return "error";
  };

  // 장바구니 아이템 삭제하기
  const deleteCart = (id) => {
    const returnArray = [...cart.data];
    const deleteId = returnArray.findIndex((row) => row.id === id);
    returnArray.splice(deleteId, 1);
    setCart({count:cart.count, data: returnArray});
    setCookie("cart", {count:cart.count, data: returnArray});
  };

  useEffect(() => {
    fetchPhones();
    getCartDatas();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header setActive={setActive} />
        <NavBar active={active} setActive={setActive} />
        {/* <ComparedPopup /> */}
        <Routes>
          <Route
            path="/"
            exact
            element={<Home phones={phones} saveCart={saveCart} />}
          />
          <Route
            path="/detail/:id"
            exact
            element={<Detail saveCart={saveCart} />}
          />
          <Route
            path="/cart"
            exact
            element={<Cart cart={cart} deleteCart={deleteCart} />}
          />
          <Route
            path="/order"
            exact
            element={<Order/>}
          />
          <Route
            path="/*"
            element={
              <div>
                <p>잘못된 페이지입니다.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
