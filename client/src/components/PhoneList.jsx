import { Grid } from '@mui/material'
import React from 'react'
import Phone from './Phone'

export default function PhoneList({phones}) {
    return (
    <>
        <Styles.InfoArea>
            <Styles.Total>전체 {phones.length} 개</Styles.Total>
            <Styles.InfoBox>
                <Styles.Select>
                    <Styles.Option>주간 판매량 많은 순</Styles.Option>
                    <Styles.Option>최근 출시된 상품 순</Styles.Option>
                    <Styles.Option>정상가 낮은 순</Styles.Option>
                </Styles.Select>
            </Styles.InfoBox>
        </Styles.InfoArea>
            <Grid container justify="center" spacing={2}>
              {
              phones.map((phone) => (
                    <Grid key={phone.id} item xs={12} sm={6} md={4} lg={3}>
                    <Phone phone={phone} />
                    </Grid>
  
              ))
            }
            </Grid>
    </>
    )
}
