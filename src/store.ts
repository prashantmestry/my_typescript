import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./redux/reducer/HomeReducer";

const rootReducer = combineReducers({
  home: HomeReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
