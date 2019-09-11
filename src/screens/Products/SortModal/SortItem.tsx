import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
};

export default (props: Props) => {
    const {title, onPress} = props;
    return (
        <View style={styles.buttonContainer}>
            <Button title={title} onPress={onPress} />
        </View>  
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10
    }
});