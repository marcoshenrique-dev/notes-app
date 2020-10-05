import styled from 'styled-components/native';

export const Container = styled.View``;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-top: 40px;
  color: white;
  margin-left: 40px;
`;
export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 30px;
  padding: 0px 20px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  color: #333;
  background-color: #fff;
`;
export const Submit = styled.TouchableOpacity`
  background-color: #bd93f9;
  border-radius: 4px;
  margin-left: 10px;
  justify-content: center;
  padding: 0 14px;
`;
export const TextButton = styled.Text`
  color: white;
`;
