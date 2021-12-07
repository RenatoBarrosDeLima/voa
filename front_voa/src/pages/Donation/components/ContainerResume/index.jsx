import React from 'react';

// FUNCTIONS UTILS
import { moneyFormat } from '../../../../utils/functions';

// COMPONENTES CUSTOMIZADOS
import {
  ContainerDonationResume,
  ContentDonationResume,
  GridInlineResume,
  TextTitleResume,
  TextContribution,
  TextContributionValue,
  ContributionTotalResume,
  ContributionTotalResumeTitle,
  ContributionTotalResumeValue,
} from './styles';

const ContainerResume = ({ valueSelected }) => {

  return (
    <>
      <ContainerDonationResume>
        <ContentDonationResume>
          <GridInlineResume>
            <TextTitleResume>
              Resumo da doação:
            </TextTitleResume>
          </GridInlineResume>

          <GridInlineResume>
            <TextContribution>
              Sua contribuição
            </TextContribution>
            <TextContributionValue>
              {moneyFormat(valueSelected)}
            </TextContributionValue>
          </GridInlineResume>
        </ContentDonationResume>

        <ContributionTotalResume>
          <ContributionTotalResumeTitle> VALOR TOTAL </ContributionTotalResumeTitle>
          <ContributionTotalResumeValue>  {moneyFormat(valueSelected)} </ContributionTotalResumeValue>
        </ContributionTotalResume>
      </ContainerDonationResume>
    </>

  )
}

export default ContainerResume;
