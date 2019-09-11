import React from "react";
import Modal from "react-native-modal";
import { View, StyleSheet } from "react-native";
import SortItem from "./SortItem";
import { SortTypes } from "../../../redux/actions/products/types";

interface Props {
    show: boolean;
    onRequstClose: () => void;
    onItemPressed: (sort: SortTypes) => void;
};

export default (props: Props) => {
    const {show, onRequstClose, onItemPressed} = props;
    return(
        <Modal isVisible={show} onBackdropPress={onRequstClose} animationIn="slideInDown">
            <View style={styles.root}>
                <SortItem title="ID" onPress={() => onItemPressed(SortTypes.Id)} />
                <SortItem title="Price" onPress={() => onItemPressed(SortTypes.Price)} />
                <SortItem title="Size" onPress={() => onItemPressed(SortTypes.Size)} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFF",
        borderRadius: 5,
    }
});