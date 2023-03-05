import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ErrorPage from '../components/ErrorPage.vue';
import MoviePage from '../components/MoviePage.vue';
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