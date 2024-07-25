import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
 // const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
   "movieName":'',
   "category":'',
   "director":'',
   "releaseYear":''
  })
let showData=()=>{
  console.log(form);
}
  // let valueAdd=()=>{
  //   setCounter(counter+1);
  // }

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})

  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Movie Name"
        defaultValue="Name"
        name='movieName'
        value={form.movieName}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="Category"
        defaultValue="Category"
        name="category"
        value={form.category}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="Movie Director"
        defaultValue="Director"
        name="director"
        value={form.director}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="Release Year"
        defaultValue="Year"
        name="releaseYear"
        value={form.releaseYear}
        onChange={valueCap}
      />
      <br/>
      <Button variant="contained" color="success" onClick={showData}>
 Submit
</Button>
<br/>
{/* <small>Button clicked {counter} time(s).</small> */}
         </div>
         </Box>
  )
}

export default Add