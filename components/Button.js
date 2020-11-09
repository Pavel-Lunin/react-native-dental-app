import React from 'react';
import styled from 'styled-components/native';

const Button = ({ children, color, onPress }) => {
  return (
    <ButtonWrapper onPress={onPress} color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  color: '#2a86ff',
};

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};
  border-radius: 40px;
  height: 45px;
  color: #fff;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

export default Button;
