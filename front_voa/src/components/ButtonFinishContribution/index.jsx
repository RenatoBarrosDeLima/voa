import React from 'react';

import {
  GridButtonFinish,
  GridRowButtonFinish,
  GridColButtonFinish,
  ButtonFinish,
  TextPFinish

} from './styles'

const ButtonFinishContribution = ({ handleFinishContribution }) => {
  return (
    <GridButtonFinish>
      <GridRowButtonFinish>
        <GridColButtonFinish>
          <ButtonFinish onClick={() => handleFinishContribution()}>
            <TextPFinish>
              FINALIZAR CONTRIBUIÇÃO
            </TextPFinish>
          </ButtonFinish>
        </GridColButtonFinish>
      </GridRowButtonFinish>
    </GridButtonFinish>
  )
}

export default ButtonFinishContribution;
