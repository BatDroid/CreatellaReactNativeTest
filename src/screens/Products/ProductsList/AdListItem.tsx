import React from "react";
import ListItemContainer from "./ListItemContainer";
import { Image, View, StyleSheet } from "react-native";
import { getAdUrl } from "../../../config/routes";

export default ({adId}: {adId: string}) => {
    return(
        <ListItemContainer>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={{uri: getAdUrl(adId)}}
                />
            </View>
        </ListItemContainer>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 5,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    }
});