import { Input, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { LGButton } from './Button';
import MessageModal from './MessageModal'
import * as Styles from '../styles/orderForm'

const banks = ["국민은행", "우리은행", "기업은행"]

function InputBankAccount() {
    const [bankName, setBankName] = useState('')
    const [open,setOpen] = useState(false);
    const [modalMsg, setModalMsg] = useState({
        message: "",
        btnMessage: "",
        func: () => {setOpen(false)},
    })

    const handleChange = (event) => {
        setBankName(event.target.value);
    };

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
            <Styles.FormTh>은행 계좌번호</Styles.FormTh>
            <Styles.FormTd>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <InputLabel id="bankName">은행 선택</InputLabel>
                    <Select
                        style={{width:"40%"}}
                        labelId="bankName"
                        value={bankName}
                        label="bankName"
                        onChange={handleChange}
                    >
                        {banks.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            >
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <Input error placeholder="'-' 없이 숫자만 입력" style={{width:"40%",marginTop:"10px"}}/>
                        <LGButton type="button" size="sm" variant='secondary' onClick={(e)=>handleAuth(e)}>인증하기</LGButton>
                    </div>
                </div>
            </Styles.FormTd>
        </Styles.FormRow>
    </>
  )
}

export default InputBankAccount