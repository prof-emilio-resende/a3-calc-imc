import React from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native";

import logo from "../../../assets/imc-logo.png";

export default function Footer() {
    return(
        <View>
            <Image source={logo} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: Dimensions.get('screen').width * 0.9,
        maxHeight: Dimensions.get('screen').height * 0.2,
        resizeMode: 'contain'
    }
});
