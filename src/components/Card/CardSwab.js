import React from 'react'
import {
    CardWrapper,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody
  } from "./Card.elements";

export const CardSwab = ({ title }) => {
  return (
    <>
      <CardWrapper>
        <CardTextWrapper>
          <CardTextDate>Launch App Information</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Trade with the lowest price.
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
    </>
  )
}

export default CardSwab
