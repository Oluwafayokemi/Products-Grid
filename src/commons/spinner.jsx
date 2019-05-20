
/**
 * @file define temprorary spinner to use loading indicator
 */
// Modules
import React from 'react'
import styled from 'styled-components';
import spin from '../util/spin.gif';

/**
 * @function Spinner
 * @description define a loading indicator
 * @return reactElement
 */
export const Spinner = () => {
  return (
    <Div>
      <div className={'t-spinner-body'}>
        <img src={spin} />
      </div>
    </Div>
  )
}
const Div = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: auto;
  padding-top: 9em;
}


`;