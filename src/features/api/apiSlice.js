import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
	reducerPath: 'carApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
	endpoints: (builder) => ({
		getCars: builder.query({
			query: (params) => {
				let { queryParams, search } = params || {};
				let queryString = '';
				if (Array.isArray(queryParams) && queryParams.length) {
					let str = queryParams
						.map((param) => {
							let key = Object.keys(param)[0];
							if (key !== 'name') return `${key}_like=${param[key]}`;
							return `${key}=${param[key]}`;
						})
						.join('&');

					queryString += str;
				}
				if (search?.trim().length) queryString += `&q=${search}`;

				return {
					url: `/cars?${queryString}`,
				};
			},
		}),
	}),
});

export default apiSlice;

export const { useGetCarsQuery } = apiSlice;
