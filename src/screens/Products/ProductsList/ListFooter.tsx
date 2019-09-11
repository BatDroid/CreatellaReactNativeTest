import React from "react";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";

interface Props {
    isLoading: boolean;
    allFetched: boolean;
};

export default (props: Props) => {
    const {isLoading, allFetched} = props;
    if (isLoading) return <ActivityIndicator size="large" style={styles.loading}/>;
    if (allFetched) return <View style={styles.endContainer}><Text style={styles.end}>~ end of catalogue ~</Text></View>
    return null;
}

const styles = StyleSheet.create({
    loading: {
        margin: 10,
    },
    endContainer: {
        margin: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    end: {
        color: "grey",
    },
});