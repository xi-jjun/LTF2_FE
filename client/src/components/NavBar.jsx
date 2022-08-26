import React, { useState } from "react";
import * as Bar from "../styles/barStyle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function NavBar({ active, setActive }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [nowHover, setNowHover] = useState("");

  const navArray = [
    { label: "모바일 기기", link: "/" },
    { label: "모바일 요금제", link: "/" },
    { label: "인터넷/IPTV", link: "/" },
    { label: "마이페이지", link: "/" },
    { label: "혜택", link: "/" },
    { label: "고객지원", link: "/" },
    { label: "유플일상", link: "/" },
    { label: "유독", link: "/" },
  ];

  const nowActive = (row) => {
    setActive(row.label);
    navigate(row.link);
  };

  const goToSearch = (keyword) => {
    navigate(`/serach/${keyword}`);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const onSearch = () => setShow(!show);

  return (
    <div
      onMouseLeave={() => {
        setNowHover("");
      }}
    >
      <Bar.NavContainer nowHover={nowHover !== ""}>
        {navArray.map((row) => {
          return (
            <Bar.NavItem
              key={row.label}
              children={row.label}
              navId={row.label}
              active={active}
              nowHover={nowHover}
              onClick={() => nowActive(row)}
              onMouseEnter={() => {
                if (row.label === "유플일상" || row.label === "유독") {
                  setNowHover("");
                } else setNowHover(row.label);
              }}
            />
          );
        })}
        <Bar.NavItem
          style={{ marginLeft: "auto" }}
          children={<SearchIcon onClick={onSearch} />}
          navId={"util1"}
          onMouseEnter={() => {
            setNowHover("");
          }}
        />
        <Bar.NavItem
          children={<ShoppingCartIcon />}
          navId={"util2"}
          onClick={goToCart}
          onMouseEnter={() => {
            setNowHover("");
          }}
        />
      </Bar.NavContainer>
      <Bar.NavMap nowHover={nowHover !== ""} />
    </div>
  );
}
