import React, {Component} from 'react';
import Users from "../users/Users";

class NavMenu extends Component {

    state = {
        menuItem: 0
    };

    render() {
        let value = this.state.menuItem;
        return (
            <div>
                <div className="d-flex flex-row justify-content-center jumbotron rounded shadow-lg">
                    <div className="p-2 col-3">
                        <button type="button" className="btn btn-dark btn-lg btn-block"
                                onClick={() => this.choose(1)}
                        >Users
                        </button>
                    </div>
                    <div className="p-2 col-3">
                        <button type="button" className="btn btn-dark btn-lg btn-block"
                                onClick={() => this.choose(2)}
                        >Posts
                        </button>
                    </div>
                    <div className="p-2 col-3">
                        <button type="button" className="btn btn-dark btn-lg btn-block"
                                onClick={() => this.choose(3)}
                        >Comments
                        </button>
                    </div>
                </div>
                {
                    (() => {
                        switch (value) {
                            case 1:
                                return (
                                    <div className="d-flex flex-row justify-content-center jumbotron mt-2 rounded shadow-lg">
                                        <Users/>
                                    </div>);
                                case 2:
                                return (
                                    <div className="d-flex flex-row justify-content-center jumbotron mt-2 rounded shadow-lg">
                                        POSTS
                                    </div>);
                                case 3:
                                return (
                                    <div className="d-flex flex-row justify-content-center jumbotron mt-2 rounded shadow-lg">
                                        COMMENTS
                                    </div>);

                        }
                    })()
                }
            </div>
        );
    }

    choose(number) {
        this.setState({
            menuItem: number
        });

    }
}

export default NavMenu;
