import React from "react";
import { Text, Text1 } from "../styles/Container";
import { Container, Buto2, Buto, Logo, FormRow, Label, TextInput, Title, Form, Footer } from "../styles/Login";
import { InitTypes } from "../types/ScreeStack.types";


export default function Login({ navigation }: InitTypes) {
  function handleNavigation(params: string) {
    if (params === 'Buto') {
      navigation.navigate('TimeLine');
    } else if (params === 'Buto2') {
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
        <Buto onPress={() => handleNavigation('Buto')}>
          <Text>entrar</Text>
        </Buto>
        <Buto2 onPress={() => handleNavigation('Buto2')}>
          <Text1>Não possui uma conta? Cadastrar.</Text1>
        </Buto2>
      </Form>
    </Container>
  );
}

