import React, {Component} from 'react';

class AllResults extends Component {

  blockStyle = {
    backgroundColor: 'rgba(9,9,9,0.17)'
  };

  render() {

    let {name, id, email, address: {city}, website} = this.props.user;

    return (
      <div className="p-5 mb-3 rounded shadow w-100" style={this.blockStyle}>

        <div className="d-flex">
          <div className="w-25 lead text-muted">Name:</div>
          <div className="font-weight-bold text-monospace lead">{name}</div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="w-25 lead text-muted">ID:</div>
          <div className="font-weight-bold text-monospace lead">{id}</div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="w-25 lead text-muted">Email:</div>
          <div className="font-weight-bold text-monospace lead">{email}</div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="w-25 lead text-muted">City:</div>
          <div className="font-weight-bold text-monospace lead">{city}</div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="w-25 lead text-muted">Website:</div>
          <div className="font-weight-bold text-monospace lead">{website}</div>
        </div>

      </div>
    );
  }
}

export default AllResults;
