import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: '',
  token: ''
};

const Users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setName(state, action) {

    },
  }
});

export const { setName} = Users.actions;
export default Users.reducer;
