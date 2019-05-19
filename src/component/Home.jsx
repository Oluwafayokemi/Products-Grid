/**
 * @file Home page to display all products
 */

// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from './Layout';
import { fetchProducts } from '../actions/product.action';
import { Spinner } from '../commons/spinner';

/**
 * @class HomePage
 * @description displays all products, side bar and header
 * @returns {ReactElement}
 */
export class HomePage extends React.Component {

  state = {
    faceProducts: {},
    productTag: ""
  }

  componentDidMount() {
    const { props } = this;
    const { getProducts } = props;
    getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    const nextProps = this.props;
    const nextState = this.state;

    // update product state when product prop changes
    if (prevProps.products !== nextProps.products) {
      this.setProduct()
    }
    // Calls getProduct when productTag state changes and filters by product tag
    if (prevState.productTag !== nextState.productTag) {
      const { getProducts } = this.props;
      const {productTag} = this.state;
      getProducts({productTag});
    }
  }

  /**
   * @method filterProduct
   * @description filters product by size, price and id
   */
  filterProducts = (label) => {
    this.setState({
      productTag: label
    })
    return label;
  }
  /**
   * @method setProduct
   * @description sets the value of product from props to the state as faceProducts
   */
  setProduct = () => {
    const { products } = this.props;
    this.setState({
      faceProducts: products
    })
  }

  render() {
    const { props, state, filterProducts } = this
    const { faceProducts } = state;
    const { loading } = props
    return (
      loading ?
        <Spinner />
        :
        <Layout products={faceProducts} filterProducts={filterProducts} />
    )
  }
}

export const mapStateToProps = state => ({
  products: state.products,
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  getProducts: (value) => dispatch(fetchProducts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
