import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from "axios"




const Update = () => {
  const [partner, setPartner] = useState(JSON.parse(localStorage.getItem('empList'))[0])
  console.log(partner)
  const [partnerName, setPartnerName] = useState(partner.partnerName)
  const [partnerEmail, setPartnerEmail] = useState(partner.partnerEmail)
  const [mobileNumber, setMobileNumber] = useState(partner.mobileNumber)


  const handlesubmit = (e) => {
    e.preventDefault()
    const Details = {
      "PartnerID": partner.partnerID,
      "PartnerName": partnerName,
      "PartnerEmail": partnerEmail,
      "MobileNumber": mobileNumber,
      "IsEnabled": true,
    }
    localStorage.getItem("empList")
    console.log(Details)
    let url = "http://65.0.79.248:8005/API/Partners/UpdatePartner"
    axios.put(url, Details,{
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        console.log(res.data)
        setPartnerEmail("")
        setPartnerName("")
        setMobileNumber("")

      })
  }
  return (
    <div>
      <h1> update partner</h1>
      <form onSubmit={handlesubmit}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            type="textbox"
            label="Name"
            defaultValue={partner.partnerName}
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            defaultValue={partner.partnerEmail}
            value={partnerEmail}
            onChange={(e) => setPartnerEmail(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField
            label="phone"
            defaultValue={partner.mobileNumber}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

        </Box>
        <input type="checkBox" id="enabled" /><label htmlFor="enabled">isEnabled</label>

        
        <button type="submit" >update</button>
        


      </form>



    </div>
  )
}

export default Update