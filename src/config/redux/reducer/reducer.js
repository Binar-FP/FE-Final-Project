import {combineReducers} from "redux";
import auth from "./auth";
import loading from "./loading";
import booking from "./booking";
import setting from "./setting";
import destinations from "./destinations";
import wishlist from "./wishlist";

const reducer = combineReducers({auth, loading, booking, setting, destinations, wishlist});

export default reducer;