import { Style } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from '../styles/orderForm'
import { FormButton } from "./Button";
function OrderForm() {
    const [userData,setUserData] = useState({})
    return (
    <Styles.FormTable>
        <Styles.FormRow>
            <Styles.FormTh>고객 유형</Styles.FormTh>
            <Styles.FormTd>                         
                <FormButton id='1'>내국인</FormButton>
                <FormButton id='2'>외국인 (Foreginer)</FormButton>
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>이름</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="이름" />
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>주민등록 번호</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="앞 6자리 입력" />{ " - " }
                <Input error placeholder="뒤 7자리 입력" />
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>

            <Styles.FormTh>인증방법</Styles.FormTh>
            <FormButton>휴대폰</FormButton>
            <FormButton>신용카드</FormButton>
            <FormButton>PASS</FormButton>
            <FormButton>범용공인 인증서</FormButton>
            <FormButton>네이버 인증서</FormButton>

        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>기기 변경 휴대폰 번호</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="'-'없이 숫자만 입력"/>
            </Styles.FormTd>
        </Styles.FormRow>
    </Styles.FormTable>
    )
}

export default OrderForm