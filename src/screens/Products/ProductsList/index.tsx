import React from "react";
import { FlatList } from "react-native";
import { ProductItemType } from "../../../redux/actions/products/types";
import ListItem from "./ListItem";
import ListFooter from "./ListFooter";
import AdListItem from "./AdListItem";
import { isAdItem } from "../../../utils/productUtils";

interface Props {
    list: ProductItemType[];
    onEndReached: () => void;
    loadMoreLoading: boolean;
    allFetched: boolean;
};

const renderItem = ({ item }: {item: ProductItemType}) => {
    if(isAdItem(item)) return <AdListItem adId={item.adId}/>;
    return (<ListItem {...item} />);
}

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