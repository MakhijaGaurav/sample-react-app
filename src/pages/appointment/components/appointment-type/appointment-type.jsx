import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 
const AppointmentType=()=>
{
  return(
    <div>
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xs={5.5}>
          <Card variant="outlined" style={{boxShadow:'0 0 3px 3px gray',marginTop:'10%'}}>
            <CardContent>
              
              <div style={{marginLeft:'40%',marginTop:'10%'}}>
                <span><i class="fa-regular fa-calendar-check fa-2xl"></i></span>
              </div>

              <div style={{marginTop:'20%'}}>
                <p>What kind of appointment do you need? </p>
                <FormControl sx={{ minWidth: 250 }} size="small">
                   <Select
                      displayEmpty
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={0}
                      >
                        <MenuItem disabled value={0}>Select Appointment Type</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
              </FormControl>  
              </div>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    );
}
 
export default AppointmentType;