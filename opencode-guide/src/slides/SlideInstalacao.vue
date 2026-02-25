<template>
  <SlideLayout :title="'Instalação no Windows 11'" :slideNumber="2" :totalSlides="9">
    <p>Para começar a usar o OpenCode no Windows 11, você precisará ter o <strong>Node.js</strong> instalado.</p>
    <h3>1. Instalar Node.js</h3>
    <p>Baixe e instale a versão LTS do Node.js em <a href="https://nodejs.org/" target="_blank">nodejs.org</a>.</p>
    <h3>2. Instalar OpenCode CLI</h3>
    <p>Abra seu terminal (CMD ou PowerShell) e execute o seguinte comando:</p>
    <CodeBlock lang="bash">
      npm install -g @opencode/cli
    </CodeBlock>
    <p>Verifique a instalação:</p>
    <CodeBlock lang="bash">
      opencode --version
    </CodeBlock>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
