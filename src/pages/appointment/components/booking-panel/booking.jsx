import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import AppointmentType from '../appointment-type/appointment-type';
 
const BookingPanel=()=>
{
  return(
    <div style={{
      borderStyle:'solid',
      width:'100%',
      height:'170%',
      marginTop:'5%',
      borderRadius:'30px'
    }}>
      <Container>
        <AppointmentType/>
      </Container>
    </div>
    );
}
 
export default BookingPanel;