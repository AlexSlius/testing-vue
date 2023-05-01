import { createRouter, createWebHistory } from "vue-router";

import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})