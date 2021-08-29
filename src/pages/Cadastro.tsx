import React from "react";
import { useNavigation } from "@react-navigation/core";
import {Container, Text, Text1, Text2} from "../styles/Container"
import {Buto2, Teste, Buto, Logo, FormRow, Label, TextInput, Title, Form} from "../styles/Login";

export default function Cadastro() {
    const navigation = useNavigation();
    function handleLogin() {
      navigation.navigate("Login");
    }
    function handleCadastro() {
      navigation.navigate("cadastroStack");
    }
    return (
        <Container>
          <Form>
          <Logo
                    source={
                        require("../../assets/logo.png")      
                    }
                />
            <Title>CADASTRO</Title>
            <FormRow>
              <Label>Nome</Label>
              <TextInput placeholder="nome"></TextInput>
            </FormRow>
            <FormRow>
              <Label>Cidade</Label>
              <TextInput placeholder="cidade"></TextInput>  
            </FormRow>
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
            <Buto2 onPress={() => {handleLogin()}}>
              <Text1>Ja possui uma conta? Login.</Text1>
            </Buto2>
            </Form>
    </Container>
  );
}