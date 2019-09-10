import React from "react";
import { FlatList } from "react-native";
import { ProductType } from "../../../redux/actions/products/types";
import ListItem from "./ListItem";

interface Props {
    list: ProductType[];
};

const renderItem = ({ item }: {item: ProductType}) => <ListItem {...item} />

export default (props: Props) => {
    const {list} = props;
    return (
        <FlatList
             keyExtractor={(i) => i.id}
             data={list}
             renderItem={renderItem}
             numColumns={2}
             initialNumToRender={10}
             windowSize={10}
        />
    );
}