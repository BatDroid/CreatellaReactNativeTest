import React from "react";
import { View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        color: "red",
    }
})

export default () => 
                (
                    <View style={styles.container}>
                        <Text style={styles.text}>There is an unknown Error</Text>
                    </View>
                );