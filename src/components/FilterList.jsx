import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { RadioButtonGroup, RadioButton } from 'material-ui';

const styles = {
  container: {
    width: '100%',
  },
  radioButton: {
    width: 'auto',
  },
};

@pureRender
export default class FilterList extends Component {
  static get propTypes() {
    return {
      activeFilter: PropTypes.string,
      disabled: PropTypes.bool,

      filterBy: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e, value) {
    const { filterBy } = this.props;

    filterBy(value);
  }

  render() {
    const { activeFilter, disabled } = this.props;

    return (
      <div className="layout vertical center-center" style={styles.container}>
        <p>Filter:</p>
        <RadioButtonGroup
          className="layout horizontal around-justified"
          name="filter"
          defaultSelected="id"
          valueSelected={activeFilter}
          style={styles.container}
          onChange={this.onChange}
        >
          <RadioButton
            disabled={disabled}
            value="id"
            label="Id"
            style={styles.radioButton}
          />
          <RadioButton
            disabled={disabled}
            value="price"
            label="Price"
            style={styles.radioButton}
          />
          <RadioButton
            disabled={disabled}
            value="size"
            label="Size"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>
    );
  }
}
