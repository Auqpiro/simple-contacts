import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Storage} from "../type";

const store: Storage = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
