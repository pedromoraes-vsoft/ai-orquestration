<script setup lang="ts">
import { ref, watch } from 'vue';
import { useProgressStore } from '../stores/progressStore';

const { setPageCompleted, isPageCompleted } = useProgressStore();
const pageName = 'github-mcp-connection';
const completed = isPageCompleted(pageName);

const connected = ref(false);

// Initialize 'connected' state from progress store
if (completed.value) {
  connected.value = true;
}

// Watch for changes in 'connected' and update progress store
watch(connected, (newVal) => {
  setPageCompleted(pageName, newVal);
});

const toggleConnection = () => {
  connected.value = !connected.value;
};

const manageRepositories = () => {
  alert('Funcionalidade para Gerenciar Repositórios ainda não implementada.');
};

const improvedCodeReviews = () => {
  alert('Funcionalidade para Revisões de Código Aprimoradas ainda não implementada.');
};

const securityAndCompliance = () => {
  alert('Funcionalidade para Segurança e Conformidade ainda não implementada.');
};

const markPageAsCompleted = () => {
    setPageCompleted(pageName, !completed.value);
    connected.value = !connected.value; // Sync connected state with completion
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
<h1 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center">Conexão MCP GitHub</h1>
<div class="flex w-10 items-center justify-end">
<button class="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary">
<span class="material-symbols-outlined">help</span>
</button>
</div>
</header>
<main class="flex-1 pb-24">
<section class="p-4 flex flex-col items-center justify-start">
<p class="text-slate-500 dark:text-slate-400 text-sm leading-normal max-w-sm text-center">Conecte sua conta GitHub para integrar o MCP e gerenciar seus repositórios.</p>
</section>
<!-- Connection Status -->
<section class="p-4">
<div class="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 rounded-xl p-5 shadow-sm">
<div class="flex items-center justify-between gap-6 mb-3">
<p class="text-slate-900 dark:text-slate-100 text-base font-semibold">Status da Conexão</p>
<div class="flex items-center gap-2">
<div :class="[connected ? 'bg-green-500' : 'bg-red-500']" class="size-2 rounded-full"></div>
<p :class="[connected ? 'text-green-500' : 'text-red-500']" class="text-sm font-bold">{{ connected ? 'Conectado' : 'Desconectado' }}</p>
</div>
</div>
<button @click="toggleConnection" class="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors w-full">
<span>{{ connected ? 'Desconectar GitHub' : 'Conectar GitHub' }}</span>
</button>
</div>
</section>
<!-- Features -->
<section class="px-4 py-4">
<h3 class="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Recursos</h3>
<div class="space-y-3">
<!-- Feature 1 -->
<div @click="manageRepositories" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer">
<div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">hub</span>
</div>
<div class="flex-1">
<h4 class="text-slate-900 dark:text-slate-100 font-semibold">Gerenciar Repositórios</h4>
<p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Visualize e gerencie seus repositórios diretamente pelo MCP.</p>
</div>
</div>
<!-- Feature 2 -->
<div @click="improvedCodeReviews" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer">
<div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">code_reviews</span>
</div>
<div class="flex-1">
<h4 class="text-slate-900 dark:text-slate-100 font-semibold">Revisões de Código Aprimoradas</h4>
<p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Receba sugestões de código inteligentes e automáticas.</p>
</div>
</div>
<!-- Feature 3 -->
<div @click="securityAndCompliance" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer">
<div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">security</span>
</div>
<div class="flex-1">
<h4 class="text-slate-900 dark:text-slate-100 font-semibold">Segurança e Conformidade</h4>
<p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Garanta que seu código esteja seguro e em conformidade com as melhores práticas.</p>
</div>
</div>
</div>
</section>
<section class="p-4">
  <button @click="markPageAsCompleted" :class="[completed ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90']" class="flex items-center justify-center rounded-lg h-10 px-6 text-white text-sm font-semibold transition-colors w-full">
    <span>{{ completed ? 'Desmarcar como Concluído' : 'Marcar como Concluído' }}</span>
  </button>
</section>
</main>
<!-- Bottom Navigation -->
<nav class="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg px-4 pb-6 pt-3 z-50">
<div class="max-w-md mx-auto flex justify-around">
<a class="flex flex-col items-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">home</span>
<span class="text-[10px] font-bold leading-normal tracking-wide">Home</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">auto_stories</span>
<span class="text-[10px] font-medium leading-normal tracking-wide">Modules</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">search</span>
<span class="text-[10px] font-medium leading-normal tracking-wide">Search</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium leading-normal tracking-wide">Profile</span>
</a>
</div>
</nav>
</div>
</template>

<style scoped>
/* No component-specific styles needed, as Tailwind handles most styling */
</style>
