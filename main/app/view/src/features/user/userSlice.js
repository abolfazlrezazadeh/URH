import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const sendOtp = createAsyncThunk('user/senOtp', async (userNum) => {
    // console.log('inside sendOtp')
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
    const response = await fetch('https://urh.liara.run/user/check-otp', {
        method: 'POST',
        body: JSON.stringify(phoneAndCode),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json()
    // console.log(data)
    return data
})

export const initialState = {
    haveSms: false,
    user: {
        phoneNumber: null,
        smsCode: null,
        jwtToken: '',
        refreshToken: null
    },
    failSmsSend: false,
    smsSendingLoading: false,
    errorMsg: '',
    failLoginCode: false,
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
        },

    },
    extraReducers: (builder) => {
        builder.addCase(sendOtp.pending, (state) => {
            state.smsSendingLoading = true
        })
        builder.addCase(sendOtp.fulfilled, (state) => {
            state.haveSms = true
        })
        builder.addCase(sendOtp.rejected, (state, action) => {
            state.failSmsSend = true
            state.errorMsg = action.payload
        })
        builder.addCase(checkOtp.fulfilled, (state, action) => {
            console.log(action.payload)
            state.user.jwtToken = action?.payload
            state.user.refreshToken = action?.payload?.refreshToken
            state.user.errorMsg = action?.payload?.errors?.message
        })
        builder.addCase(checkOtp.pending, (state, action) => {
            // console.log(action.payload)
        })
        builder.addCase(checkOtp.rejected, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const { updatePhoneNumber, updateUserSms } = userSlice.actions
export default userSlice.reducer