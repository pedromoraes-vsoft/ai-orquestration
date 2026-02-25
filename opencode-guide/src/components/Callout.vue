<template>
  <div class="callout">
    <slot></slot>
  </div>
</template>

<script setup>
// Não precisa de props ou lógica específica para este exemplo
</script>

<style scoped>
.callout {
  @apply bg-slate-800 text-slate-200 border border-emerald-500 p-6 mb-6 rounded-lg;
}
</style>
