import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useSlides(totalSlides) {
  const router = useRouter();
  const route = useRoute();
  const currentSlide = ref(1);

  const updateSlideFromUrl = () => {
    const slideParam = parseInt(route.query.slide);
    if (!isNaN(slideParam) && slideParam >= 1 && slideParam <= totalSlides) {
      currentSlide.value = slideParam;
    } else {
      currentSlide.value = 1;
      router.replace({ query: { slide: 1 } });
    }
  };

  onMounted(() => {
    updateSlideFromUrl();
    window.addEventListener('popstate', updateSlideFromUrl);
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', updateSlideFromUrl);
  });

  const nextSlide = () => {
    if (currentSlide.value < totalSlides) {
      currentSlide.value++;
      router.push({ query: { slide: currentSlide.value } });
    }
  };

  const prevSlide = () => {
    if (currentSlide.value > 1) {
      currentSlide.value--;
      router.push({ query: { slide: currentSlide.value } });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeyPress);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyPress);
  });

  const progressText = computed(() => {
    return `${currentSlide.value} / ${totalSlides}`;
  });

  return {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    progressText,
  };
}
