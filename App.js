import React from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Appointment, SectionTitle } from './components';

const DATA = [
  {
    title: '12 октября',
    data: [
      {
        active: true,
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Василий Пупкин',
          avatar:
            'https://sun5-3.userapi.com/impg/feg-pK-1eEUq5X-FUurm3-aMka3Gt7JSBJ-bQQ/JFJW8rB6ABM.jpg?size=50x0&quality=88&crop=216,221,654,654&sign=ed3b66ca325763668cada5ad116d4e65&ava=1',
        },
      },
      {
        time: '15:00',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Евгений Баж',
          avatar:
            'https://sun5-3.userapi.com/impf/c831309/v831309490/19ec77/OKPLUpaEJY4.jpg?size=50x0&quality=88&crop=189,189,1121,1121&sign=31ed12025116af06eab6bff476e9a371&ava=1',
        },
      },
      {
        active: true,
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Василий Пупкин',
          avatar:
            'https://sun5-3.userapi.com/impg/feg-pK-1eEUq5X-FUurm3-aMka3Gt7JSBJ-bQQ/JFJW8rB6ABM.jpg?size=50x0&quality=88&crop=216,221,654,654&sign=ed3b66ca325763668cada5ad116d4e65&ava=1',
        },
      },
      {
        time: '15:00',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Евгений Баж',
          avatar:
            'https://sun5-3.userapi.com/impf/c831309/v831309490/19ec77/OKPLUpaEJY4.jpg?size=50x0&quality=88&crop=189,189,1121,1121&sign=31ed12025116af06eab6bff476e9a371&ava=1',
        },
      },
    ],
  },
  {
    title: '13 октября',
    data: [
      {
        time: '15:30',
        diagnosis: 'удаение зуба мудрости',
        user: {
          fullName: 'Василий Пупкин',
          avatar:
            'https://sun5-3.userapi.com/impg/feg-pK-1eEUq5X-FUurm3-aMka3Gt7JSBJ-bQQ/JFJW8rB6ABM.jpg?size=50x0&quality=88&crop=216,221,654,654&sign=ed3b66ca325763668cada5ad116d4e65&ava=1',
        },
      },
      {
        time: '15:00',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Евгений Баж',
          avatar:
            'https://sun5-3.userapi.com/impf/c831309/v831309490/19ec77/OKPLUpaEJY4.jpg?size=50x0&quality=88&crop=189,189,1121,1121&sign=31ed12025116af06eab6bff476e9a371&ava=1',
        },
      },
      {
        time: '15:30',
        diagnosis: 'удаение зуба мудрости',
        user: {
          fullName: 'Василий Пупкин',
          avatar:
            'https://sun5-3.userapi.com/impg/feg-pK-1eEUq5X-FUurm3-aMka3Gt7JSBJ-bQQ/JFJW8rB6ABM.jpg?size=50x0&quality=88&crop=216,221,654,654&sign=ed3b66ca325763668cada5ad116d4e65&ava=1',
        },
      },
      {
        time: '15:00',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Евгений Баж',
          avatar:
            'https://sun5-3.userapi.com/impf/c831309/v831309490/19ec77/OKPLUpaEJY4.jpg?size=50x0&quality=88&crop=189,189,1121,1121&sign=31ed12025116af06eab6bff476e9a371&ava=1',
        },
      },
      {
        time: '15:30',
        diagnosis: 'удаение зуба мудрости',
        user: {
          fullName: 'Василий Пупкин',
          avatar:
            'https://sun5-3.userapi.com/impg/feg-pK-1eEUq5X-FUurm3-aMka3Gt7JSBJ-bQQ/JFJW8rB6ABM.jpg?size=50x0&quality=88&crop=216,221,654,654&sign=ed3b66ca325763668cada5ad116d4e65&ava=1',
        },
      },
      {
        time: '15:00',
        diagnosis: 'пульпит',
        user: {
          fullName: 'Евгений Баж',
          avatar:
            'https://sun5-3.userapi.com/impf/c831309/v831309490/19ec77/OKPLUpaEJY4.jpg?size=50x0&quality=88&crop=189,189,1121,1121&sign=31ed12025116af06eab6bff476e9a371&ava=1',
        },
      },
    ],
  },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  bottom: 25px;
  right: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5px;
  elevation: 5;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
