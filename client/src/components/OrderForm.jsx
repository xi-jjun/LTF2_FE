import { Button, Input } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from '../styles/orderForm'
import orderfiled from '../assets/orderfiled';
import { FormButton } from "./Button";
function OrderForm() {
    const [userData,setUserData] = useState({})

    const checkUserType = (value) =>{
        return userData.userType === value
    }

    const checkAuthMethod = (value) =>{
        return userData.auth === value
    }

    const iterButton = (key) =>{
        switch (key) {
            case "고객 유형":
                return orderfiled[key].map((v,i) =>(
                    <FormButton key={i} check={checkUserType(v)} onClick={() =>{setUserData({...userData,"userType": v})}}>{v}</FormButton>
                ))
            case "인증 방법":
                return orderfiled[key].map((v,i) =>(
                    <FormButton key={i} check={checkAuthMethod(v)} onClick={() =>{setUserData({...userData,"auth": v})}}>{v}</FormButton>
                ))
            default:
                break;
        }
    }

    return (
    <Styles.FormTable>
        <tbody>
        <Styles.FormRow>
            <Styles.FormTh>고객 유형</Styles.FormTh>
            <Styles.FormTd>                         
                {
                    iterButton("고객 유형")
                }
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>이름</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="이름" onChange={(e) => { setUserData({...userData,"userName": e.target.value})}}/>
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>주민등록 번호</Styles.FormTh>
            <Styles.FormTd>
                <Input error 
                 placeholder="앞 6자리 입력" />{ " - " }
                <Input type='password' error 
                 placeholder="뒤 7자리 입력"
                 inputProps={{ maxLength: 7 }} 
                />
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>인증 방법</Styles.FormTh>
            <Styles.FormTd>
            {
                iterButton("인증 방법")
            }
            </Styles.FormTd>

        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>기기 변경 휴대폰 번호</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="'-'없이 숫자만 입력" onChange={(e) => { setUserData({...userData,"userNumber": e.target.value})}}/>
            </Styles.FormTd>
        </Styles.FormRow>
        </tbody>
    </Styles.FormTable>
    )
}

export default OrderForm