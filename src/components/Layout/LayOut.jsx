import React from 'react'
import { Fragment } from 'react'
import Header from '../header/Header'
import Routers from '../../routers/Router'
import Fotter from '../fotter/Fotter'
const LayOut = () => {
  return (
    <Fragment>
    <Header/>
     <div>
        <Routers/>
     </div>
    
     <Fotter/>
    </Fragment>
  )
}

export default LayOut