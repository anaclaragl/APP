import styled from 'styled-components/native'
import colors from './colors'


export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.darkbrown};
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white};
    justify-content: center;
    align-items: center;
`

export const Form = styled.KeyboardAvoidingView``
export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
`
export const Label = styled.Text`
  font-size: 18px;
  color: ${colors.darkbrown};
  padding: 5px;
`
export const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  font-size: 18px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 50%;
`

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
`
export const Buto = styled.TouchableOpacity`
    background: ${colors.lgreen};
    border: 2px solid ${colors.white};
    border-radius: 3px;
    color: ${colors.white};
    font-size: 14px;
    text-align: center;
    width: 60px;
    height: 30px;
    box-shadow: 10px 5px 5px ${colors.gray};
    align-self: center;
    margin-top: 8px;
`
export const Teste = styled.Image`
  width: 70px;
  height: 70px;
  align-self: center;
`
export const Buto2 = styled.TouchableOpacity`
  margin-top: 12px;
  align-self: center;
`

export const Buto3 = styled.TouchableOpacity`
    background: ${colors.lgreen};
    border: 2px solid ${colors.white};
    border-radius: 3px;
    color: ${colors.white};
    font-size: 14px;
    text-align: center;
    width: 60px;
    height: 30px;
    box-shadow: 10px 5px 5px ${colors.gray};
    align-self: center;
    margin-top: 8px;
`

export const Footer = styled.View`
    align-items: flex-end;
    flex: 1;
    background-color: ${colors.white};
    flex-direction: row;
`