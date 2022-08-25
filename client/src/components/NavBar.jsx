import React from "react";
import * as Bar from "../styles/barStyle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function NavBar({ active, setActive }) {
  const navArray = [
    { label: "모바일 기기", link: "" },
    { label: "모바일 요금제", link: "" },
    { label: "인터넷/IPTV", link: "" },
    { label: "마이페이지", link: "" },
    { label: "혜택", link: "" },
    { label: "고객지원", link: "" },
    { label: "유플일상", link: "" },
    { label: "유독", link: "" },
  ];

  const nowActive = (row) => {
    setActive(row.label);
  };

  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <Bar.NavContainer>
      {navArray.map((row) => {
        return (
          <Bar.NavItem
            key={row.label}
            children={row.label}
            navId={row.label}
            active={active}
            onClick={() => nowActive(row)}
          />
        );
      })}
      <Bar.NavItem
        style={{ marginLeft: "auto" }}
        children={<SearchIcon />}
        navId={"util1"}
      />
      <Bar.NavItem
        children={<ShoppingCartIcon />}
        navId={"util2"}
        onClick={goToCart}
      />
    </Bar.NavContainer>
  );
}
