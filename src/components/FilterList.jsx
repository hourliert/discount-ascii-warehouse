import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    width: '100%',
  },
  radioButton: {
    width: 'auto',
  },
};

/**
 * Displays 3 radio buttons allowing the user to filter the smileys list.
 */
export default class FilterList extends Component {
  static get propTypes() {
    return {
      /**
       * The active filter. Eg. id, price, size
       * @type {string}
       */
      activeFilter: PropTypes.string,

      /**
       * Whether the filter should be disabled or not
       * @type {boolean}
       */
      disabled: PropTypes.bool,

      /**
       * Callback that should be call to filter the smileys list.
       * @type {(filter: string): void}
       */
      filterBy: PropTypes.func,
    };
  }

  render() {
    const { activeFilter, disabled, filterBy } = this.props;

    console.log(activeFilter, disabled, filterBy);

    return (
      <div className="layout vertical center-center" style={styles.container}>
        <p>Filter:</p>
      </div>
    );
  }
}
