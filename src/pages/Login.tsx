import React, { useState, useEffect } from "react";
import { Text, Text1 } from "../styles/Container";
import { Container, Buto2, Buto, Logo, FormRow, Label, TextInput, Title, Form, Footer } from "../styles/Login";
import { InitTypes } from "../types/ScreeStack.types";
import { useAuth } from "../hook/auth";
import { IAuthenticate } from "../interfaces/User.interface";
import { Alert } from "react-native";




export default function Login({ navigation }: InitTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  function handleNavigation(params: string) {
    if (params === 'Buto2') {
      navigation.navigate('Cadastro');
    }
  }

  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }
  async function handleSignIn() {
    try {
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos");
      }

    } catch (error) {
      Alert.alert('Erro ao fazer login')
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
          <TextInput
            placeholder="e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => handleChange({ email: i })}
          >
          </TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput
            placeholder="senha"
            secureTextEntry={true}
            onChangeText={(i) => handleChange({ password: i })}
          >
          </TextInput>
        </FormRow>
        <Buto onPress={() => handleSignIn}>
          <Text>entrar</Text>
        </Buto>
        <Buto2 onPress={() => handleNavigation('Buto2')}>
          <Text1>Não possui uma conta? Cadastrar.</Text1>
        </Buto2>
      </Form>
    </Container>
  );
}

