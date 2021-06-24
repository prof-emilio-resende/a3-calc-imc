import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Calculator from "./tabs/calculator/Calculator.page";

function About() {
    return (
        <View style={styles.container}>
            <Text>Saiba mais!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={styles.container}>
            <Text>Meu perfil...</Text>
        </View>
    );
}

export default function Home() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home.Calculator">
            <Tab.Screen
                name="Home.About"
                component={About}
                options={{
                    tabBarLabel: "Saiba Mais",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons
                                name="md-apps"
                                size={24}
                                color="#00AEDB"
                            />
                        ) : (
                            <Ionicons
                                name="md-apps"
                                size={24}
                                color="#8A8A8A"
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Home.Calculator"
                component={Calculator}
                options={{
                    tabBarLabel: "Calc",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons
                                name="md-calculator-outline"
                                size={24}
                                color="#00AEDB"
                            />
                        ) : (
                            <Ionicons
                                name="md-calculator-outline"
                                size={24}
                                color="#8A8A8A"
                            />
                        ),
                }}
            />
            <Tab.Screen 
                name="Home.Profile" 
                component={Profile}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons
                                name="person-circle-outline"
                                size={24}
                                color="#00AEDB"
                            />
                        ) : (
                            <Ionicons
                                name="person-circle-outline"
                                size={24}
                                color="#8A8A8A"
                            />
                        ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});
