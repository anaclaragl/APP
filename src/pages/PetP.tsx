import React from "react";
import { Container, Text, Text1 } from "../styles/Container"
import { FormRow, Label, TextInput } from "../styles/Login";
import { Cam, Galeria, Cancela, Footer, Header, Cancel, Plubi, CamB } from "../styles/PetP";
import { InitTypes } from "../types/ScreeStack.types";


export default function PetP({ navigation }: InitTypes) {
  function handleNavigation(params: string) {
    console.log(params)
    if (params === 'Cancela') {
      navigation.navigate('Criar');
    } else if (params === 'Publi') {
      navigation.navigate('TimeLine');
    } else if (params === 'Cam') {
      navigation.navigate('Camera')
    }
  }
  return (
    <Container>
      <Header>
        <Cancela onPress={() => handleNavigation('Cancela')}>
          <Cancel>Cancelar</Cancel>
        </Cancela>
        <Plubi onPress={() => handleNavigation('Publi')}>
          <Text>Publicar</Text>
        </Plubi>
      </Header>
      <FormRow>
        <Label>Nome:</Label>
        <TextInput placeholder="Ex: Eredin"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Coleira:</Label>
        <TextInput placeholder="Ex: Coleira azul"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Espécie:</Label>
        <TextInput placeholder="Ex: Gato/Cão"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Raça:</Label>
        <TextInput placeholder="Ex: Shitzu"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Gênero:</Label>
        <TextInput placeholder="Ex: Macho"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Tamanho:</Label>
        <TextInput placeholder="Ex: Médio"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Última vez visto:</Label>
        <TextInput placeholder="Ex: 25/08/21"></TextInput>
      </FormRow>
      <FormRow>
        <Label>Comentários:</Label>
        <TextInput></TextInput>
      </FormRow>
      <Footer>
        <Text1>Anexe no máximo 4 fotos</Text1>
        <CamB onPress={() => handleNavigation('Camera')}>
          <Cam
            source={
              require("../../assets/cam.png")
            }
          />
        </CamB>
        <Galeria
          source={
            require("../../assets/galeria.png")
          }
        />
      </Footer>
    </Container>
  );
}

