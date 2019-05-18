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
  constructor(props) {
    super(props);

    this.state = {
      faceProducts: {},
      loading: this.props.loading
    }
  }

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    const nextProps = this.props;
    if (prevProps.products !== nextProps.products) {
      this.setProduct()
    }
    if (prevProps.loading !== nextProps.loading) {
      this.loadState();
    }
  }

  setProduct = () => {
    const { products } = this.props;
    this.setState({
      faceProducts: products
    })
  }
  loadState = () => {
    const { loading } = this.props;
    this.setState({
      loading
    })
  }

  render() {
    const { faceProducts, loading } = this.state;
    return (
      loading ?
        <Spinner />
        :
        <Layout products={faceProducts} />
    )
  }
}

export const mapStateToProps = state => ({
  products: state.products,
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
