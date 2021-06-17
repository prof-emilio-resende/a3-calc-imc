import React from "react";

import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import Footer from "../shared/Footer.component";
import Subheader from "./Subheader.component";
import LoginForm from "./Login.form";

export default function Login(props: any) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.mainContent}>
                <Subheader />
                <LoginForm navigation={props.navigation} />
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Dimensions.get("screen").height * 0.05,
    },
    mainContent: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});
