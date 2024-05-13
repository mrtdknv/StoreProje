import { configureStore } from "@reduxjs/toolkit";

import {themeSlice} from "./datas/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,

    }
})