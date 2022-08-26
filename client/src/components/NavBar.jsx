import React, { useRef, useState } from "react";
import * as Bar from "../styles/barStyle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


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

  const onClickSearch = () => {
    if(nowValue.length < 2) {
        alert("두 글자 이상 입력하세요")
    } else if(nowValue.length > 20) {
        alert("검색어의 최대길이는 20자입니다.")
    } else {
        navigate(`/search/${nowValue}`)
        setShow(!show)
        setNowValue("")
    }
  }

  const onKeyPress = (e) => {
      if(e.key == 'Enter') {
          onClickSearch();
      }
  }

  const { keyword } = useParams();

  const [nowValue, setNowValue] = useState(keyword);

  const changeValue = e => setNowValue(e.target.value);

  const inputRef = useRef(null);

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
            onClick={() => nowActive(row)}
            nowHover={nowHover}
            onMouseEnter={() => {
              if (row.label === "유플일상" || row.label === "유독") {
                setNowHover("");
              } else setNowHover(row.label);
            }}
          />
        );
      })}
      <Bar.NavItem
        style={{ marginLeft: "auto", marginRight: "0px"}}
        navId={"util1"}
        onMouseEnter={() => {
          setNowHover("");
        }}
      >
        <SearchIcon onClick={() => {
          setShow(!show);
          setTimeout(() => inputRef.current.focus(), 50);
          }} />
        <Bar.ShowflowMenu show={show}>
          <Bar.ShowflowMenuLi>
            <Bar.SearchInput 
              value={nowValue} 
              onChange={changeValue} 
              onKeyPress={onKeyPress} 
              onBlur={() => setTimeout(() => setShow(false), 100)}
              ref={inputRef}
            />
            <SearchIcon onClick={onClickSearch}/>
          </Bar.ShowflowMenuLi>
        </Bar.ShowflowMenu>
      </Bar.NavItem>
      <Bar.NavItem
        children={<ShoppingCartIcon />}
        navId={"util2"}
        onClick={goToCart}
        onMouseEnter={() => {
          setNowHover("");
        }}
      />
      <Bar.NavMap nowHover={nowHover !== ""} />
    </Bar.NavContainer>
  </div>
  );
}
