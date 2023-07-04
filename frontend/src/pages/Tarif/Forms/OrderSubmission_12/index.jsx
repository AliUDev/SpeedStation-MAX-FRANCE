import { TextField, Typography } from '@mui/material'
import React,{useState} from 'react'

const OrderSubmission_12 = () => {
  const [email, setemail] = useState('');
  return (
    <div>
      <Typography variant="subtitle2">Übermittlung hinzufügen</Typography>
      <TextField onChange={(e) => setemail(e.target.value)} id="standard-basic" sx={{ width: "100%" }} type="email" label="Enter Email" required variant="standard" />

    </div>
  )
}

export default OrderSubmission_12