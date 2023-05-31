import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT",
    prepareHeaders(headers) {
      headers.set("Content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
