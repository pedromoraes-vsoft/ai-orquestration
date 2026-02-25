<template>
  <div class="fixed top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-50">
    <button
      @click="$emit('prev')"
      :disabled="currentSlide === 1"
      class="
        p-2 rounded-full
        text-emerald-400
        hover:text-emerald-300 hover:bg-emerald-400/10
        disabled:text-slate-700 disabled:bg-transparent disabled:cursor-not-allowed
        transition-all duration-200
        pointer-events-auto
        focus:outline-none focus:ring-2 focus:ring-emerald-500/50
      "
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 md:w-10 md:h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>

    <button
      @click="$emit('next')"
      :disabled="currentSlide === totalSlides"
      class="
        p-2 rounded-full
        text-emerald-400
        hover:text-emerald-300 hover:bg-emerald-400/10
        disabled:text-slate-700 disabled:bg-transparent disabled:cursor-not-allowed
        transition-all duration-200
        pointer-events-auto
        focus:outline-none focus:ring-2 focus:ring-emerald-500/50
      "
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 md:w-10 md:h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentSlide: {
    type: Number,
    required: true
  },
  totalSlides: {
    type: Number,
    required: true
  },
});

defineEmits(['prev', 'next']);
</script>
