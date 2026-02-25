<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view />

  <!-- Bottom Navigation - Assuming this is shared across views -->
  <nav class="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg px-4 pb-6 pt-3 z-50">
    <div class="max-w-md mx-auto flex justify-around">
      <router-link to="/" class="flex flex-col items-center gap-1 text-primary">
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">home</span>
        <span class="text-[10px] font-bold leading-normal tracking-wide">Início</span>
      </router-link>
      <router-link to="/curriculum/setup" class="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
        <span class="material-symbols-outlined">auto_stories</span>
        <span class="text-[10px] font-medium leading-normal tracking-wide">Módulos</span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
</style>
