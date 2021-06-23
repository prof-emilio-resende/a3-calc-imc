import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CalculatorForm from "./Calculator.form";

function renderResult() {
    return <View><Text>result</Text></View>
}

export default function Calculator() {
    return (
        <View style={styles.container}>
            <CalculatorForm />
            <View style={styles.result}>{renderResult()}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    result: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        flex: 5,
        justifyContent: "space-around",
        backgroundColor: "#eeeeee",
        minWidth: Dimensions.get("screen").width,
    },
});
