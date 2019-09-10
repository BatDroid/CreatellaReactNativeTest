import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ProductType } from "../../../redux/actions/products/types";

export default (props: ProductType) => {
    const {face, price, date, size} = props;
    return (
        <View style={styles.root}>
            <View style={styles.fontContainer}>
                <Text style={{fontSize: size}}>{face}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.footerContainer}>
                <Text>{`$${price}`}</Text>
                <Text style={styles.date}>{getProperDate(date)}</Text>
            </View>
        </View>
    );
};

const WEEK_MILLI = 604800000; // 7 * 24 * 3600 * 1000
const DAY_MILLI = 86400000; // 24 * 3600 * 1000

function getProperDate(d: string) {
    const pDate = new Date(d);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - pDate.getTime();
    if (diffTime < WEEK_MILLI) {
        return `${Math.ceil(diffTime/DAY_MILLI)} day ago`;
    } else {
        return pDate.toLocaleDateString();
    }
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
    fontContainer: {
        flex: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    separator: {
        width: "80%",
        flex: 1,
        borderBottomColor: '#CCCC',
        borderBottomWidth: 1,
    },
    footerContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    date: {
        color: "grey",
    }
})