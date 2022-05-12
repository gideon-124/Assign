import React,{useState,useEffect}from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link } from 'react-router-dom';
import axios from "axios"


const Add = () => {
    
  
    const[partnerName,setPartnerName]=useState("")
    const[partnerEmail,setPartnerEmail]=useState("")
    const[mobileNumber,setMobileNumber]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()
        const Details= {
            PartnerName:partnerName,
            PartnerEmail:partnerEmail,
            MobileNumber:mobileNumber
        }
        console.log(Details)
        let url="http://65.0.79.248:8005/API/Partners/AddPartner"
        axios.post(url,Details)
        .then((res)=>{
            console.log(res.data)
            setPartnerEmail("")
            setPartnerName("")
            setMobileNumber("")

        })


    }
  return (
      <>
    <h1> Form </h1>
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
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
       
        </Box>
        

    <button type="submit">Submit</button>
    
      
    </form>
    </>
  )
}

export default Add