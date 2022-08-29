import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from '../styles/orderForm'
import { check } from '../util/validator';
// import orderfiled from '../assets/orderfiled';
import { FormButton, LGButton } from "./Button";
import InputBankAccount from './InputBankAccount';
import InputCardInfo from './InputCardInfo';
// import MessageModal from './MessageModal';

function OrderUserInfoForm() {
    const [userData,setUserData] = useState({phoneNumber : "", 
                                            email:"", 
                                            address:"",
                                            billType:"문자 메시지", 
                                            payType:"신용카드",
                                            payInfo:""})
    
    const handleChange = e => {
      const { name, value } = e.target;
      setUserData(() => ({
        ...userData,
        [name]: value
      }));
    };

    return (
    <Styles.FormTable>
        <tbody>
        <Styles.FormRow>
            <Styles.FormTh>연락 가능한 전화번호</Styles.FormTh>
            <Styles.FormTd>                         
                <Input error name='phoneNumber' placeholder="'-'없이 숫자만 입력" onChange={(e) => {handleChange(e)}} />
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>이메일 주소</Styles.FormTh>
            <Styles.FormTd>
                <Input error name="email" label="Email" autocomplete="none" onChange={(e)=>{handleChange(e)}}/>
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>주소</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="주소 입력" />
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>청구서 받는 방법</Styles.FormTh>
            <Styles.FormTd>
                <FormButton name="billType" value="문자 메시지" check={check(userData.billType,"문자 메시지")} onClick={(e)=>{handleChange(e)}}>문자 메시지 (요약정보)</FormButton>
                <FormButton name="billType" value="이메일" check={check(userData.billType,"이메일")} onClick={(e)=>{handleChange(e)}}>이메일 (상세정보)</FormButton>
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>요금 납부 방법</Styles.FormTh>
            <Styles.FormTd>
                <FormButton name="payType" value="신용카드" check={check(userData.payType,"신용카드")} onClick={(e)=>{handleChange(e)}}>신용 카드</FormButton>
                <FormButton name="payType" value="계좌이체" check={check(userData.payType,"계좌이체")} onClick={(e)=>{handleChange(e)}}>계좌 이체</FormButton>
            </Styles.FormTd>
        </Styles.FormRow>
        {
            userData.payType === "신용카드" ? <InputCardInfo/> : <InputBankAccount />
        }
        <LGButton size="lg" style={{marginTop: "20px"}}>주문하기</LGButton>
        </tbody>
    </Styles.FormTable>
    )
}

export default OrderUserInfoForm