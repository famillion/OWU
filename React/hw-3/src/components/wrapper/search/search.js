import React, {Component} from 'react';
import RatioInputs from "./ratio-inputs/ratio-inputs";
import SearchingValue from "./searching-value/searching-value";


class Search extends Component {


  render() {

    return (
      <div className="jumbotron shadow p-5 d-flex justify-content-center col-xl-8 offset-xl-2
      col-lg-10 offset-lg-1 col-md-12">
        <form action="" className="w-100">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text  bg-secondary text-white-50">

                <RatioInputs
                  changeMethod={this.props.changeMethod}
                />

              </div>
            </div>

            <SearchingValue {...this.props}/>

          </div>
        </form>
      </div>
    );
  }

}

export default Search;
