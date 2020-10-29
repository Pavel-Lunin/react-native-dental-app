import React from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

import { Appointment, SectionTitle } from '../components';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://trycode.pw/c/S3ZND.json').then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
          renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
        />
      )}
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
};

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
  elevation: 4;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;
