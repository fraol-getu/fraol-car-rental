import React from 'react'
import { Container, Row, Col } from 'reactstrap'
 import Helmet from '../components/helmet/Helmet'
 import CommonSection from '../components/ui/CommonSection'
import carData from '../assets/data/carData'
import Caritem from '../components/ui/Caritem'
 const CarListng = () => {
  return <Helmet title="cars">
          <CommonSection title="car Listing" />
          <section>
            <Container>
              <Row>
                <Col lg='12'>
                 <div className="d-flex align-items-center gap-3 mb-5">
                  <span className='d-flex align-items-center gap-2'><i class="ri-sort-asc"></i> Sort By</span>
                  <select>
                    <option>Select</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                    </select>
                 </div>
                
                </Col>
                {
                  carData.map(item=> <Caritem item={item} key={item.id} />)
                }
              </Row>
            </Container>
          </section>
         

  </Helmet>
}

export default CarListng