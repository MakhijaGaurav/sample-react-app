import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
 
const LocationPanel=()=>
{
    return (
      <div>
        <Stack spacing={1.5} mt={4}>

          <div>
            <img src="https://4patientcare.com/wp-content/uploads/2020/12/4PC-LOGO-COLOR.png" width="110" height="25"/>
          </div>

          <div>
              <h1>New Test Location</h1>
          </div>

          <div>
             <FormControl sx={{ minWidth: 300 }} size="small">
               <InputLabel id="demo-multiple-name-label">Location</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={""}
                  label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <span><i class="fa-solid fa-phone"></i></span>
              &nbsp;&nbsp;
              <span>+91 1234567890</span>
            </div>

            <div>
              <span><i class="fa-solid fa-location-dot"></i></span>
              &nbsp;&nbsp;
              <span>Mill Indl Estate, A 9 Mount Unique, Cumballa Hill</span>
            </div>

            <div>
              <span><i class="fa-solid fa-envelope"></i></span>
              &nbsp;&nbsp;
              <span>test@test.com</span>
            </div>

            <div>
            </div>

        </Stack>
      </div>
    );
}
 
export default LocationPanel;