import React from "react";
import { useNavigation } from "@react-navigation/core";
import {Container, Text, Text1} from "../styles/Container"
import {Buto2, Buto3, Buto, Logo, FormRow, Label, TextInput, Title, Form} from "../styles/Login";
import {Cam, Galeria, Cancela, Footer, Header, Cancel, Plubi} from "../styles/PetP";


const PetP:React.FC=()=>{
    const navigation = useNavigation();
    function handleNavigation(params: string){
      if (params === 'Cancela'){
        navigation.navigate('Profile');
      } else {(params === 'Publi')
          navigation.navigate('Cadastro');
      }
    }
    return (
        <Container>
          <Header>
                <Cancela onPress={() => {handleNavigation('Cancela')}}>
                    <Cancel>Cancelar</Cancel>
                </Cancela>
                <Plubi>
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
            <Text>Anexe no máximo 4 fotos</Text>
            <Footer>
            <Cam
                        source={
                            require("../../assets/cam.png")      
                        }
                    />
            <Galeria
                        source={
                            require("../../assets/galeria.png")      
                        }
                    />
            </Footer>
    </Container>
  );
}

export default PetP;