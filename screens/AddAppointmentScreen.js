import React from 'react';
import { Item, Input, Label, Picker, Icon, View } from 'native-base';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

import { appointmentsApi } from '../utils/api';
import { Button, Container } from '../components';
import DatePicker from 'react-native-datepicker';

const AddAppointmentScreen = ({ navigation }) => {
  const [values, setValues] = React.useState({});

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setValues({
      ...values,
      [name]: text,
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
        navigation.navigate('Home');
        alert('OK');
      })
      .catch((e) => {
        alert('BAD');
      });
  };

  const setFieldValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container>
      <Item style={{ marginLeft: 0 }} floatingLabel>
        <Label>Номер зуба</Label>
        <Input
          onChange={handleChange.bind(this, 'dentNumber')}
          value={values.fullname}
          style={{ marginTop: 11 }}
          keyboardType="numeric"
          autoFocus
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          placeholder="Выберите диагноз"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          style={{ width: '100%' }}>
          <Picker.Item label="пульпит" value="key0" />
          <Picker.Item label="удаление зуба" value="key1" />
          <Picker.Item label="чистка" value="key2" />
          <Picker.Item label="пломбирование" value="key3" />
          <Picker.Item label="протезирование" value="key4" />
        </Picker>
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>Цена</Label>
        <Input
          onChange={handleChange.bind(this, 'price')}
          value={values.phone}
          keyboardType="numeric"
          style={{ marginTop: 11 }}
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <TimeRow>
          <View style={{ flex: 1 }}>
            <DatePicker
              date={new Date()}
              mode="date"
              placeholder="Дата"
              format="YYYY-MM-DD"
              minDate={new Date()}
              confirmBtnText="Сохранить"
              cancelBtnText="Отмена"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                },
                dateText: {
                  fontSize: 18,
                },
              }}
              date={values.date}
              onDateChange={setFieldValue.bind(this, 'date')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <DatePicker
              mode="time"
              placeholder="Время"
              format="HH:mm"
              minDate={new Date()}
              confirmBtnText="Сохранить"
              cancelBtnText="Отмена"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                },
                dateText: {
                  fontSize: 18,
                },
              }}
              date={values.time}
              onDateChange={setFieldValue.bind(this, 'time')}
            />
          </View>
        </TimeRow>
      </Item>
      {/*<Item style={{ marginTop: 20, marginLeft: 0 }}>
        <TimeRow>
          <TouchableOpacity title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TimeRow>
      </Item>*/}
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
