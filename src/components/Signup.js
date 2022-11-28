import React from 'react'
import {Grid, Paper,Avatar, TextField,Button, Typography, Link , } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Signup = () => {
  const paperStyle={ height :"70vh",width:"300px",padding:"20px",margin:"20px auto",}
const avatarStyle={backgroundColor:'red'} 
  return (
    <Grid >
    <Paper elevation={10} style={paperStyle} >
    <Grid Align='center'>
    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
    
    <h2>Signin</h2>
    </Grid>
    <from>
    <TextField id="standard-basic" label="username"   placeholder='gmail'   fullWidth required />
     <br/>
      <br/>
    <TextField id="standard-basic" label="password"  name='password'    placeholder='enter your password' type={'password'}   fullWidth required  />
    <FormControlLabel  control={<Checkbox />} label="Remember me" />
    <Button type='button' color='primary' fullWidth   variant='contained'>submited</Button>
    </from>
    <Typography>
      <br/>
      <Link href='#' > Forgot password?
      </Link>
    </Typography>
    <Typography> Do  you have an account    
    
      <Link href='#' > SIGN UP?
      </Link>
    </Typography>
    
      
    </Paper>
       </Grid>
  )
}

export default Signup