import React from 'react';
import { Alert, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import { Input, Item, View } from 'native-base';

import { Appointment, SectionTitle, PlusButton } from '../components';
import { patientsApi, phoneFormat } from '../utils';

const PatientsScreen = ({ route, navigation }) => {
  const { params } = route;
  const [data, setData] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPatients = () => {
    setIsLoading(true);
    patientsApi
      .get()
      .then(({ data }) => {
        setData(data.data);
      })
      .finally((e) => setIsLoading(false));
  };

  React.useEffect(fetchPatients, []);

  React.useEffect(fetchPatients, [params]);

  const onSearch = (e) => {
    setSearchValue(e.nativeEvent.text);
  };

  const removePatient = (id) => {
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
            PatientsApi.remove(id)
              .then(() => {
                fetchPatients();
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
        <>
          <View style={{ padding: 20 }}>
            <Item style={{ paddingLeft: 15, borderRadius: 30 }} regular>
              <Input onChange={onSearch} placeholder="Поиск..." />
            </Item>
          </View>
          <FlatList
            data={data.filter(
              (item) => item.fullname.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
            )}
            keyExtractor={(item) => item._id}
            onRefresh={fetchPatients}
            refreshing={isLoading}
            renderItem={({ item }) => (
              <Swipeable
                rightButtons={[
                  <SwipeViewButton style={{ backgroundColor: '#84C1CB' }}>
                    <Ionicons name="md-create" size={28} color="white" />
                  </SwipeViewButton>,
                  <SwipeViewButton
                    onPress={removePatient.bind(this, item._id)}
                    style={{ backgroundColor: '#F85A5A' }}>
                    <Ionicons name="ios-close" size={48} color="white" />
                  </SwipeViewButton>,
                ]}>
                <Appointment
                  navigate={navigation.navigate}
                  item={{
                    patient: item,
                    diagnosis: phoneFormat(item.phone),
                  }}
                />
              </Swipeable>
            )}
            renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
          />
        </>
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

export default PatientsScreen;
