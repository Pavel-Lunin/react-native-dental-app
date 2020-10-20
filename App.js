import React from 'react';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 сентября</GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri:
                'https://sun9-74.userapi.com/impf/c630827/v630827898/47fd0/MICCqD5vt3E.jpg?size=100x0&quality=88&crop=0,0,960,960&sign=e3e88d13ea3d61cf3d06f3b786363f48&ava=1',
            }}
          />
          <FullName>Юлия Рощина</FullName>
        </GroupItem>
      </Group>
    </Container>
  );
}

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;
const GroupItem = styled.Text`
  padding: 20px 0;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Group = styled.View`
  padding: 0 20px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
