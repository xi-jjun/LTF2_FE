import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography , Checkbox } from '@mui/material'
import React from 'react'
import { PageContainer } from '../components/PageContainer'
import { pink } from '@mui/material/colors';
import * as Styles from '../styles/orderStyle'
import OrderPhoneInfo from '../components/OrderPhoneInfo';
import {phone} from '../DummyData'
import OrderForm from '../components/OrderForm';
import { useState } from 'react';
import OrderUserInfoForm from '../components/OrderUserInfoForm';
import { LGButton } from '../components/Button';
import MessageModal from '../components/MessageModal';

export default function Order() {
    const [data, setData] = useState({
      userType: "",
      authType: "",
      userName: "",
      userId: "",
      userPhone: "",
      ablePhone: "",
      email: "",
      address: "",
      billType: "",
      payType: "",
      cardNumber: "",
      cardExpiration: "",
      bank: "",
      account: "",
    });
  
  const [reqired, setReqired] = useState({
    agreement: false,
    orderForm: false,
    infoForm : false
  })

  const [expand, setExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    message: "",
    btnMessage: "확인",
    func: () => {
      setShow(true);
      setOpen(false);
    },
  });
    const [show,setShow] = useState(false);

    const toggleExpand = () =>{
        setExpand((prev) => !prev);
    }
    
  const setCallback = (updateData, msg) => {
    // popup message 수정
    setModalMsg(() => ({
      ...modalMsg,
      message: msg,
    }))
    setOpen(true)
    // data Upload
    Object.keys(updateData).map((k) => {
      setData((prev) => ({...prev, [k] : updateData[k]}))
    })
  }

  const setRequires = (filed, value) => {
    value ? setReqired((prev) => ({...prev, [filed]: value})):
    setReqired((prev) => ({...prev, [filed]: !reqired[filed]}))
  }
  return (
    <PageContainer>
        <Styles.OrderLayout>
            <Styles.OrderInfoLayout>
                <Grid container justify="center" spacing={2}>
                    <Grid item md ={2}>
                        <Styles.AgreeTitle>이용 약관 동의</Styles.AgreeTitle>
                    </Grid>
                    <Grid item md = {9} style={{padding: "20px", marginTop: "10px"}}>
                        <Accordion expanded={expand}>
                            <AccordionSummary
                                expandIcon={<ExpandMore onClick={toggleExpand}/>}
                            >
                            <Checkbox
                                sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                    color: pink[600],
                                    },
                                }}
                                onChange={()=>{setRequires("agreement")}}
                            />
                                <Styles.AgreeSubTilte>모든 약관에 동의</Styles.AgreeSubTilte>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                    </Grid>
                </Grid>
                <MessageModal
                  open={open}
                  setOpen={setOpen}
                  message={modalMsg.message}
                  btnMessage={modalMsg.btnMessage}
                  func={modalMsg.func}
                />
                <Styles.UserProofTitle>가입자 본인인증</Styles.UserProofTitle>
                <OrderForm showUserInfo={setShow} setCallback={setCallback} setRequires={setRequires}/>
                { 
                    show &&
                    <>
                        <Styles.UserProofTitle>가입자 정보</Styles.UserProofTitle>
              <OrderUserInfoForm setCallback={setCallback} setRequires={setRequires} reqired={reqired} data={ data}/>
                    </>
                }
            </Styles.OrderInfoLayout>
            <Styles.PhoneInfoLayout>
                <OrderPhoneInfo phone = {phone[0]}/>
            </Styles.PhoneInfoLayout>
        </Styles.OrderLayout>
    </PageContainer>
  )
}