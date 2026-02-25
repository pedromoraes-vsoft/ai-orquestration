<template>
  <SlideLayout :title="'Erros Comuns e Soluções'" :slideNumber="9" :totalSlides="9">
    <p>Ao usar o OpenCode, você pode se deparar com alguns erros. Veja como resolvê-los:</p>
    <h3><code>Unrecognized key: provider.google.enabled</code></h3>
    <p><strong>Causa:</strong> Esta chave é inválida no schema atual do <code>opencode.json</code>.</p>
    <p><strong>Solução:</strong> Remova a chave <code>provider.google.enabled</code> do seu <code>opencode.json</code>. A configuração do provedor deve ser feita diretamente com a chave <code>provider</code> (ex: <code>"provider": "google"</code>).</p>
    <h3><code>Invalid option: expected one of subagent|primary|all mode</code></h3>
    <p><strong>Causa:</strong> O valor fornecido para a chave <code>mode</code> em <code>opencode.json</code> é inválido.</p>
    <p><strong>Solução:</strong> Certifique-se de que o valor da chave <code>mode</code> seja um dos seguintes: <code>primary</code>, <code>subagent</code> ou <code>all</code>.</p>
    <h3>Problemas com a chave de API do Gemini</h3>
    <p><strong>Causa:</strong> Chave de API inválida, expirada ou não configurada corretamente.</p>
    <p><strong>Solução:</strong> Verifique se a variável de ambiente <code>GEMINI_API_KEY</code> está definida corretamente ou se a chave em <code>opencode.json</code> está válida.</p>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
