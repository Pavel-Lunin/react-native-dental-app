import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import GrayText from './GrayText.js';
import Badge from './Badge';

const Appointment = ({ navigate, item }) => {
  const { user, diagnosis, active, time } = item;
  return (
    <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  );
};

const FullName = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
