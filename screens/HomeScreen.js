import React from 'react';
import { Alert, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import { appointmentsApi } from '../utils/api';

import { Appointment, SectionTitle, PlusButton } from '../components';

const HomeScreen = ({ route, navigation }) => {
  const { params } = route;
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastUpdateTime, setLastUpdateTime] = React.useState(null);

  const fetchAppointents = () => {
    setIsLoading(true);
    appointmentsApi
      .get()
      .then(({ data }) => {
        setData(data.data);
      })
      .finally((e) => setIsLoading(false));
  };

  React.useEffect(fetchAppointents, []);

  React.useEffect(fetchAppointents, [params]);

  const removeAppointent = (id) => {
    Alert.alert(
      'Удалить приём',
      'Вы действительно хотите удалить приём?',
      [
        {
          text: 'Отмена',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            setIsLoading(true);
            appointmentsApi
              .remove(id)
              .then(() => {
                fetchAppointents();
              })
              .catch(() => {
                setIsLoading(false);
              });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={(item) => item._id}
          onRefresh={fetchAppointents}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <Swipeable
              rightButtons={[
                <SwipeViewButton style={{ backgroundColor: '#84C1CB' }}>
                  <Ionicons name="md-create" size={28} color="white" />
                </SwipeViewButton>,
                <SwipeViewButton
                  onPress={removeAppointent.bind(this, item._id)}
                  style={{ backgroundColor: '#F85A5A' }}>
                  <Ionicons name="ios-close" size={48} color="white" />
                </SwipeViewButton>,
              ]}>
              <Appointment navigate={navigation.navigate} item={item} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
        />
      )}
      <PlusButton onPress={navigation.navigate.bind(this, 'AddPatient')}>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
};

const SwipeViewButton = styled.TouchableOpacity`
  width: 75px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;
