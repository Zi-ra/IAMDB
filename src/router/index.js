import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ErrorPage from '../views/ErrorPage.vue';
import MoviePage from '../views/MoviePage.vue';
import PhotoModal from '../components/PhotoModal.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component : HomePage
    },
    {
        path: '/error',
        name: 'Error',
        component: ErrorPage
    },
    {
        path: '/movie/:id',
        name: 'Movie Detail',
        component : MoviePage
    },
    {
        path: '/photo/:id',
        name: 'Photo Modal',
        component: PhotoModal
    }
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes,

})

export default router