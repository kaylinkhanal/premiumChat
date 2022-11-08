import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    registerName: "",
    registerEmail: "",
    registerPassword: "",
}

const RegisterSlice = createSlice({
    name: "Register",
    initialState,
    reducers: {
        changeRegisterName: (state, actions) => {
            state.registerName = actions.payload
        },
        changeRegisterEmail: (state, actions) => {
            state.registerEmail = actions.payload
        },
        changeRegisterPassword: (state, actions) => {
            state.registerPassword = actions.payload
        },
    }
})

export const { changeRegisterName, changeRegisterEmail, changeRegisterPassword } = RegisterSlice.actions;

export default RegisterSlice.reducer;

