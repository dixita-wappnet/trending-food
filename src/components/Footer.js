import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
        <Box sx={{bgcolor:"grey", textAlign:"center", p:2}}>
            <Typography>
            Copyright 2020 Wappnets Systems Pvt. Ltd. All Rights Reserved
            </Typography>
        </Box>
    </div>
  )
}

export default Footer
