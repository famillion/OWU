import React, {Component} from 'react';

class Oops404 extends Component {
  state={
    page: ''
  }

  componentDidMount() {
    this.setState({
      page: window.location.href.toString()
    });
  }

  render() {

    return (
      <div className="text-field col-8 offset-2">
        <span className="font-goldman d-block" style={{color: 'red'}}>404</span>
        <small className="text-muted small" style={{fontSize: '12px'}}>Oops! Not found page {this.state.page}</small>
      </div>
    );
  }
}

export default Oops404;
