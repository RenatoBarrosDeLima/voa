import React, { useState } from 'react';

import {
  ValuesContainer,
  CardValue,
  Input
} from './styles';

const ButtonContribution = ({ changeValue, valueSelected }) => {

  return (
    <ValuesContainer >
      <CardValue onClick={() => changeValue(25)} $isSelected={valueSelected === 25 ? true : false}>
        R$25
      </CardValue>
      <CardValue onClick={() => changeValue(50)} $isSelected={valueSelected === 50 ? true : false}>
        R$50
      </CardValue>
      <CardValue onClick={() => changeValue(80)} $isSelected={valueSelected === 80 ? true : false}>
        R$80
      </CardValue>
      <CardValue onClick={() => changeValue(100)} $isSelected={valueSelected === 100 ? true : false}>
        R$100
      </CardValue>
      <CardValue onClick={() => changeValue(150)} $isSelected={valueSelected === 150 ? true : false}>
        R$150
      </CardValue>
      <CardValue onClick={() => changeValue(200)} $isSelected={valueSelected === 200 ? true : false}>
        R$200
      </CardValue>
      <Input type="number" onChange={(e) => changeValue(e.target.value) } placeholder="Outro valor?" />
    </ValuesContainer>
  )
}

export default ButtonContribution;
