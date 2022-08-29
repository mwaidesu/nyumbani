import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, mover, date, size, distance, status) {
  return { name, mover, date, size, distance, status };
}

const rows = [
  createData("Erick Mwai", "Nyumbani", "2 March 2022", "1 br", "14 miles", "Approved"),
  createData("Erick Mwai", "Nyumbani", "2 March 2022", "Studio", "14 miles", "Approved"),
  createData("Erick Mwai", "Nyumbani", "2 March 2022", "2 br", "14 miles", "Approved"),
  createData("Erick Mwai", "Nyumbani", "2 March 2022", "3 br", "14 miles", "Approved"),
];


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

export default function Orders() {
  return (
      <div className="Table">
      <h3>All Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell align="left">Mover</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">House Size</TableCell>
                <TableCell align="left">Distance</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.mover}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.size}</TableCell>
                  <TableCell align="left">{row.distance}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
