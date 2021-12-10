import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap';

// API
import api from '../../services/api';

// FUNCTIONS UTILS
import {
  dateValidation,
} from '../../utils/functions';

// COMPONENTES
import Header from '../../layout/Header';
import Loading from '../../components/LoadingScreen';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Form,
  Button
} from './styles';

// HOOKS
import { useAuth } from '../../hooks/useAuth';

const CreateCampaign = () => {

  const history = useHistory();
  const { getAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const user = getAuth();

  const handleCreateCampaign = () => {

    if (
      title == '' ||
      description == '' ||
      image == '' ||
      goal == '' ||
      category == '' ||
      deadline == ''
    ) {
      return window.alert('Preenha todas as informações para continuar!');
    }

    const isDateValid = dateValidation(new Date(), deadline);

    if (!isDateValid) {
      return window.alert('Data do prazo final é inválido');
    }

    const body = {
      title: title,
      description: description,
      image: image,
      goal: goal,
      category: category,
      deadline: deadline,
      user_id: user.id,
    };

    setLoading(true);

    api.post(`/campaigns/`, {
      ...body
    })
      .then(response => {
        setLoading(false);
        history.push('/');
        return window.alert('Campanha cadastrada com sucesso');
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao criar a campanha!');
      })


  }

  return (
    <>
      <Loading loading={loading} />
      <Header />
      <Container>
        <Form>
          <FormGroup row>
            <Label sm={2}> Título </Label>
            <Col sm={10}>
              <Input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Informe o Título da campanha" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}> Descrição </Label>
            <Col sm={10}>
              <Input onChange={(e) => setDescription(e.target.value)} type="textarea" placeholder="Informe a Descrição da campanha" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}> URL da imagem </Label>
            <Col sm={10}>
              <Input onChange={(e) => setImage(e.target.value)} type="text" placeholder="Informe a URL da imagem da campanha" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}> Meta de arrecadação </Label>
            <Col sm={10}>
              <Input onChange={(e) => setGoal(e.target.value)} type="number" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}> Categoria </Label>
            <Col sm={10}>
              <Input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Descreva a categoria da campanha" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}> Prazo Final </Label>
            <Col sm={10}>
              <Input onChange={(e) => setDeadline(e.target.value)} type="date" />
            </Col>
          </FormGroup>

          <FormGroup row >
            <Col>
              <Button onClick={() => handleCreateCampaign()}> Criar </Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>

    </>

  )
}

export default CreateCampaign;
