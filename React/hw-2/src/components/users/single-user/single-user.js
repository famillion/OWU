import React, {Component} from 'react';

class SingleUser extends Component {
    render() {
        let{name, username, id, email, website} = this.props.user;
        return (
            <div className="card m-2 bg-transparent">
                <ul className="list-group list-group-flush rounded shadow">
                    <li className="list-group-item rounded"><span className="lead text-info">Name:</span> <span className="text-monospace font-weight-bold">{name}</span></li>
                    <li className="list-group-item rounded"><span className="lead text-info">Username:</span> <span className="text-monospace font-weight-bold">{username}</span></li>
                    <li className="list-group-item rounded"><span className="lead text-info">ID:</span> <span className="text-monospace font-weight-bold">{id}</span></li>
                    <li className="list-group-item rounded"><span className="lead text-info">Mail:</span> <span className="text-monospace font-weight-bold">{email}</span></li>
                    <li className="list-group-item rounded"><span className="lead text-info">Website:</span> <span className="text-monospace font-weight-bold">{website}</span></li>
                </ul>
            </div>
        );
    }
}

export default SingleUser;
