import React from 'react'
import { HomeObject } from './Data';
import InfoSections  from '../../infoSection/InfoSections';

const Home = () => {
  return (
    <>
      <InfoSections {...HomeObject}/>
    </>
  )
}

export default Home
