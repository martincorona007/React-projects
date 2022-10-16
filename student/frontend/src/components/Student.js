import React,{useState,useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from '@mui/material/Button';
export default function Student() {
  const paperStyle = {padding: '50px 20px', width: 600,margin: "20px auto"}
  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  const [students,setStudents]= useState([]);
  const handlerClick = (e) => {
    e.preventDefault();
    const student = {name,address};
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(student)
    }).then(()=>{
      console.log("New student added");
    })
  }
  let getStudents = () => {
    fetch("http://localhost:8080/student/getAll",{method:"GET",headers:{"Content-Type": "application/json"}})
    .then(res => res.json())
    .then((result) =>{
      console.log(result);
      setStudents(result)
    })
    
  }
  useEffect(()=>{
    getStudents();
  },[])
  //console.log(students);
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            fullWidth
            onChange={(e)=> setAddress(e.target.value)}
            value={address}
          />
        </Box>
        <Button variant="outlined" color="error" onClick={handlerClick}>Submit</Button>
      </Paper>
      <h1>Students</h1>
      <Paper elevation={3} style={paperStyle}>
        
        
        {students.map(student=>(
          <Paper elevation={6} style={{margin:"16px",padding:"15px",textAlign:"left"}} key={student.id}>
            Id: {student.id}<br/>
            Name: {student.name} <br/>
            Address: {student.address}

          </Paper>

        ))}
      </Paper>
    </Container>
  );
}
