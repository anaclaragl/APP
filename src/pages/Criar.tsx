import React from "react";
import { Container } from "../styles/Container";
import { Header, Nav } from "../styles/Mensagem";
import { AquiT, Footer, Text1, Ct, Cancela, Selecione, Leia, O, V, A, PE, PP, Bot, At, Aqui, PetP } from "../styles/Criar";
import { InitTypes } from "../types/homestack.types";

export default function Criar({ navigation }: InitTypes) {
    function handleNavigation(params: string) {
        console.log(params)
        if (params === 'Cancela') {
            navigation.navigate('TimeLine');
        } else if (params === 'PetP') {
            navigation.navigate('PetP');
        }
    }
    return (
        <Container>
            <Cancela onPress={() => handleNavigation('Cancela')}>
                <Ct>Cancelar</Ct>
            </Cancela>
            <Selecione>
                Selecione uma das opções:
            </Selecione>
            <Nav>
                <Bot onPress={() => handleNavigation('ONG')}>
                    <O
                        source={
                            require("../../assets/O.png")
                        }
                    />
                </Bot>
                <Bot onPress={() => handleNavigation('Vet')}>
                    <V
                        source={
                            require("../../assets/V.png")
                        }
                    />
                </Bot>
                <Bot onPress={() => handleNavigation('Ado')}>
                    <A
                        source={
                            require("../../assets/A.png")
                        }
                    />
                </Bot>
                <Bot onPress={() => handleNavigation('PetE')}>
                    <PE
                        source={
                            require("../../assets/PE.png")
                        }
                    />
                </Bot>
                <PetP onPress={() => handleNavigation('PetP')}>
                    <PP
                        source={
                            require("../../assets/PP.png")
                        }
                    />
                </PetP>
                <Text1>Leia mais sobre <Aqui><AquiT>aqui!</AquiT></Aqui></Text1>
            </Nav>
        </Container>
    );
}

