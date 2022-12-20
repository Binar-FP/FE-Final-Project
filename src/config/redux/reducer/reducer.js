import {combineReducers} from "redux";
import auth from "./auth";
import loading from "./loading";
import booking from "./booking";

const reducer = combineReducers({auth, loading, booking});

export default reducer;