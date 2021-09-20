import React from "react";
import { Container } from "../styles/Container";
import { Buto2 } from "../styles/Login";
import { Buto0, Curtidas, Midias, Posts, TextP, Butopro, PP, PP2, PP3, Header, Lugar } from "../styles/Profile"
import { InitTypes } from "../types/ScreeStack.types";

export default function Profile({ navigation }: InitTypes) {
  function handleNavigation(params: string) {
    if (params === 'Buto0') {
      navigation.navigate('TimeLine');
    }
  }
  return (
    <Container>
      <Header>
        <Buto0 onPress={() => handleNavigation('Buto0')}>
          <PP3
            source={
              require("../../assets/seta.png")
            }
          />
        </Buto0>
        <Buto2 onPress={() => handleNavigation('PP2')}>
          <PP2
            source={
              require("../../assets/pontos.png")
            }
          />
        </Buto2>
      </Header>
      <PP
        source={
          require("../../assets/perfil.png")
        }
      />
      <Butopro>
        <TextP>Editar Perfil</TextP>
      </Butopro>
      <Lugar>
        <Buto2>
          <Posts>posts</Posts>
        </Buto2>
        <Buto2>
          <Midias>midias</Midias>
        </Buto2>
        <Buto2>
          <Curtidas>curtidas</Curtidas>
        </Buto2>
      </Lugar>
    </Container>
  );
}

