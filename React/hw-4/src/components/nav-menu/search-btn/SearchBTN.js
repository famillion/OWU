import React, {Component} from 'react';


class SearchBtn extends Component {
  render() {
    return (
      <div>
        <form className="form-inline my-0 my-lg-1 d-flex justify-content-end">
          <input className="form-control mr-sm-1 w-50" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-1 w-25" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBtn;
