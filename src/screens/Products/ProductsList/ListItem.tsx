import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProductType } from "../../../redux/actions/products/types";
import ListItemContainer from "./ListItemContainer";

export default (props: ProductType) => {
    const {face, price, date, size} = props;
    return (
        <ListItemContainer>
            <View style={styles.fontContainer}>
                <Text style={{fontSize: size}}>{face}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.footerContainer}>
                <Text>{`$${price}`}</Text>
                <Text style={styles.date}>{getProperDate(date)}</Text>
            </View>
        </ListItemContainer>
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