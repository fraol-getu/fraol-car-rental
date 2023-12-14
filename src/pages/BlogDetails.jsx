import React, {useEffect} from 'react'
import { Container,Row,Col, Form, FormGroup, Input } from 'reactstrap'
import { useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import Helmet from '../components/helmet/Helmet'
import Commentimg from '../assets/all-images/test.png'
 import '../styles/blogdetails.css'
 import { Link } from 'react-router-dom'
const BlogDetails = () => {
  const {slug} = useParams()
  const blog = blogData.find((blog ) => blog.title === slug)

  useEffect(() =>{
    window.scrollTo(0,0)
  }, [blog])
 
  
  return <Helmet >
   <section>
   <Container>
      <Row>
        <Col lg='8' md='8' >
        <div className="blog-details">
          <img src={blog.imgUrl} alt="" className='w-100' />
          <h2 className='section-title mt-4'>{blog.title}</h2>
        <div className="blog-publisher d-flex align-items-center gap-4 mb-4">
        <span className="blog-author">
            <i class='ri-user-line'></i> {blog.author}
        </span>
      
            <span className="d-flex align-items-center gap-1">
            <i className='ri-caleandar-line'></i> {blog.date}
            
            </span>
            <span className="d-flex align-items-center gap-1">
            <i className='ri-time-line'></i> {blog.time}
            
            </span>
        
        </div>
        <p className="section-description">{blog.description}</p>
          <h6 className="ps-5 fw-normal">
            <blockquote className='fs-4'>{blog.quote}</blockquote>
          </h6>
        </div>
        <div className="comment-list mt-5">
          <h4 className="mb-5">
            3 Comments
          </h4>
          <div className="comment-content">
            <h6>David Visa</h6>
            <p className="section-description mb-0">14 July, 2022</p>
            <p className="section-description"> Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:</p>
          </div>
          <div className="single-comment d-flex gap-3">
            <img src={Commentimg} alt="" />
          <div className="comment-content">
            <h6 className="fw-bold">David Visa</h6>
            <p className="section-description mb-0">14 July, 2022</p>
            <p className="section-description"> Fraol car rental company, catering to both tourists and locals seeking reliable and affordable transportation. With a diverse range of companies offering various services, choosing the right one can be overwhelming. Here's a glimpse into the Ethiopian car rental scene:</p>
            <span className="replay d-flex align-items-center gap-1">
             <i class="ri-replay-line"></i> Replay 
          </span>
          </div>
          </div>
        <div className="leave-comment-form mt-5">
          <h4>Leave a Comment</h4>
          <p className="section-description">You must sign-in to make or comment a post </p>
        <Form>
          <FormGroup className='d-flex gap-3'>
           <Input type="text" placeholder='full name' />
           <Input type="email" placeholder='Email' />
          </FormGroup>
          <FormGroup>
            <textarea rows="5" className='w-100' placeholder='comment...'></textarea>
          </FormGroup>
         <button className="btn comment-btn mt-3">post a Comment</button>
        </Form>
          
        </div>
        </div> 
        </Col>
        <Col lg='4' md='4'>
         <div className="recent-post mb-4">
          <h5 className='fw-bold'>Recent Posts</h5>
         </div>
         
          {
         blogData.map((item) => (
          <div className="recent-blog-post mb-4" key={item.id}>
          <div className="recent-blog-item d-flex gap-3">
            <img src={item.imgUrl} alt="" className='w-25 rounded-2' />
            <h6><Link to={`/blogs/${item.title}`}>{blog.title}</Link></h6>
          </div>

          </div>
         ))

          }
        
        
        </Col>
      </Row>  


    </Container>
   </section>
  </Helmet>
}

export default BlogDetails