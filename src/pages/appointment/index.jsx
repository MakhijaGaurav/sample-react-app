import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import BookingPanel from './components/booking-panel/booking';
import LocationPanel from './components/location-panel/location-panel';
import Container from '@mui/material/Container';

 
const Appointment=()=>
{
  return (
    <div>
    <Container>
      <Grid container spacing={3}>

        <Grid xs={5}>
          <LocationPanel/>
        </Grid>

        <Grid xs={7}>
          <BookingPanel/>
        </Grid>

      </Grid>
      </Container>
    </div>
    );
}
 
export default Appointment;