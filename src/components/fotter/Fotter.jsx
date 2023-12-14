import React from 'react'
 import {  Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap'
 import { Link } from 'react-router-dom'
 import '../../styles/footer.css'  
  const date = new Date()
  const year = date.getFullYear()
  const QuickLinks = [
    {
     path:'/about',
    diplay:"About"
    },
   
    {
      path:'#',
      diplay:"Priva Policy"
     },
 
     {
      path:'/cars',
     diplay:"Car Listing"
     },
     {
      path:'/blog',
     diplay:"Blogs"
     },
     {
      path:'/contact',
     diplay:"Contact"
     },
 
  ]
 

  const Fotter = () => {
  return (
    <footer className="footer">
    <Container>
    <Row>
    <Col lg='4' md='4' sm='12'>
     <div className="logo footer-logo">
     <h1><Link to="/home" className='d-flex align-items-center gap-2'>
   <i class='ri-car-line'></i>
  <span>Rent Car <br/> Service</span>
  </Link></h1>

     </div>
     <p className="footer-logo-content">
     Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:
     </p>
      
    </Col>
   <Col lg='2' md='4' sm='6'>
    <div className="mb-4">
      <h5 className="footer-link-title">Quick Links</h5>
       <ListGroup>
       {QuickLinks.map((items, i) => (
      <ListGroupItem key={i} className='quick-link mt-3 pt-0'>
      <Link to={items.path} className='p-0 mt-3'>{items.diplay}</Link>
      </ListGroupItem>
       ))}
    </ListGroup>
      </div>
</Col>

    <Col lg="3" md="4" sm="6">
     <div className="mb-4">
      <h5 className="footer-link-title mb-4">Head office</h5>
     <p className="office-info">Bole mafimall,  AddisAbaba,  Ethiopa</p>
     <p className="office-info">Phone: +251928696488</p>
    <p className="office-info">Email: frraol03@gmail.com</p>
     <p className="office-info">Office Time: 10am - 7pm</p>
     </div>
    
    
    </Col>
    <Col lg="3" md="4" sm="12">
     <div className="mb-4 p-0">
       <h5 className="footer-link-title mb-4">News Our letter</h5>
      <p className="section-description">Subscribe Our Newsletter</p>
      <div className="news-letter">
       <input type='email' placeholder='Email' /><span><i class="ri-send-plane-line"></i></span>

      </div>
     </div>
     </Col>
     <Col lg="12">
     <div className="footer-bottom">
      <p className="section-description d-flex align-items-center justify-content-center gap-1 pt-4">
        <i class="ri-copyright-line"></i>Copyright {year} , Devloped by Fraol Getu. All rights resrved.
      </p>
     </div>





     </Col>
    
    </Row>




    </Container>




    </footer>
  )
}

export default Fotter