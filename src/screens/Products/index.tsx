import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getProducts } from '../../redux/actions/products';
import { ProdcutsPayloadType, SortTypes } from '../../redux/actions/products/types';
import ScreenLoading from '../../components/ScreenLoading';
import ServerError from '../../components/ServerError';
import ProductsList from './ProductsList';
import SortModal from './SortModal';


type NavigationParams = {
  onSortPressed: () => void;
}

type NavigationType = NavigationScreenProp<Props, NavigationParams>;
interface Props extends ProdcutsPayloadType {
  getProducts: Function;
  navigation: NavigationType;
};
interface State {
  showSortModal: boolean;
};

class Products extends React.Component<Props, State> {

  state = {
    showSortModal: false,
  };

  static navigationOptions = ({ navigation }: {navigation : NavigationType}) => ({
    title: "Products",
    headerRight: (
      <HeaderButtons >
        <Item title="Sort By" color="#007AFF" onPress={navigation.getParam("onSortPressed")} />
      </HeaderButtons>
    ),
  });

  componentDidMount() {
    const {navigation, getProducts} = this.props;

    navigation.setParams({onSortPressed: this.onSortPressed});
    getProducts(1);
  }

  onSortPressed = () => {
    this.setState({showSortModal: true})
  }

  onSortItemPressed = (sortBy: SortTypes) => {
    const {isFetching, isFetchingMore, getProducts} = this.props;
    if(isFetching || isFetchingMore) return;
    getProducts(1, sortBy);
    this.setState({showSortModal: false});
  }

  onLoadMore = () => {
    const { currentPage, isFetchingMore, allFetched, currentSort } = this.props;
    if (isFetchingMore || allFetched) return;
    this.props.getProducts(currentPage + 1, currentSort);
  }


  render() {
    const {products, isFetching, isFetchingMore, allFetched, errorStatus} = this.props;
    const {showSortModal} = this.state;
    if (errorStatus) return <ServerError />
    if (isFetching) return <ScreenLoading />
    return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ProductsList
        list={products}
        onEndReached={this.onLoadMore}
        loadMoreLoading={isFetchingMore}
        allFetched={allFetched}
      />
      <SortModal 
        show={showSortModal} 
        onRequstClose={() => this.setState({showSortModal: false})}
        onItemPressed={this.onSortItemPressed}
      />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({getProducts}, dispatch);
}

function mapStateToProps(
  {
    products :
     {products, isFetching, errorStatus, currentPage, isFetchingMore, allFetched, currentSort}}:
      { products: ProdcutsPayloadType}
  ) {
  return {
      products,
      errorStatus,
      isFetching,
      currentPage,
      isFetchingMore,
      allFetched,
      currentSort,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
