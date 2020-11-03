import React, {Component} from 'react';
import Search from "./search/search";
import Result from "./result/result";

class Wrapper extends Component {

  state = {
    method: false,
    inputValue: '',
  };

  changeMethod = (e) => {
    this.setState({
      method: e.target.value === 'id'
    });
  }

  getInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {

    console.log(this.state.method, this.state.inputValue);
    return (
      <div className="container">
        <Search changeMethod={this.changeMethod} inputValue = {this.getInputValue}/>
        {
          this.state.inputValue && <Result/>
        }
      </div>
    );
  }
}

export default Wrapper;
