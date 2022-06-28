import React from 'react'
import {
    CardWrapper,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody
  } from "./Card.elements";

export const CardLiquidity = ({title}) => {
  return (
    <>
    <CardWrapper>
        <CardTextWrapper>
          <CardTextDate>Launch App Information</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Start earning from fees
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>  
    </>
  )
}

export default CardLiquidity
