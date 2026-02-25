<template>
  <SlideLayout :title="'Configurando a API do Gemini'" :slideNumber="3" :totalSlides="9">
    <p>O OpenCode utiliza o modelo <strong>Gemini</strong> para suas operações inteligentes.</p>
    <h3>1. Obter sua chave de API do Gemini</h3>
    <p>Visite o Google AI Studio em <a href="https://aistudio.google.com/app/apikey" target="_blank">aistudio.google.com/app/apikey</a> e crie uma nova chave de API.</p>
    <p>Certifique-se de copiar sua chave, pois ela só será mostrada uma vez.</p>
    <h3>2. Configurar a chave no OpenCode</h3>
    <p>Você pode configurar a chave de API de duas maneiras:</p>
    <h4>Variável de ambiente (Recomendado)</h4>
    <CodeBlock lang="bash">
      $env:GEMINI_API_KEY="SUA_CHAVE_AQUI" # PowerShell
      set GEMINI_API_KEY=SUA_CHAVE_AQUI # CMD
    </CodeBlock>
    <h4>No arquivo <code>opencode.json</code></h4>
    <p>Adicione ao seu <code>opencode.json</code> (não recomendado para produção):</p>
    <CodeBlock lang="json">
      {
        "google": {
          "api_key": "SUA_CHAVE_AQUI"
        }
      }
    </CodeBlock>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
