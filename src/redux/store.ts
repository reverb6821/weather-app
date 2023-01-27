import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMeddleware from 'redux-thunk';
import weatherReducer from './reducer/weatherReducer';

let rootReducer = combineReducers({
  weather: weatherReducer,
});

type AppRootReducer = typeof rootReducer;

export type RootStateType = ReturnType<AppRootReducer>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMeddleware)));

export default store;