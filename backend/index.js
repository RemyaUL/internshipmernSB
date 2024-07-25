const express=require('express')
const cors=require('cors');
const app=new express();
const PORT=4000;
//connect the connection.js to server file
require('./connection');
const movieData=require('./model/MovieData')

app.use(express.json());
app.use(cors());
//API endpoint to fetch data from DB
app.get('/movies',async(req,res)=>{
try{
    const data=await movieData.find();
    res.send(data);
}
catch(error){
console.log("Error occurs");
}

})

//checking whether the server is live or not
app.listen(PORT,()=>{
    console.log("Server is running on Port Number: 4000");
})