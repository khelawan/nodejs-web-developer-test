import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBTypography, MDBBadge  } from 'mdb-react-ui-kit';

const divStyle = { objectFit: 'cover', height : '200px'};
const carddiv = {margin : '5px 5px 5px', textTransform: 'capitalize'};
const cardBg = { width: '15rem', borderRadius: '0rem',backgroundColor: '#F5F5F5',color:'black'}
const pstyle = {fontSize: '12px', color: 'grey'}
const cardBody = {padding: '0.5rem 0.5rem'}

const Card = ({artistName, trackName, artworkUrl100, trackViewUrl, kind }) => (
    <MDBCol className="d-flex align-items-center justify-content-center" size='3'>    
    <a  href={trackViewUrl} target='_blank'>
    <div   style={carddiv}>
    <MDBCard style={cardBg}>
      <MDBCardImage src={artworkUrl100} style={divStyle} position='top' alt='...' />
      <MDBCardBody style={cardBody}>
        <MDBTypography   tag='h6'><strong>{trackName}</strong></MDBTypography>
        <hr></hr>
        <p style={pstyle} >
        {artistName}
        </p>
        <MDBBadge pill className='mx-2' color='info'>
        {kind}
      </MDBBadge>   
      </MDBCardBody>
    </MDBCard>
    </div>
    </a> 
    </MDBCol>  
);

  

export default Card;
