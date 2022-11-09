// import {combineReducers} from "redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import projectReducer from "./reducers/projectSlice";

// // initial states here
// const initialState = {};
//
// // middleware
// const middleware = [thunk];
//
// // creating store
// export const store = createStore(
//         rootReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(...middleware))
//         );
//
// // assigning store to next wrapper
// const makeStore = () => store;
//
// export const wrapper = createWrapper(makeStore);

const rootReducer = combineReducers({
	projectReducer
})

export const setupReducer = () => {
	return configureStore({
		reducer: rootReducer
	})
}