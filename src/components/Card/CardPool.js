import React from 'react';
import {
    CardWrapper,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody
  } from "./Card.elements";

export const CardPool = ({title}) => {
  return (
    <>
      <CardWrapper>
        <CardTextWrapper>
          <CardTextDate>Launch App Information</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Use your tokens to get more tokens.
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
    </>
  )
}

export default CardPool
