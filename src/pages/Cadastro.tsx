import React, { useState } from "react";
import { Alert } from "react-native";
import { useAuth } from "../hook/auth";
import { IAuthenticate, IRegister } from "../interfaces/User.interface";
import { Text, Text1 } from "../styles/Container"
import { Container, Buto2, Buto, Logo, FormRow, Label, TextInput, Title, Form } from "../styles/Login";
import { InitTypes } from "../types/ScreeStack.types";

export default function Cadastro({ navigation }: InitTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  function handleNavigation(params: string) {
    if (params === 'Buto2') {
      navigation.navigate('Login');
    }
  }
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  async function handleRegister() {
    try {
      if (data?.email && data.password && data.name) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos");
      }

    } catch (error) {
      Alert.alert('Erro ao fazer cadatro')
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
        <Title>CADASTRO</Title>
        <FormRow>
          <Label>Nome</Label>
          <TextInput placeholder="nome"
            onChangeText={(i) => handleChange({ name: i })}
          ></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput placeholder="e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => handleChange({ email: i })}
          ></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"
            secureTextEntry={true}
            onChangeText={(i) => handleChange({ password: i })}
          ></TextInput>
        </FormRow>
        <Buto onPress={() => handleRegister}>
          <Text>entrar</Text>
        </Buto>
        <Buto2 onPress={() => handleNavigation('Buto2')}>
          <Text1>Ja possui uma conta? Login.</Text1>
        </Buto2>
      </Form>
    </Container>
  );
}
