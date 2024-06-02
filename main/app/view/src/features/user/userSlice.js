import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const sendOtp = createAsyncThunk('user/senOtp', async (userNum) => {
    const userNumAsObj = {phone: userNum}
    console.log('inside sendOtp')
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

// export const checkOtp = createAsyncThunk('user/checkOtp', async () => {
//     const response = await fetch('https://urh.liara.run/user/check-otp', {
//         method: 'POST',
//         body: JSON.stringify(),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
// })

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
    reducers: {
        updatePhoneNumber: (state, action) => {
            state.user.phoneNumber = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending,   (state) => {
            state.senSmsLoading = true
        })
        builder.addCase(sendOtp.fulfilled, (state) => {
            state.haveSms = true
        })
        builder.addCase(sendOtp.rejected,  (state) => {
            state.failLogin = true
        })
    }
})

export const { updatePhoneNumber } = userSlice.actions;
export default userSlice.reducer