import React, { useState } from "react";
import styled from "styled-components";

export default function NavBar() {
  const [active, setActive] = useState(-1);

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

  return (
    <NavBarContainer>
      {navArray.map((row) => {
        return (
          <NavItem
            key={row.label}
            children={row.label}
            navId={row.label}
            active={active}
            onClick={() => nowActive(row)}
          />
        );
      })}
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  text-align: left;
  display: flex;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  position: fixed;
  top: 50px;
  width: 100%;
  min-width: 1000px;
  overflow: hidden;
  height: 52px;
  z-index: 10;
`;

const NavItem = styled.div`
  margin: 0px 25px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-bottom: ${(props) =>
    props.navId === props.active ? "2px solid #e6007e" : "none"};
  color: ${(props) => (props.navId === props.active ? "#e6007e" : "black")};

  &:hover {
    color: #e6007e;
  }
`;
