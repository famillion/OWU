import React, {Component} from 'react';


class Search extends Component {


  render() {

    return (
      <div className="jumbotron shadow p-5 d-flex justify-content-center col-xl-8 offset-xl-2
      col-lg-10 offset-lg-1 col-md-12">
        <form action="" className="w-100">
          <div className="input-group" >
            <div className="input-group-prepend">
              <div className="input-group-text  bg-secondary text-white-50">
                <div>
                  <label className="small p-0 m-0 d-flex align-items-center font-weight-bold">Search by NAME:
                    <input type="radio" name="search-method" className="m-1" value="name"
                    onChange={this.props.changeMethod}/>
                  </label>
                </div>
                <div>
                  <label className="small p-0 m-0 d-flex align-items-center font-weight-bold">Search by ID:
                    <input type="radio" name="search-method" className="m-1" value="id"
                    onChange={this.props.changeMethod}/>
                  </label>
                </div>
              </div>
            </div>
            <input type="text" className="form-control" aria-label="Text input with radio button"
            onChange={this.props.inputValue}
            />
          </div>
        </form>
      </div>
    );
  }

  // changedMethod = (e) => {
  //   this.setState({
  //     method: e.target.value === 'id'
  //   });
  // }
}

export default Search;
