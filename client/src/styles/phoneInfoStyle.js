import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 50%;
  min-width: 700px;
  height: 100%;
  position: sticky;
  top: 0;
  padding: 100px;
`;

export const ImageMain = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid grey;
  border-radius: 10px;
  position: sticky;
  top: 0px;
  background-color: ${(props) => props.color.hexCode};
  margin: auto;
`;

export const ImageSub = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid grey;
  border-radius: 10px;
  position: sticky;
  top: 0px;
  background-color: ${(props) => props.color.hexCode};
  margin: 20px 10px;
`;

export const Container = styled.div`
  width: 40%;
  min-width: 500px;
  padding: 50px 20px;
`;

export const Info = styled.div`
  margin: 0;

  h1 {
    margin: 0px 5px 0px 0px;
    display: inline-block;
  }

  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    display: inline-block;
  }

  button {
    margin: 10px 10px;
    padding: 10px 60px;
  }
`;

export const Price = styled.div`
  margin: 20px 0px;
  padding: 30px 30px;
  border-radius: 10px;
  background-color: #f5f5f5;

  h1 {
    display: block;
    margin: 5px 0px;
  }
  p {
    display: block;
    margin: 5px 0px;
  }
`;
