/**
 * @file Products
 */

//  Modules
import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../commons/spinner';
import { convertToDollar } from '../util/convertToDollar';
import { formatDate } from '../util/formatDate';

/**
 * @function Products
 * @description displays products in a grid
 * @returns {ReactElement}
 */
export const Products = ({ products, handleSizeChange, value, target }) => {
  const sizeValue = value ? value : ''
  const renderProducts = products.products
  return (
    products.loading ?
      <Spinner />
      :
      <React.Fragment>
        {renderProducts && renderProducts.map((product, index) => {
          const Id = product.id
          return (
            <Wrapper key={index}>
              <Card className="card" >
                <Face>
                  <div
                    style={{ fontSize: `${target === product.id && sizeValue}px` }}
                    className="image"
                  >
                    {product.face}
                  </div>
                </Face>
                <div className="container">
                  <div className="detail">
                    <h4>Price: {convertToDollar(product.price)}</h4>
                    <label className="label">Size:
                    <input type="number" name="number" min="10" max="50" onChange={handleSizeChange(Id)} />
                    </label>
                  </div>
                  <div>
                  <span>{formatDate(product.date)}</span>
                  </div>
                </div>
              </Card>
            </Wrapper>
          )
        })}
      </React.Fragment>
  )
}

const Wrapper = styled.div`
  margin: 1em;
  .detail {
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 250px;
  max-height: 250px;
  max-width: 250px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  background-color: #fff;
  padding-bottom: 1em;

}
.image {
  width: 100%;
  
}
`;

const Face = styled.div`
  padding: 2em;
  overflow: hidden;
  max-height: 150px;
  max-width: 150px;
`;

const Card = styled.div`
`;