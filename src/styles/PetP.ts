import styled from 'styled-components/native'
import colors from './colors'

export const Cancela = styled.TouchableOpacity`

`

export const Cancel = styled.Text`
    color: #4DAA45;
    font-size: 16px;
    text-decoration-line: underline;
    left: 10px;
    top: 20px;
`

export const Header = styled.View`
    background-color: white;
    flex-direction: row;
    align-self: flex-start;
`

export const Plubi = styled.TouchableOpacity`
    background: ${colors.lgreen};
    border: 2px solid #FFFFFF;
    border-radius: 3px;
    color: ${colors.white};
    font-size: 14px;
    text-align: center;
    width: 60px;
    height: 30px;
    left: 200px;
    margin-top: 2px;
`

export const Footer = styled.View`
    align-items: flex-end;
    flex: 1;
    background-color: white;
    flex-direction: row;
`

export const Cam = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 310 px;
`
export const CamB = styled.TouchableOpacity`
`

export const Galeria = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 250 px;
`