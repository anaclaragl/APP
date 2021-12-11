import React from "react";
import { Container, Text1 } from "../styles/Container";
import { Botao, Conta, Patinha, Cria, Casa, Vet, Mensage } from "../styles/Botao"
import { Header, Footer } from "../styles/Mensagem";
import { InitTypes } from "../types/homestack.types";

export default function Mensagem({ navigation }: InitTypes) {
    function handleNavigation(params: string) {
        if (params === 'Conta') {
            navigation.navigate('Profile');
        } else if (params === 'Criar') {
            navigation.navigate('Criar');
        } else if (params === 'TimeLine') {
            navigation.navigate('TimeLine');
        } else if (params === 'ONG') {
            navigation.navigate('ONG');
        }
    }
    return (
        <Container>
            <Header>
                <Botao onPress={() => handleNavigation('Conta')}>
                    <Conta
                        source={
                            require("../../assets/conta.png")
                        }
                    />
                </Botao>
                <Botao>
                    <Patinha
                        source={
                            require("../../assets/patinha.png")
                        }
                    />
                </Botao>
                <Botao onPress={() => handleNavigation('Criar')}>
                    <Cria
                        source={
                            require("../../assets/criar.png")
                        }
                    />
                </Botao>
            </Header>
            <Text1>Dm</Text1>
            <Footer>
                <Botao onPress={() => handleNavigation('TimeLine')}>
                    <Casa
                        source={
                            require("../../assets/casa.png")
                        }
                    />
                </Botao>
                <Botao onPress={() => handleNavigation('ONG')}>
                    <Vet
                        source={
                            require("../../assets/vet.png")
                        }
                    />
                </Botao>
                <Botao onPress={() => handleNavigation('Mensagem')}>
                    <Mensage
                        source={
                            require("../../assets/mensagem.png")
                        }
                    />
                </Botao>
            </Footer>
        </Container>

    );
}

