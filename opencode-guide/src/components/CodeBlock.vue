<template>
  <div class="relative group my-6 rounded-lg overflow-hidden border border-slate-800 bg-[#1d1f21]">
    <!-- Header/Language badge -->
    <div class="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
      <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">{{ lang }}</span>
      <button
        @click="copyCode"
        class="
          text-xs font-medium text-emerald-400 hover:text-emerald-300
          bg-emerald-500/10 hover:bg-emerald-500/20
          px-2 py-1 rounded transition-colors
          opacity-0 group-hover:opacity-100 focus:opacity-100
        "
      >
        {{ copied ? 'Copiado!' : 'Copiar' }}
      </button>
    </div>

    <!-- Code Content -->
    <div class="overflow-x-auto p-4">
      <pre class="m-0 bg-transparent text-sm font-mono leading-relaxed"><code ref="codeRef" :class="`language-${lang}`"><slot></slot></code></pre>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const props = defineProps({
  lang: { type: String, default: 'markup' },
});

const codeRef = ref(null);
const copied = ref(false);

const copyCode = async () => {
  if (!codeRef.value) return;
  const codeToCopy = codeRef.value.textContent;
  
  try {
    await navigator.clipboard.writeText(codeToCopy);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<style scoped>
:deep(pre[class*="language-"]) {
  background: transparent !important;
  text-shadow: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

:deep(code[class*="language-"]) {
  background: transparent !important;
  text-shadow: none !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}
</style>
