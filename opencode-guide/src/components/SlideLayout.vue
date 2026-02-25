<template>
  <div
    class="
      flex
      flex-col
      min-h-screen
      bg-slate-950
      text-slate-200
      font-sans
      p-6
      md:p-8
      lg:p-12
    "
  >
    <header v-if="title" class="w-full max-w-4xl mx-auto mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-emerald-400">
        {{ title }}
      </h1>
    </header>

    <main class="flex-grow w-full max-w-4xl mx-auto flex flex-col justify-center">
      <slot></slot>
    </main>

    <footer class="w-full max-w-4xl mx-auto mt-8 text-right">
      <span class="text-sm font-medium text-slate-400">
        {{ slideNumber }} / {{ totalSlides }}
      </span>
    </footer>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  slideNumber: {
    type: Number,
    required: true,
  },
  totalSlides: {
    type: Number,
    required: true,
  },
});
</script>
