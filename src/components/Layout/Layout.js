import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'


// Este componente é a estrutura geral do aplicativo, o children faz com que essa estrutura seja reutilizada
const Layout = ({ children }) => {
    return (
        <>
            <StatusBar />
            {/* <Header /> */}
            <View>{children}</View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: "flex",
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        zIndex: 100,
        borderTopWidth: 1,
        borderColor: "lightgray",
        position: "absolute",
        bottom: 0,
        padding: 10,
    },
});

export default Layout

