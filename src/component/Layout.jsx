/**
 * @file Layout
 */

//  Modules
import React from 'react';
import styled from 'styled-components';
import { SideBar } from './SideBar';
import { Products } from './Product';

/**
 * @function Layout
 * @description displays layout of the app
 * @returns {ReactElement}
 */
export const Layout = ({ products, filterProducts, handleSizeChange, value, target, scrollRef, fetchMore }) => (
  <Container>
    <Sider>
      <SideBar filterProducts={filterProducts} />
    </Sider>
    <Content>
      <Header>

      </Header>
      <Wrapper ref={scrollRef} >
        <Main>
          <Products
            products={products}
            handleSizeChange={handleSizeChange}
            value={value}
            target={target}
          />
        </Main>
      </Wrapper>
    </Content>
  </Container>
)

const Container = styled.div`
  color: black;
  display: flex;
  height: 100%;
  margin-top: 0;
`;

const Wrapper = styled.div`
  overflow: scroll;
  max-height: 850px;
`;

const Sider = styled.div`
  width: 20%;
  background-color: #fff;
`;

const Content = styled.div`
  width: 80%;
  background-color: #fff7fd;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  /* background-color: gray; */
  height: 40px;
`;
const Main = styled.div`
  padding: 2em;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;