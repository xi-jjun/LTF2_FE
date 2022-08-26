import { Button, Input } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from '../styles/orderForm'
import orderfiled from '../assets/orderfiled';
import { FormButton, LGButton } from "./Button";
function OrderForm() {
    const [userData,setUserData] = useState({userType : "내국인" , auth:"휴대폰",userName:"",userId:"", userPhone:""})

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
        console.log(e.target.name)
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
                <LGButton size="sm" variant='secondary'>인증하기</LGButton>
            </Styles.FormTd>
        </Styles.FormRow>
        </tbody>
    </Styles.FormTable>
    )
}

export default OrderForm




/**
 * 
 * 
 *         <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete="given-name"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete="family-name"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="new-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </Box>
          )}
        </Form>
 */