/**
 * @file Products
 */

//  Modules
import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../commons/spinner';

/**
 * @function Products
 * @description displays products in a grid
 * @returns {ReactElement}
 */
export const Products = ({ products }) => {
  const renderProducts = products.products
  return (
    products.loading ?
      <Spinner />
      :
      <React.Fragment>
        {renderProducts && renderProducts.map((product, index) => (
          <Wrapper key={index}>
            <Card className="card" >
              <Face>
                <div className="image">{product.face}</div>
              </Face>
              <div className="container">
                <h4>Price: <b>{product.price}</b></h4>
                <p>Size: {product.size}</p>
              </div>
            </Card>
          </Wrapper>
        ))}
      </React.Fragment>
  )
}

const Wrapper = styled.div`
  margin: 1em;
  
  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 250px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  background-color: #fff;
}
.image {
  width: 100%;
}
`;

const Face = styled.div`
  padding: 2em;
`;

const Card = styled.div`
`;