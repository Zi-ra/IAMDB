import { defineStore } from 'pinia';
import env from '../env.js';
export const useMoviesStore = defineStore('movies', {
    state: () => ({ 
        movies: []
    }),
    getters: {
      
    },
    actions: {
      async getMovies() {
        const result = await fetch(`https://imdb-api.com/en/API/Search/movie?api_key=${env.apikey}/movies?q=${expression}`);
        const response = await result.json();
        this.movies = response;
      },
    },
  })
  