import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserTable() {
  return (
    <div className="p-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <TableRow
              // key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Awais ikram
              </TableCell>
              <TableCell align="center">awais@gmail.company</TableCell>
              <TableCell align="center">Owner</TableCell>
              <TableCell align="center">Active</TableCell>
            </TableRow>
            <TableRow
              // key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Awais ikram
              </TableCell>
              <TableCell align="center">awais@gmail.company</TableCell>
              <TableCell align="center">Owner</TableCell>
              <TableCell align="center">Active</TableCell>
            </TableRow>
            <TableRow
              // key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Awais ikram
              </TableCell>
              <TableCell align="center">awais@gmail.company</TableCell>
              <TableCell align="center">Owner</TableCell>
              <TableCell align="center">Active</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
