import React, { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    TextInput,
    Platform,
    TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

export default function CalculatorForm() {
    const [gender, setGender] = useState("Não Informar");
    const [iosPickerOpen, setIosPickerOpen] = useState(false);

    const renderPickerAndroid = () => {
        if (Platform.OS !== "android") return null;
        return (
            <View style={[{ flex: 1 }, styles.pickerAndroid]}>
                <Picker
                    style={styles.input}
                    prompt="sexo"
                    mode="dialog"
                    selectedValue={gender}
                    onValueChange={(value) => {
                        setGender(value);
                    }}
                >
                    <Picker.Item value={"Feminino"} label="Feminino" />
                    <Picker.Item value={"Masculino"} label="Masculino" />
                    <Picker.Item value={"Não Informar"} label="Não Informar" />
                </Picker>
            </View>
        );
    };

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
                            value={gender}
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
                        selectedValue={gender}
                        onValueChange={(value) => {
                            setIosPickerOpen(false);
                            setGender(value);
                        }}
                    >
                        <Picker.Item value={"Feminino"} label="Feminino" />
                        <Picker.Item value={"Masculino"} label="Masculino" />
                        <Picker.Item
                            value={"Não Informar"}
                            label="Não Informar"
                        />
                    </Picker>
                ) : null}
            </View>
        );
    }

    return (
        <View style={styles.fields}>
            {!iosPickerOpen ? (
                <View style={{ flex: 2 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Peso (kg)"
                        autoCapitalize="none"
                        allowFontScaling={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Altura (m)"
                        autoCapitalize="none"
                        allowFontScaling={true}
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
    pickerAndroid: {
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        ...Platform.select({
            ios: {
                display: "none",
            },
        }),
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
});
