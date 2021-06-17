import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SubHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.hero}>Seja Bem Vindo!</Text>
            <Text style={styles.subtitle}>Faça seu login para continuar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
    },
    hero: {
        fontWeight: "bold",
        fontSize: 32,
    },
    subtitle: {
        fontSize: 24,
    },
});