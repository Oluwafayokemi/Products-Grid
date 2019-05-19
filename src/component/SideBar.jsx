/**
 * @file sideBar
 */

// Modules
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const filterTags = [
  {
    title: "Price"
  },
  {
    title: "Size"
  },
  {
    title: "Id"
  }
]

// Constant
const TITLE = "Asci faces"
export const SideBar = ({ filterProducts }) => (
  <Container>
    <ul>
      <h1>{TITLE}</h1>
    </ul>
    <ul>Filters</ul>
    {filterTags && filterTags.map((tag, index) => {
      const filter = tag.title === "Price" ? "price" : tag.title === "Size" ? "size" : tag.title === "Id" ? "id" : '';
      return (
        <ul key={index} className="price">
          <span>{tag.title}</span>
          <span className="icon" >
            <FontAwesomeIcon icon="plus" onClick={() => filterProducts(filter)} />
          </span>
        </ul>
      )
    })}
  </Container>
)
const Container = styled.div`
  color: grey;
  padding: 1em;
  .price {
    display: flex;
    justify-content: space-between
  }
  .icon {
    cursor: pointer;
  }
`