import { createApi } from "@reduxjs/toolkit/query/react";
import { globalConfigs } from "configs";
import axios from "axios";
import { logOut, setTokens } from "../slices/authSlice";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, body, params, headers }, { getState, signal }) => {
    try {
      const store = getState();
      const isPrivate = url.includes("private");

      const getAuthHeader = () => {
        if (store?.auth?.accessToken && isPrivate)
          return {
            Authorization: `Bearer ${store?.auth?.accessToken}`,
          };
        return {};
      };

      const result = await axios({
        url: url.startsWith("http") ? url : baseUrl + url,
        method: method ?? "GET",
        data: body,
        params,
        signal,
        withCredentials: false,
        headers: {
          ...getAuthHeader(),
          ...headers,
          "x-cors-api-key": "temp_8897abaadeee6e9ec925d643e4f941fb",
        },
      });
      return result;
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status ?? null,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const axiosBaseQueryWithUrl = axiosBaseQuery({
  baseUrl: globalConfigs.publicApiBaseUrl,
});

const axiosBaseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await axiosBaseQueryWithUrl(args, api, extraOptions);
  const store = api.getState();
  const refreshToken = store?.auth?.refreshToken;
  if (result?.error?.status === 403) {
    const refreshResult = await axiosBaseQueryWithUrl(
      {
        ...args,
        url: "/public/v1/user/refreshAccessToken",
        method: "POST",
        body: {
          refreshToken,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.error) {
      api.dispatch(logOut());
    } else {
      api.dispatch(
        setTokens({
          accessToken: refreshResult.data.accessToken,
          refreshToken: refreshResult.data.refreshToken,
        })
      );
      result = await axiosBaseQueryWithUrl(args, api, extraOptions);
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: axiosBaseQueryWithReauth,
  endpoints: () => ({}),
});
