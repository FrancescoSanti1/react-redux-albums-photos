import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            getUsers: builder.query({
                query: () => ({
                    url: "/users",
                    method: "GET"
                }),
                providesTags: ["User"]
            }),
            addUser: builder.mutation({
                query: () => ({
                    url: "/users",
                    method: "POST",
                    body: { name: faker.person.fullName() }
                }),
                invalidatesTags: ["User"]
            }),
            deleteUser: builder.mutation({
                query: (user) => ({
                    url: `/users/${user.id}`,
                    method: "DELETE"
                }),
                invalidatesTags: ["User"]
            })
        }
    }
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = usersApi;