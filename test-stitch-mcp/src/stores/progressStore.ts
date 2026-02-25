import { ref, watch, computed } from 'vue';

interface ProgressState {
  [key: string]: boolean;
}

const STORAGE_KEY = 'opencode-gemini-progress';

export const CURRICULUM_STEPS = [
  'step-0', 'step-1', 'step-2', 'step-3', 'step-4',
  'step-5', 'step-6', 'step-7', 'step-8', 'step-9'
];

const loadProgress = (): ProgressState => {
  const savedProgress = localStorage.getItem(STORAGE_KEY);
  const parsed = savedProgress ? JSON.parse(savedProgress) : {};
  
  const state: ProgressState = {};
  CURRICULUM_STEPS.forEach(step => {
    state[step] = parsed[step] || false;
  });
  return state;
};

const saveProgress = (progress: ProgressState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

const progressState = ref<ProgressState>(loadProgress());

watch(progressState, (newState) => {
  saveProgress(newState);
}, { deep: true });

export function useProgressStore() {
  const setPageCompleted = (pageName: string, completed: boolean) => {
    progressState.value = {
      ...progressState.value,
      [pageName]: completed,
    };
  };

  const isPageCompleted = (pageName: string) => {
    return computed(() => progressState.value[pageName] || false);
  };

  const completedModulesCount = computed(() => {
    let count = 0;
    CURRICULUM_STEPS.forEach(step => {
      if (progressState.value[step]) count++;
    });
    return count;
  });

  const overallProgress = computed(() => {
    const totalSteps = CURRICULUM_STEPS.length;
    if (totalSteps === 0) return 0;
    return Math.round((completedModulesCount.value / totalSteps) * 100);
  });

  return {
    setPageCompleted,
    isPageCompleted,
    overallProgress,
    completedModulesCount,
    totalModulesCount: CURRICULUM_STEPS.length,
    progressState
  };
}
