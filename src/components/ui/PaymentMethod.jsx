import React from 'react'
import MasterCard from '../../assets/all-images/master-card.jpg'
import PayPal     from '../../assets/all-images/paypal.jpg'
 import '../../styles/paymentmethod.css'
const PaymentMethod = () => {
  return <>
    <div className="payment">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
         <input type="radio" /> Direct Bank Transfer
         </label>
    </div>
    <div className="payment mt-3">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
         <input type="radio" /> Cheque Payment
         </label>
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
         <input type="radio" /> Master Card
         <img src={MasterCard} alt="" />
         </label>
    </div>
  
    <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
         <input type="radio" /> Pay Pal
         <img src={PayPal} alt="" />
         </label>
    </div>
    <div className='payment text-end mt-5'>
     <button>Reserve Now</button>
    </div>
  </>
}

export default PaymentMethod