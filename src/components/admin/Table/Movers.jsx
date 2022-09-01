import {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, contact, status) {
  return { name, contact, status };
}




// const rows = [
//   createData("Nyumbani Move", "move@info.com", "Approved"),
//   createData("Keja Move ", "move@info.com", "Pending"),
//   createData("Cupcake", "move@info.com", "Approved"),
// ];




const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function Movers() {
    const [rows, setRows] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(()=>{
        fetch('https://nyumbani-move.herokuapp.com/api/movers')
        .then(res=>res.json())
        .then(data=>{
            setRows(data)
            console.log(data)
        })
        .catch(err=>console.log(err))
    }, [update])

    function approveMover(id){
        console.log(id);
        console.log("Approved");
        fetch(`'https://nyumbani-move.herokuapp.com/api/movers'${id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
         }).then((r) => {
            r.json()
          })
          .then((updatedOrder)=>{
            console.log(updatedOrder);
            setUpdate(!update)
           
        })
    }
  return (
      <div className="Table">
      <h3>Our Movers</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)} onClick={()=>approveMover(row.id)}>{row.is_mover? "Approved" : "Pending"}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
