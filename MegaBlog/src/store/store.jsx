import { configureStore} from "@reduxjs/toolkit";
import AuthSlice_reducers  from "./features/AuthSlice";
export const store = configureStore({
  reducer: {
    auth: AuthSlice_reducers,
  },
});



