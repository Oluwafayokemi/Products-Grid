
/**
 * @file define temprorary spinner to use loading indicator
 */
// Modules
import React from 'react'
import styled from 'styled-components';
import { Icon, Spin } from 'antd';

/**
 * @function Spinner
 * @description define a loading indicator
 * @return reactElement
 */
export const Spinner = ({ fontSize = 50, spinnerClass }) => {
  const SPINSTYLE = {
    fontSize
  }
  const antIcon = <Icon type='loading' style={SPINSTYLE} spin />
  const spinnerClassName = spinnerClass || 't-spinner-body';

  return (
    <Div>
      <div className={spinnerClassName}>
        <Spin indicator={antIcon} />
      </div>
    </Div>
  )
}
const Div = styled.div`
    .t-spinner-body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    color: blue;
}


`;