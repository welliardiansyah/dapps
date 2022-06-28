import React from 'react'
import {
    CardWrapper,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody
  } from "./Card.elements";

export const CardFarm = ({title}) => {
  return (
    <>
    <CardWrapper>
        <CardTextWrapper>
          <CardTextDate>Launch App Information</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Earn doble rewards.
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
    </>
  )
}

export default CardFarm
