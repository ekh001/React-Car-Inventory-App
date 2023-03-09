import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        color: "Color",
        nickname: "Nickname,"
    },
    reducers: {
        // This settings the input from the form to the state.make
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
        chooseNickname: (state, action) => { state.nickname = action.payload },
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseColor, chooseNickname } = rootSlice.actions