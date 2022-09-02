import styled from "styled-components";

export const SizeLayout = styled.div`
    margin-top : 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ImgBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    height : ${(props) => props.height}mm;
    width : ${(props) => props.width}mm;
    zoom : ${(props) => props.zoom};

`

export const SizeBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RecommendInch = styled.h1`

`

export const ButtonBox = styled.div`
`