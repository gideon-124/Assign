import React,{useState, useEffect} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 600,
//   },
//   tableContainer: {
//     borderRadius: 15,
//     margin:"10 10",
//     align:'center',
//     maxWidth:950
//   },
//   tableHeaderCell:{
//     fontWeight:'bold',
//     backgroundColor:"orange",
    

//   }
// }));


const List = () => {
  const [table,setTable]=useState([])
  const navigate=useNavigate()
  
  let url="http://65.0.79.248:8005/API/Partners/GetPartners"
  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      console.log(response.data)
      setTable(response.data.data)})
      

  },[])

  const empList = localStorage.getItem("empList")
    ? JSON.parse(localStorage.getItem("empList"))
    : [];
    const[data,setData]=useState("")

  const handleEdit=(partnerID)=>{
    const temp = table.filter((employee) => employee.partnerID ===partnerID );
      localStorage.setItem("empList", JSON.stringify(temp));
      setData(temp);
     console.log("first")
  }  
  return (
    <div>
        <h1 align="center"> Employee Table</h1>

        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow >
                <TableCell >Name </TableCell>
                <TableCell >Email</TableCell>
                <TableCell >phone</TableCell>

                <TableCell > Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table?.map((row) => (
                <TableRow
                  key={row.partnerName}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Grid container>
                      <Grid item>
                        <Avatar alt={row.partnerName} src="." />
                      </Grid>
                      <Grid item>{row.partnerName}</Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.partnerEmail}</TableCell>
                  <TableCell>{row.mobileNumber}</TableCell>
                      <Link to ="/update">
                  <TableCell>
                    
                      <Tooltip title="Edit" placement="left-start" >
                        <EditRoundedIcon color="primary" onClick={()=>handleEdit(row.partnerID)}/>
                      </Tooltip>
                    
                  </TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
        onClick={() => navigate("/Add")}
        
      >
        Add Employee
      </Button>

    </div>
  )
}

export default List