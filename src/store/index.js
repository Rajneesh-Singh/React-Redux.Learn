
import {createStore, combineReducers} from 'redux'
import personReducer from './reducers/personReducer'
import gameReducer from './reducers/gameReducer'


// const reducer = (state , actions) =>{
  
  
const allReducers = combineReducers({game:gameReducer,person:personReducer})

   
   
const InitialState = {
       person:{name:"Aman Singh"},
       game:{game:"Cricket"}
   }

const store = createStore(allReducers , InitialState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())






export default store

