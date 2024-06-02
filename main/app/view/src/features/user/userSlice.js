import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const sendOtp = createAsyncThunk('user/senOtp', async (userNum) => {
    const userNumAsObj = {phone: userNum}
    // console.log(userNumAsObj, JSON.stringify(userNumAsObj))
        const response = await fetch('https://urh.liara.run/user/get-otp', {
            method: 'POST',
            body: JSON.stringify(userNumAsObj),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data)
})

export const initialState = {
    haveSms: false,
    user: {
        phoneNumber: 'not-set',
        smsCode: 'not-set',
        jwtToken: 'not-set',
    },
    failLogin: false,
    senSmsLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending,   (state, action) => {
            state.senSmsLoading = true
        })
        builder.addCase(sendOtp.fulfilled, (state, action) => {
            state.haveSms = true
        })
        builder.addCase(sendOtp.rejected,  (state, action) => {
            state.failLogin = true
        })
    }
})

export const { reducer } = userSlice
export default userSlice.reducer