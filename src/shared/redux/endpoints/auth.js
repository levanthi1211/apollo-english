import { api } from "shared/redux/api";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    test: build.query({
      query: () => ({
        url: "https://dummyjson.com/products/1",
      }),
    }),
    login: build.mutation({
      query: (arg) => ({
        url: "/public/v1/user/login",
        method: "POST",
        body: arg,
      }),
    }),
    changePassword: build.mutation({
      query: (arg) => ({
        url: "/private/v1/user/changePassword",
        method: "PUT",
        body: arg,
      }),
    }),
    refreshToken: build.mutation({
      query: (arg) => ({
        url: "/public/v1/user/refreshAccessToken",
        method: "POST",
        body: arg,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useRefreshTokenMutation,
  useTestQuery,
} = injectedRtkApi;
