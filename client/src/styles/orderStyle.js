import { style } from "@mui/system";
import styled from "styled-components";

export const OrderLayout = styled.section`
    position: relative;
    display : flex;
    padding : 30px;
    flex-direction: row;
`

export const OrderInfoLayout = styled.form`
    display : flex;
    flex-direction : column;
    width : 80%;
`
export const PhoneInfoLayout = styled.div`
    position: relative;
    width : 20%;
`
export const OrderAgree = styled.div`
    display : flex;
    flex-direction : row;
    margin-bottom : 30px;
`
export const AgreeTitle = styled.h2`
    font-size: 24px;
`
export const AgreeSubTilte = styled.strong`
    margin-top: 8px;
    padding: 0;
    font-style: normal;
`
export const AgreeSubDesc = styled.p`
    font-size: 14px;
    color: #666;
    padding-left: 8px;
`

export const UserProofTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    padding: 80px 0 16px;
`

export const PhoneImg = styled.img`
    width : 100%;
`
export const PhoneName = styled.strong`
    margin-top: 16px;
    font-size: 24px;
    color: #000;
`
export const PhoneOrderInfoLayout = styled.div`
    display: flex;
    flex-direction : column;
    padding-top: 8px;
`
export const PhoneInfoType = styled.div`
    flex-direction : row;
`
export const PhoneStorage = styled.div`
    font-size: 16px!important;
    display: inline-block;
`
export const PhoneColor = styled.div`
    font-size: 16px!important;
    display: inline-block;
    padding-left : 10px;
    margin-left : 10px;
    border-left : 1px solid #bbb;
`
export const PhoneOrderType = styled.ul`
    padding-left: 0;
    list-style:none;
    margin-top : 16px;
    margin-bottom: 12px;
    padding-bottom : 16px;
    border-bottom: 1px solid #bbb;
    color: #000;
`
export const PhoneType = styled.li`
    font-size: 14px;
    line-height: 24px;
    color: #e6007e;
`
export const PlanInfo = styled.ul`
    font-size: 14px;
    padding-left: 0;
    list-style:none;
`

export const PlanRow = styled.li`
    text-align: right;
    position: relative;
    min-height: 21px;
    overflow: hidden;
`
export const PlanTitle = styled.strong`
    text-align: left;
    float: left;
    max-width: 65%;
`
export const PlanMoney = styled.span`
    color: #666;
`
export const PlanTotalBox = styled.div`
    margin-top: 60px;
    padding-left : 10px;
    padding-right: 10px;
    background: #fff;
    border-radius: 14px;
`
export const PlanTotalTitle = styled.strong`
    padding-top: 12px;
    font-size: 14px;
    float: left;
`
export const PlanTotalPrice = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #000;
`