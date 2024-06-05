import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const sendOtp = createAsyncThunk('user/senOtp', async (userNum) => {
    console.log('inside sendOtp')
    const response = await fetch('https://urh.liara.run/user/get-otp', {
        method: 'POST',
        body: JSON.stringify(userNum),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json()
    console.log(data.data)
})

export const checkOtp = createAsyncThunk('user/checkOtp', async (phoneAndCode) => {
    // console.log(phoneAndCode)
    const response = await fetch('https://urh.liara.run/user/check-otp', {
        method: 'POST',
        body: JSON.stringify(phoneAndCode),
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
        phoneNumber: 'phoneNumber not-set',
        smsCode: 'smsCode not-set',
        jwtToken: 'jwtToken not-set',
    },
    failLogin: false,
    smsSendingLoading: false,

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updatePhoneNumber: (state, action) => {
            state.user.phoneNumber = action.payload
        },
        updateUserSms: (state, action) => {
            state.user.smsCode = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending, (state) => {
            state.smsSendingLoading = true
        })
        builder.addCase(sendOtp.fulfilled, (state) => {
            state.haveSms = true
        })
        builder.addCase(sendOtp.rejected, (state) => {
            state.failLogin = true
        })
        builder.addCase(checkOtp.pending, (state) => {})
        builder.addCase(checkOtp.fulfilled, (state) => {})
        builder.addCase(checkOtp.rejected, (state) => {})
    }
})

export const { updatePhoneNumber, updateUserSms } = userSlice.actions
export default userSlice.reducer