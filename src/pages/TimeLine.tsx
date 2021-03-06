import React from "react";
import { View, Text, Container, Text1 } from "../styles/Container";
import { Botao, Conta, Patinha, Cria, Casa, Vet, Mensage } from "../styles/Botao"
import { Header, Footer } from "../styles/TimeLine";
import { InitTypes } from "../types/homestack.types";
import { FlatList } from "react-native";
import data_antigo from "../services/data_antigo"
import { useAuth } from "../hook/auth";


export default function TimeLine({ navigation }: InitTypes) {
    function handleNavigation(params: string) {
        console.log(params)
        if (params === 'Conta') {
            navigation.navigate('Profile');
        } else if (params === 'Criar') {
            navigation.navigate('Criar');
        } else if (params === 'TimeLine') {
            navigation.navigate('TimeLine');
        } else if (params === 'ONG') {
            navigation.navigate('ONG');
        } else if (params === 'Mensagem') {
            navigation.navigate('Mensagem');
        }
    }
    return (
        <Container>
            <FlatList data={data_antigo} renderItem={({ item }) => (
                <View key={item.id}>
                    <Text1>{item.nome}</Text1>
                    <Text1>{item.tag}</Text1>
                    <Text>{item.mensagem}</Text>
                </View>
            )} />
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
            <Text1>TimeLine</Text1>
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

