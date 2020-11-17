import React from 'react';
import { Item, Input, Label, Picker, Icon } from 'native-base';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/ru';

import { appointmentsApi } from '../utils/api';
import { Button, Container } from '../components';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const AddAppointmentScreen = ({ route, navigation }) => {
  const { patientId } = route.params;

  const [values, setValues] = React.useState({
    diagnosis: 'пульпит',
    dentNumber: '',
    price: '',
    date: null,
    time: null,
    patient: patientId,
  });

  const fieldsName = {
    diagnosis: 'Диагноз',
    dentNumber: 'Номер зуба',
    price: 'Цена',
    date: 'Дата',
    time: 'Время',
  };

  const setFieldValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleInputChange = (name, e) => {
    const text = e.nativeEvent.text;
    setFieldValue(name, text);
  };

  const onSubmit = () => {
    appointmentsApi
      .add(values)
      .then(() => {
        navigation.navigate('Home', { lastUpdate: new Date() });
      })
      .catch((e) => {
        if (e.response.data && e.response.data.message) {
          e.response.data.message.forEach((err) => {
            const fieldName = err.param;
            alert(`Ошибка! Поле "${fieldsName[fieldName]}" указано неверно.`);
          });
        }
      });
  };

  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setFieldValue(
      mode == 'date' ? 'date' : 'time',
      mode == 'time' ? date.toTimeString().slice(0, 5) : moment(date).format('yyyy-MM-DD'),
    );
  };

  React.useEffect(() => {
    onChange();
  }, [date]);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Container>
      <Item style={{ marginLeft: 0 }} floatingLabel>
        <Label>Номер зуба</Label>
        <Input
          onChange={handleInputChange.bind(this, 'dentNumber')}
          value={values.fullname}
          style={{ marginTop: 11 }}
          keyboardType="numeric"
          autoFocus
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>Цена</Label>
        <Input
          onChange={handleInputChange.bind(this, 'price')}
          value={values.phone}
          keyboardType="numeric"
          style={{ marginTop: 11 }}
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          placeholder="Выберите диагноз"
          placeholderStyle={{
            color: '#bfc6ea',
            fontSize: 18,
          }}
          placeholderIconColor="#007aff"
          style={{
            width: '100%',
            fontSize: 18,
          }}
          onValueChange={setFieldValue.bind(this, 'diagnosis')}
          selectedValue={values.diagnosis}>
          <Picker.Item label="пульпит" value="пульпит" />
          <Picker.Item label="удаление зуба" value="удаление зуба" />
          <Picker.Item label="чистка" value="чистка" />
          <Picker.Item label="пломбирование" value="пломбирование" />
          <Picker.Item label="протезирование" value="протезирование" />
        </Picker>
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <TimeRow>
          <View style={{ flex: 1 }}>
            <Button color={'transparent'} onPress={showDatepicker}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                }}>
                {date.toLocaleDateString()}
              </Text>
            </Button>
          </View>
          {show && (
            <RNDateTimePicker
              value={date}
              mode={mode}
              placeholder="Дата"
              is24Hour={true}
              display="default"
              minimumDate={new Date()}
              onChange={(setFieldValue.bind(this, { mode }), onChange)}
            />
          )}
          <View style={{ flex: 1 }}>
            <Button color={'transparent'} onPress={showTimepicker}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                }}>
                {date.toTimeString().slice(0, 5)}
              </Text>
            </Button>
          </View>
          {show && (
            <RNDateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              minimumDate={new Date()}
              onChange={(setFieldValue.bind(this, { mode }), onChange)}
            />
          )}
        </TimeRow>
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

const TimeRow = styled.View`
  flex-direction: row;
`;

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export default AddAppointmentScreen;
