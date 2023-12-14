import React from 'react'
import Helmet from '../components/helmet/Helmet'
import HeroSlider from '../components/ui/HeroSlider'
import FindCarForm from '../components/ui/FindCarForm'
 import { Container, Row, Col } from 'reactstrap'
 import '../styles/findcarform.css'
import AboutSection from '../components/ui/AboutSection'
import ServiceList from '../components/ui/ServiceList'
 import CarData     from '../assets/data/carData'
import carData from '../assets/data/carData'
import Caritem from '../components/ui/Caritem'
import BecomeDriverSection from '../components/ui/BecomeDriverSection'
import Testimonials from '../components/ui/Testimonials'
import BlogList from '../components/ui/BlogList'
const Home = () => {
 
  return (
  <Helmet title="Home">
   <section className='p-0 hero-slider-section'>
   <HeroSlider />
    <div className="hero-form">
     <Container>
      <Row className='form-row'> 
     <Col lg="4" md="4" >
     <div className="find-cars-left">
      <h2>Find Your best car here</h2>
     </div>
     </Col>
     <Col lg='8' md='8' sm='12'>
      <FindCarForm/>
     </Col>
      </Row>

      
       </Container>

    </div>
   </section>
  {/* about section */}
  <AboutSection/>
  {/* service section */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-4 text-center'>
        <h6 className="section-subtitle">See our</h6>
        <h2 className="section-title">Popular Services</h2>
        </Col>
       <ServiceList/>
      </Row>
    </Container>
  </section>
  {/* car offer section */}
   <section>
    <Container>
      <Row>
        <Col lg='12' className="text-center mb-5">
         <h6 className="section-subtitle">Come with</h6>
          <h2 className="section-title">Hot Offers</h2>
        </Col>
        {
          carData.slice(0, 6).map(item=>(
            <Caritem item={item} key={item.id} />
          ))
        }
      </Row>
    </Container>
   </section>
  {/* become driver */}
  <BecomeDriverSection/> 
  {/* testimonial */}
  {/* <section>
    <Container>
      <Row>
        <Col lg="12" className='mb-4 text-center'>
         <h6 className="section-subtitle">Our Clients </h6>
         <h2 className="section-title">Testimonials</h2>
        </Col>
        <Testimonials/>
      </Row>
    </Container>
  </section> */}
  {/* blog section */}
   
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-4 text-center'>
         <h6 className="section-subtitle">Explore our blogs</h6>
         <h2 className="section-title">Latest blogs</h2>
        </Col>
        <BlogList/>
      </Row>
    </Container>
  </section>
  </Helmet>
  )
}

export default Home
