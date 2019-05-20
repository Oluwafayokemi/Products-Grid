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
    products: {},
    productTag: "",
    value: '',
    target: false
  }

  componentDidMount() {
    const { props } = this;
    const { getProducts } = props;
    getProducts();
    this.scrollRef = React.createRef();
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
      const { productTag } = this.state;
      getProducts({ productTag });
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
      products
    })
  }

  /**
   * @method handleSizeChange
   * @description onChange event handler to detect input value for size change
   */
  handleSizeChange = (id) => (event) => {
    const value = event.target.value
    this.setState(() => {
      return {
        value,
        target: id,
      }
    })
  }

  /**
   * @function fetchMore
   * @description fucntion to get more items on pagination
   */
  fetchMore = async ({ next, last, page }) => {

  }

  render() {
    const { props, state, handleSizeChange, filterProducts, scrollRef, fetchMore } = this
    const { products, value, target } = state;
    const { loading } = props;
    return (
      loading ?
        <Spinner />
        :
        <Layout
          value={value}
          products={products}
          filterProducts={filterProducts}
          handleSizeChange={handleSizeChange}
          target={target}
          scrollRef={scrollRef}
          fetchMore={fetchMore}
        />
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
