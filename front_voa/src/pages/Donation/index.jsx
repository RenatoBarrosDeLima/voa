import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// API
import api from '../../services/api';


// FUNCTIONS UTILS
import {
  daysRemaining,
  moneyFormat,
  calculatePercentageNumber,
  calculatePercentageString
} from '../../utils/functions';

// COMPONENTES
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ButtonContribution from '../../components/ButtonContribution';
import Loading from '../../components/LoadingScreen';
import ContainerResume from './components/ContainerResume';
import ColLeft from './components/ColLeft';

// HOOKS
import { useCart } from '../../hooks/useCart';
import { useCampaign } from '../../hooks/useCampaign';
import { useQuery } from '../../hooks/useQueryURL';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Content,
  Body,
  GridContainer,
  GridRow,
  ColRight,
  BlurContainer,
  ContentRight,
  GridContainerDonation,
  TextCategory,
  ContainerCardProgressBar,
  ValueCollected,
  ValueCollectedText,
  ValueCollectedPercent,
  ProgressBar,
  Progress,
  ContentDetail,
  GoalDetail,
  GoalValue,
  GoalText,
  TextValue,
  Anonymous,
  CheckBoxWrapper,
  TextAnonymous,
  TextHide,
  ContainerButtons,
  ButtonFinish
} from './styles';

const Donation = () => {

  const history = useHistory();
  const query = useQuery();
  const { onAddToCart } = useCart();
  const { onAddToCampaign } = useCampaign();
  const [loading, setLoading] = useState(false);
  const [valueSelected, setValueSelected] = useState("");
  const [campaign, setCampaign] = useState([]);
  const [anonymous, setAnonymous] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/campaigns/${query.get('id')}`)
      .then(response => {
        setCampaign(response?.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao listar as campanhas.');
      })
  }, [])

  const changeValue = (item) => {
    setValueSelected(item);
  }

  const finishContribution = () => {
    if (!valueSelected) {
      return window.alert('Escolha um valor para doação');
    }
    onAddToCart(query.get('id'), valueSelected, anonymous);
    onAddToCampaign(campaign);
    history.push('/finish');
  }

  return (
    <>
      <Loading loading={loading} />
      <Container>
        <Header />
        <Content>
          <Body>
            <GridContainer>
              <GridRow>

                <ColLeft campaign={campaign}/>

                <ColRight>
                  <BlurContainer>
                    <ContentRight>

                      <GridContainerDonation>
                        <TextCategory> {campaign?.category} </TextCategory>

                        <ContainerCardProgressBar>
                          <ValueCollected>
                            <ValueCollectedText>{moneyFormat(campaign?.total_collected)} </ValueCollectedText>
                            <ValueCollectedPercent>{calculatePercentageString(campaign?.goal, campaign?.total_collected)} </ValueCollectedPercent>

                          </ValueCollected>
                        </ContainerCardProgressBar>

                        <ProgressBar>
                          <Progress $progress={calculatePercentageNumber(campaign?.goal, campaign?.total_collected)} />
                        </ProgressBar>

                        <ContentDetail>
                          <GoalDetail>
                            <GoalValue> {moneyFormat(campaign?.goal)} </GoalValue>
                            <GoalText> META</GoalText>
                          </GoalDetail>

                          <GoalDetail>
                            <GoalValue>{daysRemaining(campaign?.deadline)}</GoalValue>
                          </GoalDetail>

                        </ContentDetail>

                        <TextValue> Quero contribuir com </TextValue>

                        <ButtonContribution changeValue={changeValue} valueSelected={valueSelected} />

                        <Anonymous>
                          <CheckBoxWrapper>
                            <input onChange={() => setAnonymous(!anonymous)} type="checkbox" />
                          </CheckBoxWrapper>

                          <TextAnonymous>
                            Fazer contribuição anônima
                            <br></br>
                            <TextHide>(ocultar o seu nome para o público)</TextHide>
                          </TextAnonymous>

                        </Anonymous>

                      </GridContainerDonation>

                      <ContainerResume valueSelected={valueSelected} />

                      <ContainerButtons>
                        <ButtonFinish onClick={() => finishContribution()}> FINALIZAR CONTRIBUIÇÃO </ButtonFinish>
                      </ContainerButtons>

                    </ContentRight>
                  </BlurContainer>
                </ColRight>
              </GridRow>
            </GridContainer>
          </Body>

          <Footer />
        </Content>
      </Container>
    </>
  )
}

export default Donation;
