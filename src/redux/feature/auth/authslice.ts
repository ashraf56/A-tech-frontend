import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    user: null | object
    token: null | string
}
const initialState: InitialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload

            state.user = user
            state.token = token

        },
        logout: (state) => {

            state.user = null
            state.token = null

        },


    }
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer

export const useCurrentUser = (state: RootState) => state.auth.user;
export const useCurrentToken = (state: RootState) => state.auth.token;