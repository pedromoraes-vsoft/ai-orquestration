<script setup lang="ts">
import { useProgressStore } from '../stores/progressStore';

const { overallProgress, completedModulesCount, totalModulesCount } = useProgressStore();
</script>

<template>
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header -->
<header class="flex items-center justify-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-50 border-b border-slate-200 dark:border-primary/20">
<h1 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight text-center">OpenCode + Gemini</h1>
</header>
<main class="flex-1 pb-24">
<!-- Welcome Section -->
<section class="px-4 pt-6 pb-2">
      <h2 class="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight">Trilha de Aprendizado</h2>
      <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Domine o desenvolvimento assistido por IA.</p>
</section>
<!-- Progress Overview -->
<section class="p-4">
<div class="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 rounded-xl p-5 shadow-sm">
<div class="flex gap-6 justify-between items-center mb-3">
          <p class="text-slate-900 dark:text-slate-100 text-base font-semibold">Progresso Geral</p>
          <p class="text-primary text-sm font-bold">{{ overallProgress }}%</p>
</div>
<div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 mb-3 overflow-hidden">
<div class="bg-primary h-2.5 rounded-full" :style="{ width: overallProgress + '%' }"></div>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-primary">check_circle</span>
        <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">{{ completedModulesCount }} de {{ totalModulesCount }} módulos concluídos</p>
</div>
</div>
</section>
<!-- Featured "Get Started" Card -->
<section class="p-4 @container">
<div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="w-full bg-center bg-no-repeat aspect-video bg-cover @xl:w-1/3" data-alt="Neural network digital abstract background representation" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMOc_aKh7r05OePqcYIRUtYZahRxbaUo-KDTVlYnA_KxSnEma9GHXqNUx3M-ejmEChjV5rF6F591awJW7KcxPe9xt9zfZZ-96LmpaycftJPf0hMt84sNPlacMHChj2MNDhkF7082PZwybPNQ3EBm6jU9NkN_NdC092dsqSvpVFvvm5NrAEpodmEE8BgmUgjngHHx9ZMDYmmo6N9_O8JHvA-UGrZOq_-_-xKRX7fS4B-PluOkVdQ-JMWbFcQ_Ii7R-R7nlH9T4c0-_p");'></div>
<div class="flex w-full grow flex-col items-stretch justify-center gap-3 p-5">
<div class="flex flex-col gap-1">
          <span class="text-primary text-xs font-bold tracking-widest uppercase">Ativo Agora</span>
          <p class="text-slate-900 dark:text-white text-xl font-bold leading-tight">Configuração do OpenCode + Gemini</p>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-normal mt-1">Configure seu ambiente VS Code local com a API Gemini para programação em par assistida por IA.</p>
</div>
<div class="flex items-center justify-between mt-2">
<div class="flex -space-x-2">
<div class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 flex items-center justify-center text-[10px] font-bold">JD</div>
<div class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">+12</div>
</div>
        <router-link to="/curriculum/setup" class="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
<span>Iniciar Configuração</span>
</router-link>
</div>
</div>
</div>
</section>
<!-- Module List -->
<section class="px-4 py-4">
<div class="flex items-center justify-between mb-4">
      <h3 class="text-slate-900 dark:text-slate-100 text-lg font-bold">Módulos do Currículo</h3>
</div>
<div class="space-y-3">
<!-- Configuração do OpenCode -->
<router-link to="/curriculum/setup#step-0" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">info</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">1. Introdução ao OpenCode</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Visão geral do ambiente</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- Instalar Node.js -->
<router-link to="/curriculum/setup#step-1" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">terminal</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">2. Node.js</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Pré-requisito de sistema</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- OpenCode CLI -->
<router-link to="/curriculum/setup#step-2" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">code</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">3. OpenCode CLI</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Instalação do pacote global</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- API Gemini -->
<router-link to="/curriculum/setup#step-3" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">key</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">4. API do Gemini</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Geração e configuração de chaves</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- opencode.json -->
<router-link to="/curriculum/setup#step-4" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">data_object</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">5. opencode.json</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Configuração do projeto local</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- Skills -->
<router-link to="/curriculum/setup#step-5" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">extension</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">6. Skills</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Ampliando as capacidades do agente</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- Agentes -->
<router-link to="/curriculum/setup#step-6" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">smart_toy</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">7. Agentes</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Criando perfis especialistas</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- Conectores MCP -->
<router-link to="/curriculum/setup#step-7" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">hub</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">8. Conectores MCP</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Integração com Filesystem e Fetch</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- Comandos Diários -->
<router-link to="/curriculum/setup#step-8" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">list_alt</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">9. Comandos Essenciais</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">O básico para o dia a dia</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

<!-- Erros Comuns -->
<router-link to="/curriculum/setup#step-9" class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
<div class="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">bug_report</span>
</div>
<div class="flex-1">
            <h4 class="text-slate-900 dark:text-slate-100 font-semibold">10. Erros Comuns</h4>
            <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Soluções para problemas conhecidos</p>
</div>
<div class="text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</div>
</router-link>

</div>
</section>
</main>
</div>
</template>

<style scoped>
/* No component-specific styles needed, as Tailwind handles most styling */
</style>
