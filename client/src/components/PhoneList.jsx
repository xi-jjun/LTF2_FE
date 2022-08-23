import { Grid } from '@mui/material'
import React from 'react'
import Phone from './Phone'

export default function PhoneList({phones}) {
    return (
        <Grid container justify="center" spacing={2}>
            {
              phones.map((phone) => (
                <Grid key={phone.id} item xs={12} sm={6} md={4} lg={3}>
                  <Phone phone={phone} />
                </Grid>

              ))
            }
        </Grid>
    )
}