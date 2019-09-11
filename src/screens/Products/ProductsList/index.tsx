import React from "react";
import { FlatList } from "react-native";
import { ProductType } from "../../../redux/actions/products/types";
import ListItem from "./ListItem";
import ListFooter from "./ListFooter";

interface Props {
    list: ProductType[];
    onEndReached: () => void;
    loadMoreLoading: boolean;
    allFetched: boolean;
};

const renderItem = ({ item }: {item: ProductType}) => <ListItem {...item} />

export default (props: Props) => {
    const {list, onEndReached, loadMoreLoading, allFetched} = props;
    return (
        <FlatList
             keyExtractor={(i) => i.id}
             data={list}
             renderItem={renderItem}
             numColumns={2}
             initialNumToRender={10}
             onEndReached={onEndReached}
             onEndReachedThreshold={0.4}
             windowSize={10}
             ListFooterComponent={() => <ListFooter isLoading={loadMoreLoading} allFetched={allFetched} />}
        />
    );
}