import './index.css';
import Product from '../../types/Product';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface ProductPreviewProps {
  product: Product;
}

/**
 * Product preview elements
 * @returns ProductPreview UI elements
 */
const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  let listPrice = 0.0;
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    listPrice = product.childSkus[0].listPrice;
  }

  let salePrice;
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    salePrice = product.childSkus[0].salePrice;
  }

  let mediumImageUrl = '';
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    mediumImageUrl = product.childSkus[0].mediumImageUrl;
  }

  return (
    <Grid item xs={4} className="productPreview">
      <Card className="productCard">
        <CardContent>
          <Paper className="mediumImage">
            <Link to={`/pdp?productId=${product.id}`}>
              <img src={mediumImageUrl} alt={product.name} />
            </Link>
          </Paper>
          <Link to={`/pdp?productId=${product.id}`} className="productName">
            {product.name}
          </Link>
          <Link
            to={`/pdp?productId=${product.id}`}
            className="productDescription"
          >
            {product.description}
          </Link>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography
                className={salePrice ? 'dollars crossedout' : 'dollars'}
              >
                {listPrice}
              </Typography>
            </Grid>
            {salePrice ? (
              <Grid item xs={6}>
                <Typography className="dollars sale">{salePrice}</Typography>
              </Grid>
            ) : null}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductPreview;
