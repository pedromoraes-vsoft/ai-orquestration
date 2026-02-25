<template>
  <SlideLayout :title="'Uso Diário: Comandos Essenciais'" :slideNumber="8" :totalSlides="9">
    <p>Aqui estão alguns comandos essenciais para o seu dia a dia com o OpenCode:</p>
    <ul>
      <li><strong><code>opencode chat</code></strong>: Inicia uma sessão de chat interativa.</li>
      <li><strong><code>opencode run `agent_name`</code></strong>: Executa um agente específico.</li>
      <li><strong><code>opencode skill `skill_name`</code></strong>: Invoca uma skill para uma tarefa.</li>
      <li><strong><code>opencode config show</code></strong>: Mostra a configuração atual do OpenCode.</li>
      <li><strong><code>opencode config set &lt;key&gt; &lt;value&gt;</code></strong>: Define um valor de configuração.</li>
      <li><strong><code>opencode help</code></strong>: Exibe informações de ajuda.</li>
    </ul>
    <h3>Exemplo de chat:</h3>
    <CodeBlock lang="bash">
      opencode chat "Refatore a função `calculateTax` em `src/utils.js` para ser mais legível."
    </CodeBlock>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
