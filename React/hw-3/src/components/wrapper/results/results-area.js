import React, {Component} from 'react';
import AllResults from "./all-results/all-results";

class ResultsArea extends Component {


  render() {

    let {searchMethod, searchValue, users} = this.props

    return (
      <div className="jumbotron shadow p-5 d-flex flex-column justify-content-center col-xl-8 offset-xl-2
      col-lg-10 offset-lg-1 col-md-12">
        <div className="display-4 p-3">Search results by {this.props.searchMethod?'ID':'NAME'}:</div>
        {
          users.map(user => {
            if(searchMethod){
              if((typeof +searchValue === 'number')
                && user.id === +searchValue){
                return <AllResults user={user} key={user.id}/>
              }
            }else {
              if(user.name.toLowerCase().indexOf(searchValue)!==-1
              && searchValue.trim())
                return <AllResults user={user} key={user.id}/>
            }
          })
        }

      </div>
    );


  }
}

export default ResultsArea;
