import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({ baseUrl: '' }),
//     tagTypes: [''],
//     endpoints: builder => ({})
// })


const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://urh.liara.run/user/get-otp' }),
    endpoints: (builder) => ({
        // Define your API endpoints here
    }),
});

export default  apiSlice