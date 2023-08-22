import axios from "axios";
import { defineStore } from "pinia";
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type Movies = Movie[];
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

export const useMovieStore = defineStore<
  "movie",
  { movies: Movies; selectedMovie: MovieDetail | null },
  Record<string, never>,
  {
    fetchMovies(title: string): Promise<void>;
    fetchMoviesDetail(imdbID: string): Promise<void>;
  }
>("movie", {
  state: () => ({
    movies: [],
    selectedMovie: null,
  }),
  actions: {
    async fetchMovies(title: string) {
      try {
        const res = await axios.post("/api/movies/", { s: title });
        if (res.status !== 200) {
          throw new Error("store api호출 오류");
        }

        const {
          data: { Search },
        } = res;

        this.movies = Search;
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    },
    async fetchMoviesDetail(imdbID: string) {
      try {
        const res = await axios.post("/api/movies/", {
          i: imdbID,
          plot: "full",
        });

        if (res.status !== 200) {
          throw new Error("store api호출 오류");
        }

        this.selectedMovie = res.data;
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    },
  },
});
