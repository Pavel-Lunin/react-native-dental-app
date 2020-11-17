import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import GrayText from './GrayText.js';
import Badge from './Badge';
import getAvatarColor from '../utils/getAvatarColor.js';

const Appointment = ({ navigate, item }) => {
  const { patient, diagnosis, active, time } = item;
  const avatarColors = getAvatarColor(patient.fullname[0]);
  return (
    <GroupItem onPress={() => navigate('Patient', item)}>
      <Avatar
        style={{
          backgroundColor: avatarColors.background,
        }}>
        <Letter style={{ color: avatarColors.color }}>{patient.fullname[0]}</Letter>
      </Avatar>
      <View style={{ flex: 1 }}>
        <FullName>{patient.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      {time && <Badge active={active}>{time}</Badge>}
    </GroupItem>
  );
};

const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const FullName = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
`;

const Avatar = styled.View`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`;
const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
