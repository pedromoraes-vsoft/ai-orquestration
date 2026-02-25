<template>
  <SlideLayout :title="'Introdução ao OpenCode'" :slideNumber="1" :totalSlides="9">
    <p>Bem-vindo ao guia de configuração e uso do <strong>OpenCode</strong> com <strong>Gemini</strong> no Windows 11.</p>
    <p>Nesta apresentação, vamos cobrir os seguintes tópicos:</p>
    <ul>
      <li>O que é o OpenCode e por que usá-lo</li>
      <li>Instalação e configuração inicial</li>
      <li>Obtenção e configuração da chave de API do Gemini</li>
      <li>Entendendo o <code>opencode.json</code></li>
      <li>Utilizando Skills e Agentes</li>
      <li>Comandos essenciais e solução de erros comuns</li>
    </ul>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
</script>
