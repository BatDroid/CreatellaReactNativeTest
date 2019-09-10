import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getProducts } from '../../redux/actions/products';
import { ProdcutsPayloadType } from '../../redux/actions/products/types';
import ScreenLoading from '../../components/ScreenLoading';
import ServerError from '../../components/ServerError';
import ProductsList from './ProductsList';

interface Props extends ProdcutsPayloadType {
  getProducts: Function;
};
interface State {};

class Products extends React.Component<Props, State> {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (this.props.errorStatus) return <ServerError />
    if (this.props.isFetching) return <ScreenLoading />
    return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ProductsList list={this.props.products} />
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
     {products, isFetching, errorStatus}}: { products: ProdcutsPayloadType
  }
  ) {
  return {
      products,
      errorStatus,
      isFetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
