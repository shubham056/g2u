import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    msg:'initial message'
};
const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            return { message: action.payload };
        },
        clearMessage: () => {
            return { message: "clear message" };
        },
    },
});
const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions
export default reducer;