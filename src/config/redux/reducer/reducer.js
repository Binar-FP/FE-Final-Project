import {combineReducers} from "redux";
import auth from "./auth";
import loading from "./loading";

const reducer = combineReducers({auth, loading});

export default reducer;