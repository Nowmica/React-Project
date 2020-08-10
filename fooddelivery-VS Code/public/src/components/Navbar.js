import React, { Component } from 'react';
import Login from './Login';
import SignUp from './signUp';
import Home from './Home';
import Logo from './OnlyIcon.png';
import Restaurant from './Restaurants';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import RestaurantItems from './RestaurantItems';

class Navbar extends Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
                
                    <NavLink className="navbar-brand" to="/home" activeClassName="active"><img className="" src={Logo} style={{ height: 35 }} alt=""/>FOOD BOWL</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/restaurant" activeClassName="active">Restaurants</NavLink>
                            </li>
                        </ul>

                        {/* <form className="form-inline mx-0">
                            <div className="md-form my-0"></div>
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        </form> */}

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/Login" activeClassName="active">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup" activeClassName="active">Register</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="" activeClassName="active">Cart<i className="fas fa-shopping-cart"></i></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/" component={Home} />
                <Route exact path="/restaurant" component={Restaurant} />
                <Route exact path="/restaurants/menu/:restaurantId" component={RestaurantItems} />
            </Router>
        );
    }
}

export default Navbar;