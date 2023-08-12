import axios from "axios";
import { defineStore } from "pinia";
import { MOVIE_AND_API } from "~/utils/private_api_keys";

export type Movies = Movie[];
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

const selectedMovie: MovieDetail = {
  Title: "",
  Year: "",
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Poster: "",
  Ratings: [
    {
      Source: "",
      Value: "",
    },
  ],
  Metascore: "",
  imdbRating: "",
  imdbVotes: "",
  imdbID: "",
  Type: "",
  DVD: "",
  BoxOffice: "",
  Production: "",
  Website: "",
  Response: "",
};

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [] as Movies,
    selectedMovie,
  }),
  actions: {
    async fetchMovies(path: string) {
      const {
        data: { Search },
      } = await axios.get(`${MOVIE_AND_API}${path}`);

      this.movies = Search;
    },
    async fetchMoviesDetail(path: string) {
      const { data } = await axios.get(`${MOVIE_AND_API}${path}`);

      this.selectedMovie = data;
    },
  },
});
