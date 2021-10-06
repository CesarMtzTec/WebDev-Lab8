import './index.css';
import Product from '../../types/Product';
import {
  Grid,
  Paper,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

interface ProductInfoProps {
  product: Product;
}

/**
 * Product info elements
 * @returns ProductInfo UI elements
 */
const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  let listPrice = 0.0;
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    listPrice = product.childSkus[0].listPrice;
  }

  let salePrice = 0.0;
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0] !== undefined
  ) {
    salePrice = product.childSkus[0].salePrice;
  }

  let colors: any[] = [];
  let sizes: any[] = [];

  let selectedColor = '';
  let selectedSize = '';
  if (
    product !== undefined &&
    product.childSkus !== undefined &&
    product.childSkus[0]
  ) {
    selectedColor = product.childSkus[0].color;
    product.childSkus.forEach((sku) => {
      colors.push(<MenuItem value={sku.color}>{sku.color}</MenuItem>);
    });

    selectedSize = product.childSkus[0].size;
    product.childSkus.forEach((sku) => {
      sizes.push(<MenuItem value={sku.size}>{sku.size}</MenuItem>);
    });
  }

  let comments: any[] = [];
  if (product !== undefined && product.comments.length > 0) {
    product.comments.forEach((comment) => {
      comments.push(
        <Grid item className="comment">
          <Typography className="commentAuthor">{comment.author}</Typography>
          <Typography>{comment.body}</Typography>
          <Typography className="commentDate">{comment.created}</Typography>
        </Grid>
      );
    });
  }

  console.log(product);

  return (
    <div className="productInfo">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage">
            <img
              src="https://dummyimage.com/500x500/000/0011ff"
              alt={product.name}
            />
          </Paper>
        </Grid>

        <Grid item lg={8} container>
          <Grid item lg={12}>
            <Typography className="productTitle" variant="h1">
              {product.name}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>{product.description}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">{listPrice}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">{salePrice}</Typography>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={2}>
            <InputLabel className="productLabel" id="color-label">
              Color
            </InputLabel>
            <Select
              labelId="color-label"
              id="color-select"
              label="Color"
              value={selectedColor}
            >
              {colors}
            </Select>
          </Grid>
          <Grid item lg={2}>
            <InputLabel className="productLabel" id="size-label">
              Size
            </InputLabel>
            <Select
              labelId="size-label"
              id="size-select"
              label="Size"
              value={selectedSize}
            >
              {sizes}
            </Select>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={2}>
            <InputLabel className="productLabel" id="quantity-label">
              Quantity
            </InputLabel>
            <Select
              labelId="quantity-label"
              id="quantity-select"
              label="Quantity"
              value={1}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={10} />

          <Grid item lg={4}>
            <Button className="cartButton" variant="contained">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
        <Grid item lg={12} className="commentsSection">
          <Typography variant="h2" className="commentsTitle">
            Comments
          </Typography>
          {comments}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
