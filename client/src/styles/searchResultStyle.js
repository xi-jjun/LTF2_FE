import styled from "styled-components";

export const ResultBox = styled.div`
    width: 100%;
`

export const ResultBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;

    .result {
        font-size: 24px;
        font-weight: bold;
    }

    .more {
        font-size: 16px;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
        }
    }
`

export const ResultList = styled.div`
    width: 100%;
    margin-top : 15px;
`