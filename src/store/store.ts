import { configureStore } from "@reduxjs/toolkit";
import { playgroundSlice } from "./slices/slices";


// export const store = createStore(rootReducer)
export const store = configureStore({
    reducer: {
        playground: playgroundSlice.reducer}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


