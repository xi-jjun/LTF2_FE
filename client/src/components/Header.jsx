import React from "react";
import styled from "styled-components";
import logo from "../image/logo.svg";

export default function Header() {
  return (
    <MainBar>
      <Logo src={logo} alt="logo" />
    </MainBar>
  );
}

const MainBar = styled.div`
  padding: 10px 20px;
  text-align: left;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 29px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const Logo = styled.img`
  height: 20px;
`;
