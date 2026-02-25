<template>
  <div id="app">
    <div class="slide-container">
      <transition name="slide" mode="out-in">
        <component :is="slidesComponents[currentSlide - 1]" :key="currentSlide" />
      </transition>
    </div>
    <NavArrows
      :current-slide="currentSlide"
      :total-slides="totalSlides"
      @prev="prevSlide"
      @click-prev="prevSlide"
      @next="nextSlide"
      @click-next="nextSlide"
    />
  </div>
</template>

<script setup>
import { ref, watch, provide, markRaw, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useSlides } from './composables/useSlides';
import NavArrows from './components/NavArrows.vue';

import SlideIntro from './slides/SlideIntro.vue';
import SlideInstalacao from './slides/SlideInstalacao.vue';
import SlideGeminiApi from './slides/SlideGeminiApi.vue';
import SlideConfig from './slides/SlideConfig.vue';
import SlideSkills from './slides/SlideSkills.vue';
import SlideAgentes from './slides/SlideAgentes.vue';
import SlideMcp from './slides/SlideMcp.vue';
import SlideUsoDiario from './slides/SlideUsoDiario.vue';
import SlideErros from './slides/SlideErros.vue';

const slidesComponents = markRaw([
  SlideIntro,
  SlideInstalacao,
  SlideGeminiApi,
  SlideConfig,
  SlideSkills,
  SlideAgentes,
  SlideMcp,
  SlideUsoDiario,
  SlideErros,
]);

const totalSlides = slidesComponents.length;
const router = useRouter();
const route = useRoute();

const { currentSlide, nextSlide, prevSlide, progressText } = useSlides(totalSlides);

// Update URL when slide changes
watch(currentSlide, (newVal) => {
  router.replace({ query: { slide: newVal } });
});

// Update slide when URL changes (e.g., direct link or browser back/forward)
onMounted(() => {
  const slideParam = parseInt(route.query.slide);
  if (!isNaN(slideParam) && slideParam >= 1 && slideParam <= totalSlides) {
    currentSlide.value = slideParam;
  } else {
    currentSlide.value = 1;
    router.replace({ query: { slide: 1 } });
  }
});

provide('slideInfo', { currentSlide, totalSlides, progressText });

</script>


