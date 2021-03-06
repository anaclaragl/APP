import { StackNavigationProp } from "@react-navigation/stack"
export type InitStackParamList = {
    Cadastro: undefined
    Login: undefined
}

type InitNavigationProp = StackNavigationProp<InitStackParamList>
export type InitTypes = {
    navigation: InitNavigationProp
}