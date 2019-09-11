import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default ({children}: {children: JSX.Element | JSX.Element[]}) => {
    return (
        <View style={styles.root}>{children}</View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 1,
        borderWidth: 1,
        borderColor: "#CCC",
        height: Dimensions.get("window").width * 0.5,
        alignItems: "center",
        borderRadius: 5,
    },
})