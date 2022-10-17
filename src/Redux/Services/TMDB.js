import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
const page = 1


export const tmdbApi = createApi({
    reducerPath : "tmdbApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
    endpoints : (builder) => ({
        getMovies: builder.query({
            query: () => {
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`
            }
        }),

        getTrendingMovies : builder.query({
            query : () => {
                return `trending/movie/day?api_key=${tmdbApiKey}`
            }
        }),

        getMovieDetails : builder.query({
            query : (id) => {
                return `movie/${id}?api_key=${tmdbApiKey}`
            }
        }),

        getMovieCredits : builder.query({
            query : (id) => {
                return `movie/${id}/credits?api_key=${tmdbApiKey}`
            }
        }),

        getMovieRecommendationsForMovie: builder.query({
            query: (id) => {
                return `movie/${id}/recommendations?api_key=${tmdbApiKey}`
            }
         }),

         getSearchMovie: builder.query({
            query : (search_query) => {
                return search_query ? `search/movie?api_key=${tmdbApiKey}&query=${search_query}` : false
            }
         })


    })
})

export const { useGetMoviesQuery , 
    useGetTrendingMoviesQuery , 
    useGetMovieDetailsQuery , 
    useGetMovieCreditsQuery ,
    useGetMovieRecommendationsForMovieQuery,
    useGetSearchMovieQuery

} = tmdbApi