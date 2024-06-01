import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState = {
    haveSms: false,
    user: {
        phoneNumber: null,
        smsCode: null,
        jwtToken: null,
    },
    failLogin: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        
    })
})

export default userSlice