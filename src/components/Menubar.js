import React from 'react';
import { Link } from 'react-router-dom'

class MenuBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
                <div className="col-md-4">
                    <a className="navbar-brand" href="/">PAG Vendor Portal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {this.props.currentUser ? <React.Fragment><div className="collapse navbar-collapse col-md-4 col-md-offset-4 mr-auto" id="navbarSupportedContent">
                    <form className="form-inline my-3 my-lg-0 mr-auto ml-auto">
                        <input className="form-control mr-md-6" type="search" placeholder="Begin typing to search..." aria-label="Search"></input>
                    </form>
                </div>

                <div className="col-med-3">
                    <ul className="navbar-nav">
                        <li className="nav-item mt-auto mb-auto">
                            <span className="badge badge-danger">4</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                    Hello Patrick!
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contact
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to={"/logout"} className="nav-link">Log Out</Link>
                        </li>
                    </ul>
                </div></React.Fragment> : ""}
            </nav>
        );
    }
}

export default MenuBar;
