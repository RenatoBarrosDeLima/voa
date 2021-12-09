import React from 'react';

// COMPONENTES CUSTOMIZADOS
import {
  Content,
  Span,
  Button,
  TextH1,
  Checkbox
} from './styles';

const Calendar = ({ setStartDate, setEndDate, handleFilterDate, setIsFilterReversal, isFilterReversal }) => {
  return (
    <>
      <Content>
        <Span> Data Inicial</Span>
        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </Content>
      <Content>
        <Span> Data Final</Span>
        <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      </Content>

      <Content>
        <Span> Com estorno?</Span>
        <Checkbox onChange={() => setIsFilterReversal(!isFilterReversal)} type="checkbox" />
      </Content>

      <Content>
        <Span> Clique para: </Span>
        <Button onClick={() => handleFilterDate()}> Pesquisar </Button>
      </Content>

    </>
  )

}

export default Calendar;
