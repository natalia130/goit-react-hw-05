import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const urlTrending = "/trending/movie/day?language=en-US";
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzgzMmRkODc5NDEyOTBlNTY0YWU0ODUxZmRkMDRhOCIsInN1YiI6IjY2M2NhNWRmMGZiMjkxYjdkNTg5MWFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uC5dWSnbzRd1eheu97Fub7Bgh73cGa8BvKB0cPYfc-s'
  }
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(urlTrending, options);
    return response.data.results;
};

export const fetchSearchingMovies = async (query) => {
    const response = await axios.get(`/search/movie?query=${query}`, options);
    return response.data;
};

export const fetchMovieById = async (id) => {
    const response = await axios.get(`/movie/${id}language=en-US`, options);
    return response.data;
};

export const fetchMovieCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`, options);
  return response.data;
};

export const fetchMovieReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews?language=en-US&page=1`, options);
  return response.data;
};



