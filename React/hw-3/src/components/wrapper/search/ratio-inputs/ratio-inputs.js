import React, {Component} from 'react';

class RatioInputs extends Component {
  render() {
    return (
      <div className="d-flex flex-sm-wrap">
        <label className="small p-0 m-0 d-flex align-items-center font-weight-bold">Search by NAME:
          <input type="radio" name="search-method" className="m-1" value="name" defaultChecked={true}
                 onChange={this.props.changeMethod}/>
        </label>
        <label className="small p-0 m-0 d-flex align-items-center font-weight-bold">Search by ID:
          <input type="radio" name="search-method" className="m-1" value="id"
                 onChange={this.props.changeMethod}/>
        </label>
      </div>
    );
  }
}

export default RatioInputs;
