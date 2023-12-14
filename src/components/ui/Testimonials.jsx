import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'
 import test from '../../assets/all-images/test.png'
import '../../styles/testimonial.css'
const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
         slidesToShow: 3 ,
         slidesToScroll: 1,
         
         responsive: [
        {
          breakpoint: 992,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
},
        },

        {
            breakpoint: 576 ,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             dots: true,
             autoplay: false,
  },       
          },






         ]
       
        };
  
  
  
   return <Slider {...settings}>
   <div className="testimonial py-4 px-3">
    <p className="section-description">
    Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:
</p>
    <div className="mt-3 d-flex align-items-center gap-4">
        <img src={test} alt=""  className='w-25 h-25 rounded-2'/>
    <div>
    <h6 className="mb-0 mt-3">Jhon Doe</h6>
     <p className="section-description">
        Customer
     </p>
     </div>
     </div>
   </div>

   <div className="testimonial py-4 px-3">
    <p className="section-description">
    Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:
</p>
    <div className="mt-3 d-flex align-items-center gap-4">
        <img src={test} alt=""  className='w-25 h-25 rounded-2'/>
    <div>
    <h6 className="mb-0 mt-3">Jhon Doe</h6>
     <p className="section-description">
        Customer
     </p>
     </div>
     </div>
   </div>


   <div className="testimonial py-4 px-3">
    <p className="section-description">
    Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:
</p>
    <div className="mt-3 d-flex align-items-center gap-4">
        <img src={test} alt=""  className='w-25 h-25 rounded-2'/>
    <div>
    <h6 className="mb-0 mt-3">Jhon Doe</h6>
     <p className="section-description">
        Customer
     </p>
     </div>
     </div>
   </div>


   <div className="testimonial py-4 px-3">
    <p className="section-description">
    Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:
</p>
    <div className="mt-3 d-flex align-items-center gap-4">
        <img src={test} alt=""  className='w-25 h-25 rounded-2'/>
    <div>
    <h6 className="mb-0 mt-3">Jhon Doe</h6>
     <p className="section-description">
        Customer
     </p>
     </div>
     </div>
   </div>
  
  
    


  </Slider>
}

export default Testimonials