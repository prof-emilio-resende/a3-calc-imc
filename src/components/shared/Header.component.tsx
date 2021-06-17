import React from "react";
import { Dimensions, Image, StyleSheet, View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import logo from "../../../assets/icon.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBackButton } from "@react-navigation/stack";

export default function Header(props: any) {
    const canReturn = Boolean(props.canReturn);
    return (<SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#000" />
        { canReturn && <HeaderBackButton style={{flex: 1}} onPress={() => props.navigation.goBack()} /> }
        <Text style={styles.title}>Calculadora IMC</Text>
        <Image source={logo} style={styles.logo} />
    </SafeAreaView>);
}

const STATUSBAR_DEFAULT_HEIGHT = 20;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        elevation: 2,

        shadowColor: "#aaa",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1,
        },

        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",

        paddingTop: Platform.OS === "ios"
            ? Dimensions.get("screen").width * 0.05
            : Dimensions.get("screen").width * 0.10,
        paddingBottom: Dimensions.get("screen").width * 0.10,

        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        borderTopWidth: Platform.OS === "ios" ? STATUSBAR_DEFAULT_HEIGHT : 0,
        borderTopColor: "#000"
    },
    title: {
        marginLeft: Dimensions.get("screen").width * 0.05,
        fontSize: Dimensions.get("window").width * 0.07,
        height: Dimensions.get("screen").width * 0.10,
        flex: 5,
        color: "#aaa",
    },
    logo: {
        flex: 1,
        resizeMode: "contain",
        height: Dimensions.get("screen").height * 0.06,
        width: Dimensions.get("screen").height * 0.06,
    },
});
