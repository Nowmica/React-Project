import { FETCH_RESTAURANTS, USER_SIGNUP,FETCH_RESTAURANT_BY_ID, FETCH_MENUITEMS_BY_ID } from './types';
import axios from 'axios';

export const fetchRestaurants = () => dispatch => {

  axios.get("http://localhost:8081/restaurants/all")
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
      })
    })
};
export const signup = (data) => dispatch => {
  axios.post("http://localhost:8081/user/signup", data)
    .then(response => {
      console.log(response)

      dispatch({
        type: USER_SIGNUP,
        payload: response.data
      })
    })
};
// export const userSignIn = (mobile,password) => dispatch => {
//   axios.request({
//     url: "http://localhost:8081/user/signin",
//     method: "post",
//     auth: {
//       username: mobile,
//       password: password
//     }
//   }).then(res => {
//     dispatch({
//       type: USER_SIGNIN,
//       payload: res.data
//     })
//   })
// };
export const fetchRestaurantById = (restaurantId) => dispatch => {
  axios.get("http://localhost:8081/restaurants/find/" + restaurantId)
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANT_BY_ID,
        payload: res.data
      })
    })
};
export const fetchMenuItemsById = (restaurantId) => dispatch => {
  axios.get("http://localhost:8081/menu/find/" + restaurantId)
    .then(res => {
      dispatch({
        type: FETCH_MENUITEMS_BY_ID,
        payload: res.data
      })
    })
};