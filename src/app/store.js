import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
 export const store= configureStore({
    reducer: todoReducer
 })



// we have created a store using the configureStore function from the redux toolkit and passed in the todoReducer as the reducer.
// The todoReducer is a function that takes the current state and an action and returns the new state based on the action type.