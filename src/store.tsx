import { createStore } from "redux";
import counterReducer from "./reducers"; // Import your root reducer

const store = createStore(counterReducer);

export default store;
