import { Button, Input } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from '../styles/orderForm'
import orderfiled from '../assets/orderfiled';
import { FormButton, LGButton } from "./Button";
import MessageModal from './MessageModal';
function OrderForm() {
    const [userData,setUserData] = useState({userType : "내국인" , auth:"휴대폰",userName:"",userId:"", userPhone:""})
    const [open,setOpen] = useState(false);
    const [auth,setAuth] = useState(false);
    const [modalMsg, setModalMsg] = useState({
      message: "",
      btnMessage: "",
      func: () => {setAuth(true); setOpen(false)},
    })

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
                    <FormButton name="userType" key={i} value={v} check={checkUserType(v)} onClick={(e)=>{handleChange(e)}}>{v}</FormButton>
                ))
            case "인증 방법":
                return orderfiled[key].map((v,i) =>(
                    <FormButton key={i} name="auth" value={v} check={checkAuthMethod(v)} onClick={(e)=>{handleChange(e)}}>{v}</FormButton>
                ))
            default:
                break;
        }
    }

    const handleChange = e => {
      const { name, value } = e.target;
      setUserData(() => ({
        ...userData,
        [name]: value
      }));
    };

    const handleAuth = e => {
      setModalMsg(() =>({...modalMsg,message: `${userData.auth} 인증이 완료되었습니다!`}))
      setOpen(true)
    }

    return (
    <Styles.FormTable>
        <MessageModal
          open={open}
          setOpen={setOpen}
          message={modalMsg.message}
          btnMessage={modalMsg.btnMessage}
          func={modalMsg.func}
        />
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
                <Input error placeholder="이름" name='userName' onChange={(e) => {handleChange(e)}}/>
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
                <Input error name='userPhone' placeholder="'-'없이 숫자만 입력" onChange={(e) => {handleChange(e)}}/>
                <LGButton type="button" size="sm" variant='secondary' onClick={(e)=>handleAuth(e)}>인증하기</LGButton>
            </Styles.FormTd>
        </Styles.FormRow>
        </tbody>
    </Styles.FormTable>
    )
}

export default OrderForm