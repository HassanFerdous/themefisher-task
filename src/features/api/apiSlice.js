import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
	reducerPath: 'carApi',
	baseQuery: fakeBaseQuery({ baseUrl: '/sdlfksdf' }),
	endpoints: (builder) => ({
		getCars: builder.query({
			query: (param) => {
				return {
					url: '/car',
				};
			},
		}),
	}),
});

export default apiSlice;
