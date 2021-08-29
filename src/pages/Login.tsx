import React from "react";
import { useNavigation } from "@react-navigation/core";
import {Container, Text, Text1} from "../styles/Container"
import {Buto2, Buto3, Buto, Logo, FormRow, Label, TextInput, Title, Form} from "../styles/Login";


const Login:React.FC=()=>{
    const navigation = useNavigation();
    function handleNavigation(params: string){
      if (params === 'Buto'){
        navigation.navigate('Profile');
      } else if (params === 'Buto3'){
          navigation.navigate('PetP');
      } else {(params === 'Buto2')
          navigation.navigate('Cadastro');
      }
    }
    return (
        <Container>
          <Form>
          <Logo
                    source={
                        require("../../assets/logo.png")      
                    }
                />
            <Title>LOGIN</Title>
            <FormRow>
              <Label>E-mail</Label>
              <TextInput placeholder="e-mail"></TextInput>
            </FormRow>
            <FormRow>
              <Label>Senha</Label>
              <TextInput placeholder="senha"></TextInput>  
            </FormRow>
            <Buto onPress={() => {handleNavigation('Buto')}}>
                <Text>entrar</Text>
                  </Buto>  
            <Buto2 onPress={() => {handleNavigation('Buto2')}}>
              <Text1>Não possui uma conta? Cadastrar.</Text1>
            </Buto2>
            </Form>
    </Container>
  );
}

export default Login;