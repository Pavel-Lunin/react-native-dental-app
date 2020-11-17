import React from 'react';
import { Item, Input, Label } from 'native-base';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { patientsApi } from '../utils/api';
import { Button, Container } from '../components';
import { Text } from 'react-native';

const AddPatientScreen = ({ navigation }) => {
  const [values, setValues] = React.useState({});

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setValues({
      ...values,
      [name]: text,
    });
  };

  const onSubmit = () => {
    patientsApi
      .add(values)
      .then(() => {
        navigation.navigate('Home');
        alert('Пациент добавлен');
      })
      .catch((e) => {
        alert('BAD');
      });
  };

  return (
    <Container>
      <Item style={{ marginLeft: 0 }} floatingLabel>
        <Label>Имя и фамилия</Label>
        <Input
          onChange={handleChange.bind(this, 'fullname')}
          value={values.fullname}
          style={{ marginTop: 11 }}
          autoFocus
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>Номер телефона</Label>
        <Input
          onChange={handleChange.bind(this, 'phone')}
          value={values.phone}
          keyboardType="phone-pad"
          dataDetectorTypes="phoneNumber"
          style={{ marginTop: 11 }}
        />
      </Item>
      <ButtonView>
        <Button onPress={onSubmit} color="#87CC6F">
          <AntDesign name="plus" size={15} color="white" />
          <Text>Добавить</Text>
        </Button>
      </ButtonView>
    </Container>
  );
};

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export default AddPatientScreen;
