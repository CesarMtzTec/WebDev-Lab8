import { Grid } from '@material-ui/core';
import React from 'react';
import ProductPreview from '../../components/ProductPreview';
import ProductService from '../../services/ProductService';
import Product from '../../types/Product';

interface ListState {
  products: Product[];
}

/**
 * Product List container
 * @extends {Component<Props, State}
 */
class ProductList extends React.Component<{}, ListState> {
  state = {
    products: [] as Product[],
  };

  componentDidMount() {
    ProductService.getAll()
      .then((response) => {
        const products = response.data;
        this.setState({ products });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Renders the container
   * @return {string} - HTML markup for the container
   */
  render() {
    let productsList: any[] = [];
    this.state.products.forEach((product) => {
      productsList.push(<ProductPreview key={product.id} product={product} />);
    });
    return (
      <Grid container spacing={3}>
        {productsList}
      </Grid>
    );
  }
}

export default ProductList;
