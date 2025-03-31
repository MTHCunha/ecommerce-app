import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import * as DbService from '../../database/db';



const ProductCreate = () => {

    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [produtos, setProdutos] = useState([]);

    async function processamentoUseEffect() {
        try {
            await DbService.createTable();
            await carregaDados();
        }
        catch (e) {
            console.log(e);
        }
    }


    useEffect(
        () => {
            processamentoUseEffect(); //necessário método pois aqui não pode utilizar await...
        }, []);

    function createUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(0, 2);
    }

    async function salvaDados() {
        let novoRegistro = (id == undefined);

        let obj = {
            id: novoRegistro ? createUniqueId() : id,
            nome: nome,
        };

        try {
            let resposta = false;
            if (novoRegistro)
                resposta = await DbService.adicionaProduto(obj);
            // else
            //     resposta = await DbService.alteraProduto(obj);

            if (resposta)
                Alert.alert('Sucesso!');
            else
                Alert.alert('Falha!');

            Keyboard.dismiss();
            limparCampos();
            await carregaDados();
        } catch (e) {
            Alert.alert(e);
        }
    }

    async function limparCampos() {
        setNome("");
        setId(undefined);
        Keyboard.dismiss();
    }

    async function carregaDados() {
        try {
            console.log('carregando');
            let produtos = await DbService.obtemTodosProdutos();
            setProdutos(produtos);
        } catch (e) {
            Alert.alert(e.toString());
        }
    }



    return (
        <Layout>
            <View>
                <ScrollView>
                    <View style={styles.areaDados}>

                        <View style={styles.areaNome}>
                            <Text>Nome</Text>
                            <TextInput style={styles.caixaTexto}
                                onChangeText={(texto) => setNome(texto)}
                                value={nome} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.botao} onPress={() => salvaDados()}>
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </TouchableOpacity>

                    <ScrollView>
                        {
                            produtos.map((produto, index) => (
                                <Text key={index.toString()}> {produto.nome}</Text>
                            ))
                        }

                    </ScrollView>
                </ScrollView>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    tituloAgenda: {
        fontSize: 25,
        color: '#FFF',
        backgroundColor: 'blue',
        width: '100%',
        textAlign: 'center'
    },

    caixaTexto: {
        borderColor: "#000",
        borderWidth: 2,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    botao: {
        width: '30%',
        height: 50,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#040d59',
    },
    botaoApagarTudo: {
        backgroundColor: 'red',
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    areaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,
    },
    textoBotao: {
        color: '#FFF',
    },
    areaNome: {
        width: '55%',
    },
    areaTelefone: {
        width: '30%',
    },

    listaContatos: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 20,
    },
    contato: {
        backgroundColor: '#ed8f1c',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    listaNome: {
        width: '50%',
        fontSize: 18,
        paddingRight: 10,
    },

    dadosListaTelefone: {
        width: '40%',
        flexDirection: 'row',
    },
    dadosBotoesAcao: {
        width: '10%',
    },
    iconTelefone: {
        width: 20,
        height: 25,
        marginRight: 5,
    },
    listaTelefone: {
        color: "#FFF",
        fontSize: 18,
    },


});

export default ProductCreate