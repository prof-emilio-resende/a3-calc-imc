import React from "react";
import {
    Dimensions,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import CalculatorForm from "./Calculator.form";

import { usePerson } from "../../../../hooks/usePerson.hook";

import measure from "../../../../../assets/raster.jpeg";

function renderResult() {
    const [person] = usePerson();

    return (
        <View style={[styles.container, styles.result]}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Image source={measure} style={styles.image} />
            </TouchableWithoutFeedback>
            <View style={styles.resultText}>
                <View>
                    <Text style={styles.title}>
                        IMC Calculado: {person?.imc?.toFixed(2)}
                    </Text>
                    <Text style={styles.regularText}>
                        {person?.imcDescription}
                    </Text>
                </View>
            </View>
        </View>
    );
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
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    result: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        flex: 5,
        justifyContent: "space-around",
        backgroundColor: "#eeeeee",
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        width: Dimensions.get("screen").width * 0.95,
    },
    resultText: {
        flex: 2,
        alignItems: "flex-start",
        justifyContent: "center",
        width: Dimensions.get("window").width * 0.85,
    },
    title: {
        fontWeight: "600",
        fontSize: 32,
    },
    regularText: {
        fontSize: 14,
        lineHeight: 24,
        color: "#AAAAAA",
    },
});
