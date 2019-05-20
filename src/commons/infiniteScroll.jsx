/**
 * @file infinite scroll
 */

//  Modules
import React from 'react';
import PropTypes from 'prop-types';
// Style
import './index.css';
// Spinner
import { Spinner } from './spinner';
/**
 * @class InfinitScroll
 * @description pagination with infinite scroll 
 * @return {ReactElement}
 */
export class InfiniteScroll extends React.Component {
  state = {
    initialHeight: null,
    divHeight: null,
    scrollCount: 1,
    pagination: {},
    loading: false
  };

  componentDidMount () {
    const { pageLabel, nextLabel, lastLabel } = this.props;
    // use mutationObserver to watch for changes being made to the DOM tree
    const [page, next, last] = [this.props[pageLabel], this.props[nextLabel], this.props[lastLabel]]
    const targetNode = document.getElementById('custom-infinite');
    if ('MutationObserver' in window) {
      const { initialHeight } = this.state;
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList') {
            let state = { divHeight: mutation.target.clientHeight };
            if (!initialHeight) {
              state.initialHeight = mutation.target.clientHeight;
            }
            this.setState({ ...state, pagination: { page, next, last } });
          }
        });
      });

      const observerConfig = {
        attributes: true,
        childList: true,
        characterData: true
      };
      // Starts listening for changes in the root HTML element of the page.
      observer.observe(targetNode, observerConfig);
    }
  };

  // defines the action that happens onScroll
  handleScroll = async () => {
    const { scrollRef } = this.props;
    // get height of verticalScroll and offsetHeight from the element
    const verticalScroll = scrollRef.current.scrollTop;
    const offsetHeight = scrollRef.current.offsetHeight;
    const { divHeight, scrollCount, initialHeight } = this.state;
    // sum up offsetHeight and verticalScroll to get totalHeight of the element
    const totalHeight = offsetHeight + verticalScroll;
    // Checks where the divHeight and totalHeight are equal and return a boolean
    // rounds up divHeight and initialHeight to a whole number and equates to scroll count which also returns boolean
    // console.log(divHeight, Math.round(totalHeight), 'div Height')
    // console.log(Math.round(divHeight / initialHeight), scrollCount, 'scroll count' )
    if (
      divHeight === Math.round(totalHeight) &&
      Math.round(divHeight / initialHeight) === scrollCount
    ) {
      this.setState(prevState => ({
        scrollCount: prevState.scrollCount + 1,
      }))
      this.callAction()
    }
  };

  /**
   * @function callFetchmoreAction
   * @description fetches more items for pagination
   */
  callAction = async () => {
    const { action } = this.props;
    const { pagination } = this.state;

    if (pagination.next) {
      try {
        this.setState({ loading: true })
        const nextPagination = await action(pagination)
        this.setState({ pagination: nextPagination })
      } catch (err) {
        this.setState({ loading: false })
      }
    }
  }

  /**
   * @function customButton
   * @description display spinner when loading
   * @return {ReactElement}
   */
  customSpinner = () => {
    return (
      <Spinner spinnerClass="spinner" />
    )
  }

  render() {
    const { children, scrollRef, spinnerFunc } = this.props;
    console.log(scrollRef, 'scrollRef')
    const { loading } = this.state;
    const customRef = scrollRef && scrollRef.current;
    const customSpinner = spinnerFunc || this.customSpinner()
    if (customRef) {
      // call the handleScroll method with the onScroll event handler when scrollRef.current is present
      customRef.addEventListener('scroll', this.handleScroll);
    }
    return (
      <div>
        <div id="custom-infinite">
          {children}
        </div>
        {children && loading ?
          customSpinner
          : null
        }
      </div>
    );
  }
}

InfiniteScroll.defaultProps = {
  isScroll: false,
  page: 1,
  next: 'next is a string',
  last: ''
}

InfiniteScroll.propTypes = {
  next: PropTypes.string,
  last: PropTypes.string,
  page: PropTypes.number,
  isScroll: PropTypes.bool,
  scrollRef: PropTypes.shape({}),
  action: PropTypes.func,
  spinnerFunc: PropTypes.func,
};