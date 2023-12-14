import React from 'react'
import { Container, Row, Col } from 'reactstrap'
 import '../../styles/aboutsection.css'
  import AboutImg from "../../assets/all-images/cars-img/bmw-offer.png"
 const AboutSection = ({ aboutClass }) => {
  return <section className='about-section'
   style={aboutClass === 'aboutPage' ? 
  {marginTop: '0px'} : 
  {marginTop: '280px'}
  }>
 <Container>
<Row>
    <Col lg='6' md='6'>
    <div className="about-section-content">
    <h4 className="section-subtitle">About Us</h4>
     <h2 className="section-title">Welcome to car rent service</h2>
     <p className="section-description">
     Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:

     </p>
     <div className="about-section-item d-flex align-items-center">
        <p className="section-description d-flex align-items-center gap-2">
       <i class='ri-checkbox-circle-line'></i> Wide and Diverse Fleet

        </p>
        <p className="section-description d-flex align-items-center gap-2">
       <i class='ri-checkbox-circle-line'></i> Excellent Customer Service

        </p>
     </div>
     <div className="about-section-item d-flex align-items-center">
        <p className="section-description d-flex align-items-center gap-2">
       <i class='ri-checkbox-circle-line'></i>  Wide and Diverse Fleet

        </p>
        <p className="section-description d-flex align-items-center gap-2">
       <i class='ri-checkbox-circle-line'></i>  Child safety seats
      

        </p>
     </div>
    </div>
    </Col>
    <Col lg='6' md='6'>
    <div className="about-img">
        <img src={AboutImg} alt="" className='w-100'/>
    </div>
     

    </Col>
</Row>

 </Container>
  


  </section>
}

export default AboutSection