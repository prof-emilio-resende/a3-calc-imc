import React, { useEffect, useState } from "react";
import {
    Dimensions,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { Ionicons } from "@expo/vector-icons";
import { useInput } from "../../../../hooks/useInput.hook";
import { usePerson } from "../../../../hooks/usePerson.hook";
import Person from "../../../../domain/Person";

export default function CalculatorForm() {
    const [dilution, setDilution] = useState("Não Informar");
    const [, setData] = usePerson();
    const [iosPickerOpen, setIosPickerOpen] = useState(false);
    const [height, heightProps, ] = useInput("");
    const [weight, weightProps, ] = useInput("");

    useEffect(() => {
        if (height && weight) {
            const floatHeight = parseFloat(height.replace(',', '.'));
            const floatWeight = parseFloat(weight.replace(',', '.'));
            if(!isNaN(floatHeight) && !isNaN(floatWeight)) {
                console.log('calculating IMC...');
                calculateImc(floatHeight, floatWeight);
            } else {
                console.log('There is value, but still invalid...');
            }
        }
    }, [height, weight]);

    const calculateImc = (theHeight: number, theWeight: number) => {
        console.log(theHeight);
        console.log(theWeight);
        const person = new Person(theHeight, theWeight);
        person.imc = theWeight / (theHeight ** 2);

        if (person.imc < 18.5) person.imcDescription = "Magreza";
        else if (person.imc < 24.9) person.imcDescription = "Normal";
        else if (person.imc <= 30.0) person.imcDescription = "Sobrepeso";
        else if (person.imc > 30.0) person.imcDescription = "Obesidade";
        console.log(person);
        setData(person);
    }

    function renderPickerIOS() {
        if (Platform.OS !== "ios") return null;
        return (
            <View style={{ flex: 1 }}>
                {!iosPickerOpen ? (
                    <View
                        style={styles.pickerAreaIos}
                        onTouchEnd={() => setIosPickerOpen(true)}
                    >
                        <TextInput
                            style={[{ flex: 8 }, styles.pickerInputIos]}
                            placeholder="Sexo"
                            autoCapitalize="none"
                            allowFontScaling={true}
                            value={dilution}
                            editable={false}
                        />
                        <TouchableOpacity
                            style={{ flex: 1, alignSelf: "center" }}
                            onPress={() => setIosPickerOpen(true)}
                        >
                            <Ionicons
                                name="caret-down"
                                size={16}
                                color="#777"
                            />
                        </TouchableOpacity>
                    </View>
                ) : null}
                {iosPickerOpen ? (
                    <Picker
                        style={[styles.input, styles.pickerIos]}
                        prompt="Sexo"
                        mode="dialog"
                        selectedValue={dilution}
                        onValueChange={(value) => {
                            setIosPickerOpen(false);
                            setDilution(value);
                        }}
                    >
                        <Picker.Item value={"Feminino"} label="Feminino" />
                        <Picker.Item value={"Masculino"} label="Masculino" />
                        <Picker.Item value={"Não Informar"} label="Não Informar" />
                    </Picker>
                ) : null}
            </View>
        );
    }

    function renderPickerAndroid() {
        if (Platform.OS === "ios") return null;
        return (
            <View style={[{ flex: 1 }, styles.pickerAndroid]}>
                <Picker
                    style={styles.input}
                    prompt="Sexo"
                    mode="dialog"
                    selectedValue={dilution}
                    onValueChange={(value) => setDilution(value)}
                >
                    <Picker.Item value={"Feminino"} label="Feminino" />
                    <Picker.Item value={"Masculino"} label="Masculino" />
                    <Picker.Item value={"Não Informar"} label="Não Informar" />
                </Picker>
            </View>
        );
    }

    return (
        <View style={styles.fields}>
            {!iosPickerOpen ? (
                <View style={{flex: 2}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Peso (kg)"
                        autoCapitalize="none"
                        allowFontScaling={true}
                        keyboardType="decimal-pad"
                        {...weightProps}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Altura (m)"
                        autoCapitalize="none"
                        allowFontScaling={true}
                        keyboardType="decimal-pad"
                        {...heightProps}
                    />
                </View>
            ) : null}
            {renderPickerAndroid()}
            {renderPickerIOS()}
        </View>
    );
}

const styles = StyleSheet.create({
    fields: {
        display: "flex",
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
    },
    input: {
        width: Dimensions.get("screen").width * 0.9,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
    },
    pickerAreaIos: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
    },
    pickerInputIos: {
        ...Platform.select({
            android: {
                display: "none",
            },
        }),
    },
    pickerIos: {
        ...Platform.select({
            android: {
                display: "none",
            },
        }),
    },
    pickerAndroid: {
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        ...Platform.select({
            ios: {
                display: "none",
            },
        }),
    },
});
