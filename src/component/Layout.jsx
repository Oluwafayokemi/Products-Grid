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
export const Layout = ({products}) => (
  <Container>
    <Sider>
      <SideBar />
    </Sider>
    <Content>
      <Header>

      </Header>
      <Main>
        <Products products={products}/>
      </Main>
    </Content>
  </Container>
)

const Container = styled.div`
  color: black;
  display: flex;
  height: 100%;
  margin-top: 0;
`;

const Sider = styled.div`
  width: 20%;
  background-color: #fff;
`;

const Content = styled.div`
  width: 80%;
  background-color: #ead7ed;
  
`;

const Header = styled.div`
  display: flex;
  background-color: gray;
  height: 40px;
`;
const Main = styled.div`
  padding: 2em;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;