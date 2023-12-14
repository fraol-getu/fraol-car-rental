import React, { useState } from 'react'
 import { Container, Row, Col } from 'reactstrap'
 import { Link, NavLink } from 'react-router-dom'
 import "../../styles/header.css"
 
 
 const navLinks = [
 {
 path:'/home',
 display: 'Home'
 },

 {
  path:'/about',
  display: 'About'
  },

  {
    path:'/cars',
    display: 'Cars'
    },

    {
      path:'/blogs',
      display: 'Blog'
      },
     
      {
       path:'/contact',
       display: 'Contact'
       },
     
      
 ]
 
 
 
 
 
 
 
 
 
 
 
 const Header = () => {
  
  const  [menuopen, SetMenuOpen] = useState(false)
  
  return <header className='header'>
   <div className="header-top">
   <Container>
    <Row>
  <Col lg='6' md='6' sm='6'>
   <div className="header-top-left">
   <span>Need Help?</span>
    <span className="header-top-help">
      <i class="ri-phone-fill "></i> +251928696488
    </span>
   </div>
</Col>
    
<Col lg='6' md='6' sm='6'>
  <div className="header-top-right d-flex aligm-items-center justify-content-end gap-3">
  <Link to="#" className='d-flex align-items-center gap-1'> <i class="ri-login-circle-line"></i> Login </Link>
  <Link to="#" className='d-flex align-items-center gap-1'> <i class="ri-user-line"></i> Register </Link>
   </div>
  </Col>
</Row>
 </Container>
</div>
{/* header middle */}
<div className="header-middle">
<Row>
<Col lg='4' md='3' sm='4'>
<div className="logo">
 <h1><Link to="/home" className='d-flex align-items-center gap-2'>
   <i class='ri-car-line'></i>
  <span>Rent Car <br/> Service</span>
  </Link></h1>
</div>
</Col>
<Col lg='3' md='3' sm='4'>
 <div className="header-location d-flex align-items-center gap-2" >
  <span><i class='ri-earth-line'></i></span>
    <div className="header-location-content">
      <h4>Ethiopa</h4>
      <h6>AddisAbaba City, Ethiopa</h6>
    </div>
 </div>
</Col>
<Col lg='3' md='3' sm='4'>
 <div className="header-location d-flex align-items-center gap-2">
  <span><i class='ri-time-line'></i></span>
    <div className="header-location-content">
      <h4>Sunday to Friday</h4>
      <h6>10am - 7pm</h6>
    </div>
 </div>
</Col>
<Col lg="2" md="3" sm="0" className='text-end d-flex align-items-center justify-content-end'>
  <button className='header-btn btn'>
  <Link to="/contact">
    <i className='ri-phone-line'></i> Reqest a call
  </Link>
  </button>
  </Col>
</Row>
</div>
 {/* main navigation */}
  <div className="main-navbar">
   <Container>
   
   <div className="navigation-wrapper d-flex align-items-center justify-content-between">
<span className='mobile-menu' onClick={() => {SetMenuOpen(!menuopen)}}>
{menuopen ? (<i class="ri-close-line" style={{color:menuopen ? "black" : "white",}}></i>)  : (<i class='ri-menu-line'></i>) }
</span>

  <div className="navigation" style={{zIndex:menuopen ? "76" : "-76"}}>

   <div className={menuopen ? "media-menu" : "menu"}>

    {navLinks.map((items, i) => (
     <NavLink to={items.path} key={i} className={navClass => navClass.isActive
    ? 'nav-active nav-item': 'nav-item'}>{items.display}</NavLink>
 ))}
  </div>
</div>

  <div className="nav-right">
    <div className="search-box"> 
    <input type="text" placeholder='Search'/>
     <span>
      <i class="ri-search-line"></i>
     </span>
     </div>
    </div> 
   
   
   
   
   
   </div>



   </Container>




  </div>
  
  </header>
  
  
}

export default Header