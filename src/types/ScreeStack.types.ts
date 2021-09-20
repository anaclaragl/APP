import { StackNavigationProp } from "@react-navigation/stack"
export type InitStackParamList = {
    Cadastro: undefined 
    Login: undefined 
    Profile: undefined 
    PetP: undefined 
    TimeLine: undefined 
    ONG: undefined 
    Mensagem: undefined 
    Criar: undefined 
    Camera: undefined
}

type InitNavigationProp = StackNavigationProp <InitStackParamList>
export type InitTypes = { 
    navigation: InitNavigationProp 
}