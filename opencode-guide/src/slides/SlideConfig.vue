<template>
  <SlideLayout :title="'Entendendo opencode.json'" :slideNumber="4" :totalSlides="9">
    <p>O arquivo <code>opencode.json</code> é onde você configura o comportamento do OpenCode.</p>
    <p>Ele deve estar na raiz do seu projeto.</p>
    <p>Exemplo de <code>opencode.json</code>:</p>
    <CodeBlock lang="json">
      {
        "provider": "google",
        "model": "google/gemini-2.5-flash",
        "mode": "primary",
        "allowed_agents": [
          "backend",
          "frontend",
          "revisor"
        ]
      }
    </CodeBlock>
    <ul>
      <li><strong><code>provider</code></strong>: Define qual provedor de LLM será usado (ex: <code>google</code>).</li>
      <li><strong><code>model</code></strong>: Especifica o modelo do LLM (ex: <code>google/gemini-2.5-flash</code>).</li>
      <li><strong><code>mode</code></strong>: Controla quais agentes o OpenCode pode usar (<code>primary</code>, <code>subagent</code>, <code>all</code>).</li>
      <li><strong><code>allowed_agents</code></strong>: Lista de agentes personalizados permitidos.</li>
    </ul>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
