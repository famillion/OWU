import React, {Component} from 'react';
import Search from "./search/search";
import ResultsArea from "./results/results-area";
import {UsersApiService} from "../../services/users-api-service";

class Wrapper extends Component {

  state = {
    method: false,
    inputValue: '',
    users: [],
  };

  usersApiService = new UsersApiService();


  async componentDidMount() {
    this.setInputPlaceholder();
    this.setState({
      users: await this.usersApiService.getAllUsers()
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.method === this.state.method) this.state.inputValue = '';
  }

  changeMethod = (e) => {
    this.setState({
      method: e.target.value === 'id'
    });
  };

  getInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  setInputPlaceholder() {
    return this.state.method ? 'Enter user ID (number only)' : 'Enter name or surname';
  }

  render() {

    let searchProps = {
      changeMethod: this.changeMethod,
      inputValue: this.getInputValue,
      text: this.state.inputValue,
      inputPlaceholder: this.setInputPlaceholder(),
    };

    let resultProps = {
      searchMethod: this.state.method,
      users: this.state.users,
      searchValue: this.state.inputValue,
    };

    return (
      <div className="container">
        <Search {...searchProps} />
        {
          <ResultsArea {...resultProps}/>
        }
      </div>
    );
  }
}

export default Wrapper;
