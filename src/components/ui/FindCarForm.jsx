import React from 'react'
import '../../styles/findcarform.css'
import '../../styles/findcarform.css'
import { Form, FormGroup } from 'reactstrap'
const FindCarForm = () => {
  return <Form className='form'>
  <div className="d-flex align-items-center justify-content-between flex-wrap">
    <FormGroup className='form-group'>
    <input type="text" placeholder='From adress' required />
    </FormGroup>
    <FormGroup className='form-group'>
    <input type="text" placeholder='TO adress' required />
    </FormGroup>
    <FormGroup className='form-group'>
    <input type="date" placeholder='Journey date' required />
    </FormGroup>
    <FormGroup className='form-group'>
    <input className='journey-time' type="time" placeholder='Journey time' required />
    </FormGroup>
    <FormGroup className='select-group'>
    <select>
      <option value="ac">Ac Car</option>
      <option value="non-ac">NonAc Car</option>
    </select>
    </FormGroup>
    <FormGroup className='form-group'>
    <button className="btn find-car-btn">
      Find Car
    </button>
  

    </FormGroup> 
  </div>



  </Form>
}

export default FindCarForm 