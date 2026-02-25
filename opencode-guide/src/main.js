import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import './style.css'; // Global styles with Tailwind

const routes = [
  {
    path: '/',
    component: App,
    children: [
      // Slides will be added here dynamically
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
