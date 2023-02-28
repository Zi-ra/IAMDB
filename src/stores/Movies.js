export const useMoviesStore = defineStore('movies', {
    state: () => ({ 
        movies: []
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })
  