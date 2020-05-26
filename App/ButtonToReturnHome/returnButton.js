import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Index(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Quiz")}
                style={styles.button}
            >
                <Text style={styles.returnToHomePage}>Return to Home Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 292,
        height: 48
    },
    button: {
        width: 292,
        height: 48,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 100
    },
    returnToHomePage: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 20,
        marginTop: 11,
        marginLeft: 51
    }
});

export default Index;