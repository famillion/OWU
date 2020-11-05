import React, {Component} from 'react';

class SearchingValue extends Component {
  render() {
    return (
      <input type="text" className="form-control w-25"
             placeholder={this.props.inputPlaceholder}
             value={this.props.text}
             onChange={this.props.inputValue}
      />
    );
  }
}

export default SearchingValue;
