import { FETCH_RESTAURANTS ,USER_SIGNUP, FETCH_RESTAURANT_BY_ID,FETCH_MENUITEMS_BY_ID} from '../actions/types';

const initialState = {
  restaurants: [],
  restaurant:{},
  user:{},
  menuItems:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      };
      case USER_SIGNUP:
      return {
        ...state,
        user: action.payload
      };
      case FETCH_RESTAURANT_BY_ID:
      return {
        ...state,
        restaurant: action.payload
      };
      case FETCH_MENUITEMS_BY_ID:
      return {
        ...state,
        menuItems: action.payload
      };
    default:
      return state;
  }
}
