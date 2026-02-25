<script setup lang="ts">
import { useProgressStore } from '../stores/progressStore';
import { computed } from 'vue';

const { setPageCompleted, isPageCompleted } = useProgressStore();
const pageName = 'curriculum-skills';
const completed = isPageCompleted(pageName);

const markPageAsCompleted = () => {
  setPageCompleted(pageName, !completed.value);
};
</script>

<template>
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
  <!-- Header -->
  <header class="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-50 border-b border-slate-200 dark:border-primary/20">
    <div class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer">
      <router-link to="/">
        <span class="material-symbols-outlined text-2xl">arrow_back</span>
      </router-link>
    </div>
    <h1 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center">Habilidades Essenciais</h1>
    <div class="flex w-10 items-center justify-end">
      <button class="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary">
        <span class="material-symbols-outlined">help</span>
      </button>
    </div>
  </header>

  <main class="flex-1 pb-24 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold">Habilidades Essenciais</h1>
    <p class="mt-4">Conteúdo para habilidades essenciais em desenvolvimento.</p>

    <section class="p-4 w-full max-w-md mt-8">
      <button @click="markPageAsCompleted" :class="[completed ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90']" class="flex items-center justify-center rounded-lg h-10 px-6 text-white text-sm font-semibold transition-colors w-full">
        <span>{{ completed ? 'Desmarcar como Concluído' : 'Marcar como Concluído' }}</span>
      </button>
    </section>
  </main>

  <!-- Bottom Navigation - Assuming this is handled by App.vue -->
</div>
</template>

<style scoped>
/* Add any specific styles for the skills view here */
</style>