import React from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/ui/CommonSection'
import { Link } from 'react-router-dom'
import "../styles/contact.css"

const socialLinks = [

{

url: "#",
icon: "ri-facebook-line"
},
{

  url: "#",
  icon: "ri-instagram-line"
  },
  {

    url: "#",
    icon: "ri-linkedin-line"

    },
    {

      url: "#",
      icon: "ri-twitter-line"
      },







]
const Contact = () => {
  return <Helmet>
    <CommonSection title="Contact" />
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h6 className="fw-bold mb-4">Get In Touch</h6>
            <Form>
              <FormGroup className='contact-form'>
              <Input placeholder='Your Name' type="text" />
              </FormGroup>
              <FormGroup className='contact-form'>
              <Input placeholder='Email' type="email" />
              </FormGroup><FormGroup className='contact-form'>
               <textarea className='textarea' rows="5" placeholder='Message'></textarea>
              </FormGroup>
              <button className='btn contact-btn'>Send Message</button>

            </Form>
          </Col>
          <Col lg="5" md="5"> 
            <div className="contact-info">
              <h6 className="fw-bold">Contact Information</h6>
               <p className="section-description mb-0">Bole mafimall,  AddisAbaba,  Ethiopa</p>
                
                <div className="d-flex align-items-center gap-2">
                    <h6 className='mb-0 fs-6'>Phone:</h6>
                    <p className="section-description mb-0">+251928696488</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <h6 className='mb-0 fs-6'>Email:</h6>
                    <p className="section-description mb-0">frraolgetu03@gmail.com</p>
                </div>
               <h6 className="fw-bold mt-4">Follow Us</h6>
               <div className="d-flex align-items-center gap-4 mt-3">
                {
                  socialLinks.map((item, index) => (
                    <Link  to={item.url} key={index} className='social-link-icon'> <i class={item.icon}></i></Link>
                  ))
                }
               </div>
            
            </div>
            
            </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Contact