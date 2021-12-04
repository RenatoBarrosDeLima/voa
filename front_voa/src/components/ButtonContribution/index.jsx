import React from 'react';

import {
  ValuesContainer,
  CardValue,
  Input
} from './styles';

const ButtonContribution = () => {
  return (
    <ValuesContainer>
      <CardValue> R$25</CardValue>
      <CardValue> R$50</CardValue>
      <CardValue> R$80</CardValue>
      <CardValue> R$100</CardValue>
      <CardValue> R$150</CardValue>
      <CardValue> R$200</CardValue>
      <Input placeholder="Outro valor?" />
    </ValuesContainer>
  )
}

export default ButtonContribution;
