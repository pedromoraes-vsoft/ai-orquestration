<template>
  <div class="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
    <div
      :class="[
        isCompleted ? 'bg-green-500 text-white' : (stepNumber === 0 ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400')
      ]"
      class="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
      <span class="font-bold">{{ stepNumber }}</span>
    </div>
    <div class="flex-1">
      <h3 class="text-slate-900 dark:text-slate-100 text-base font-semibold">{{ title }}</h3>
      <div class="text-slate-500 dark:text-slate-400 text-sm mt-1">
        <slot></slot>
      </div>
      <button @click="$emit('action')" :disabled="!isEnabled"
        :class="[!isEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90']"
        class="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-xs font-semibold transition-colors mt-3">
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stepNumber: number;
  title: string;
  isCompleted: boolean;
  isEnabled: boolean;
  buttonText: string;
}>();

defineEmits<{
  (e: 'action'): void;
}>();
</script>