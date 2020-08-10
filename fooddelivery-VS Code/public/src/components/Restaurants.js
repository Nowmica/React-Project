import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/postAction';
import { NavLink } from 'react-router-dom';

class Restaurants extends Component {

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    constructor() {
        super()
    }

    mapRestaurants() {
        const restaurantCards = this.props.reducer.map((restaurant, index) =>
            <div className="col-sm-3 my-3" key={index}>
                <div className="view overlay zoom">
                    <div className="card mb-4 border-0 box-shadow-hover pointer">
                        <img src={restaurant.restaurantImg} className="card-img-top" style={{ height: 193 }} alt="..." />
                        <div className="mask flex-center">
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.restaurantName}</h5>
                                <p className="card-text text-muted font-italic">
                                    {restaurant.restaurantSpeciality}
                                </p>
                                <NavLink className="card-link" to={"restaurants/menu/" + restaurant.restaurantId}>Quick View</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return restaurantCards
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.mapRestaurants()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducer.restaurants
});

export default connect(mapStateToProps, { fetchRestaurants })(Restaurants);
