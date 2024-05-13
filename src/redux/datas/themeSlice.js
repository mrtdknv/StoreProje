import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState: {
        activeTheme: localStorage.getItem('currentTheme'),

    },
    reducers:{
        changeActiveTheme: (state, action) => {

            state.activeTheme = action.payload;
        },
    }

});

export const { changeActiveTheme } = themeSlice.actions;
