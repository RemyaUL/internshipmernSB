import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// const rows=[{"movieName":"Kilukkam","category":"Comedy","director":"abc","releaseYear":"1991"},
//     {"movieName":"Turbo","category":"Action","director":"abc","releaseYear":"2024"}];

const View = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/movies').then((res)=>{
      setRows(res.data);
    })
  },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> Movie Name</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Movie Director</TableCell>
          <TableCell align="right">Release Year</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.movieName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.director}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View