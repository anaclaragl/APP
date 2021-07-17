import React from "react";
import { useNavigation } from "@react-navigation/core";
import {Text, Text1, Text2} from "../styles/Container"
import {Buto2, sub, Teste, Buto, Logo, Container, FormRow, Label, TextInput, Title, Form} from "../styles/Login";


export default function Login() {
    const navigation = useNavigation();
    function handleCadastro() {
      navigation.navigate("Cadastro");
    }
    function handleLogin() {
      navigation.navigate("loginStack");
    }
    return (
        <Container>
          <Form>
          <Logo
                    source={
                        require("../../assets/logo.jpg")      
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
            <Buto>
                <Text>entrar</Text>
                  </Buto>  
            <Buto2 onPress={() => {handleCadastro()}}>
              <Text1>Não possui uma conta? Cadastrar.</Text1>
            </Buto2>
            </Form>
    </Container>
  );
}