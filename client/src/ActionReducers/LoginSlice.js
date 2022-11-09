import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loginName: "",
    loginToken: "",
}

const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        changeLoginName: (state, actions) => {
            state.loginName = actions.payload
        },
        changeLoginToken: (state, actions) => {
            state.loginToken = actions.payload
        },
    }
})

export const { changeLoginName, changeLoginToken } = LoginSlice.actions;

export default LoginSlice.reducer;

