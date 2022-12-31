import {combineReducers} from "redux";
import auth from "./auth";
import loading from "./loading";
import booking from "./booking";
import setting from "./setting";

const reducer = combineReducers({auth, loading, booking, setting,});

export default reducer;