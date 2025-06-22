import {configureStore} from '@reduxjs/toolkit';
import todosReducer from '../features/Slices/TodoSlice.jsx';
export const store = configureStore({
  reducer : todosReducer
});

// The above code configures a Redux store with a todos reducer for managing todo items.


