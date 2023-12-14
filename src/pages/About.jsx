import React from 'react'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/ui/CommonSection'
 import AboutSection from '../components/ui/AboutSection'
 import { Container, Row, Col } from 'reactstrap'
  import driverImg from '../assets/all-images/drive.jpg' 
import BecomeDriverSection from '../components/ui/BecomeDriverSection'
import Testimonials from '../components/ui/Testimonials'
import '../styles/about.css'
const About = () => {
  return <Helmet title="About">
    <CommonSection title="About us"/>
     <AboutSection aboutClass = 'aboutPage'/>
     <section className='about-page-section'>
      <Container> 
        <Row>
<Col lg='6' md='6' sm='12' >
  <div className="about-page-img">
    <img src={driverImg} alt=""  className='w-100 rounded-3'   />
  </div>
</Col>
<Col lg='6' md='6' sm='12' >
  <div className="about-page-content mt-1">
    <h2 className="section-title">
      We Are Committed TO Provide Safe Ride Solutions
    </h2>
   <p className="section-description">
   Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:

   </p>
   <p className="section-description">
   Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various service.

   </p>
   <div className="d-flex align-items-center gap-3 mt-2" >
    <span className='fs-4'>
      <i class="ri-phone-line"></i>
    </span>
   <div>
    <h6 className="section-subtitle">Need Any Help</h6>
    <h6>+251928696488</h6>
   </div>
   </div>
  </div>
</Col>

        </Row>
      </Container>
     </section>
   
   <BecomeDriverSection /> 
  
   <section>
    <Container>
      <Row>
        <Col lg='12' md='6'  sm='4' className='mb-4 text-center'>
         <h6 className="section-subtitle">Our Clients </h6>
         <h2 className="section-title">Testimonials</h2>
        </Col>
        <Testimonials/>
      </Row>
    </Container>
  </section>
   
  </Helmet>
}

export default About 