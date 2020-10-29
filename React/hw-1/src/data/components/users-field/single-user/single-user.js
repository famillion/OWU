import React, {Component} from 'react';

class SingleUser extends Component {

    str = 'card mt-2 p3 shadow-lg rounded col-8 offset-2';
    classes = this.str;


    render() {
        let {id, name, age, status} = this.props.user;

        this.classes = status
            ? this.str
            : this.str + ' text-white bg-primary';

        return (

            <div className={this.classes}>
                <div className="card-body">
                    <h4 className="card-title">User {id}</h4>
                    <ul className="list-group ">
                        <li className="list-group-item bg-transparent">
                            <span className={'list-inline text-black-50'}>User name: </span>
                            <span className={'lead font-weight-bold'}>{name}</span>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <span className={'list-inline text-black-50'}>User id: </span>
                            <span className={'lead font-weight-bold'}>{id}</span>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <span className={'list-inline text-black-50'}>User age: </span>
                            <span className={'lead font-weight-bold'}>{age}</span>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <span className={'list-inline text-black-50'}>User status: </span>
                            <span className={'lead font-weight-bold'}>{status.toString()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SingleUser;
