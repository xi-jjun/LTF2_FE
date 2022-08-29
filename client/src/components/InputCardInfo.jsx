import { Input } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import * as Styles from '../styles/orderForm'
import { LGButton } from './Button'
import MessageModal from './MessageModal';

function InputCardInfo() {
    const [open,setOpen] = useState(false);
    const [modalMsg, setModalMsg] = useState({
        message: "",
        btnMessage: "",
        func: () => {setOpen(false)},
    })

    const handleAuth = e => {
        setModalMsg(() =>({...modalMsg,message: `신용카드 인증이 완료되었습니다!`}))
        setOpen(true)
      }
  return (
    <>
        <MessageModal
          open={open}
          setOpen={setOpen}
          message={modalMsg.message}
          btnMessage={modalMsg.btnMessage}
          func={modalMsg.func}
        />
        <Styles.FormRow>
            <Styles.FormTh>신용카드 번호</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="'-' 없이 숫자만 입력"/>
            </Styles.FormTd>
        </Styles.FormRow>
        <Styles.FormRow>
            <Styles.FormTh>유효 기간</Styles.FormTh>
            <Styles.FormTd>
                <Input error placeholder="MMYY"/>
                <LGButton type="button" size="sm" variant='secondary' onClick={(e)=>handleAuth(e)}>인증하기</LGButton>
            </Styles.FormTd>
        </Styles.FormRow>
    </>
  )
}

export default InputCardInfo