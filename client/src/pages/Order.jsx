import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography , Checkbox } from '@mui/material'
import React from 'react'
import { PageContainer } from '../components/PageContainer'
import { pink } from '@mui/material/colors';
import * as Styles from '../styles/orderStyle'
import OrderPhoneInfo from '../components/OrderPhoneInfo';
import {phone} from '../DummyData'
import OrderForm from '../components/OrderForm';
export default function Order() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <PageContainer>
        <Styles.OrderLayout>
            <Styles.OrderInfoLayout>
                <Grid container justify="center" spacing={2}>
                    <Grid item md ={2}>
                        <Styles.AgreeTitle>이용 약관 동의</Styles.AgreeTitle>
                    </Grid>
                    <Grid item md = {9} style={{padding: "20px", marginTop: "10px"}}>
                        <Accordion >
                            <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                color: pink[600],
                                },
                            }}
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
                <Styles.UserProofTitle>가입자 본인인증</Styles.UserProofTitle>
                <OrderForm/>
            </Styles.OrderInfoLayout>
            <Styles.PhoneInfoLayout>
                <OrderPhoneInfo phone = {phone[0]}/>
            </Styles.PhoneInfoLayout>
        </Styles.OrderLayout>
    </PageContainer>
  )
}
