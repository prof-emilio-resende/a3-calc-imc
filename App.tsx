import React from "react";

import { Button, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./src/components/shared/Header.component";

function Home() {
    return (
        <View style={styles.innerContainer}>
            <Text>This is the home!</Text>
        </View>
    );
}

function Login(props: any) {
    return (
        <View style={styles.innerContainer}>
            <Text>This is the login!</Text>
            <Button title="Entrar" onPress={() => props.navigation.navigate("Home")} />
        </View>
    );
}

export default function App() {
    const Stack = createStackNavigator();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator 
                      initialRouteName="Login"
                      headerMode="screen"
                      screenOptions={{
                        header: (props) => <Header />
                      }}
                    >
                      <Stack.Screen name="Login" component={Login} />
                      <Stack.Screen name="Home" component={Home} options={{
                        header: (props) => <Header canReturn={true} {...props} />
                      }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
    },
    innerContainer: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});
