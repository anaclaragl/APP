import styled from 'styled-components/native'
import colors from './colors'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-Color: ${colors.white};
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
`
export const Text = styled.Text`
    font-size: 15px;
    color: ${colors.white};
    font-weight: 500;
`

export const Text1 = styled.Text`
    font-size: 15px;
    color: ${colors.darkbrown};
    font-weight: 400;
`

export const Text2 = styled.Text`
    font-size: 15px;
    color: ${colors.dgreen};
    font-weight: 400;
`

export const Button = styled.TouchableOpacity`
    background-color: ${colors.blueviolet};
    border-color: ${colors.blue};
`
export const View = styled.View`
  background-color: ${colors.dgreen};
  margin: 40px;
  border-radius: 20px;
  padding: 25px;
  margin-top: 8px;
  align-items: center;
`
