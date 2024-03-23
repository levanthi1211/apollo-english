import { api } from "shared/redux/api";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPerformance: build.query({
      query: () => ({
        url: "/private/v1/teacher/performance",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPerformanceQuery } = injectedRtkApi;
