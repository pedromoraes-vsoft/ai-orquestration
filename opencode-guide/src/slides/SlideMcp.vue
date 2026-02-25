<template>
  <SlideLayout :title="'Conectores MCP: Filesystem e Fetch'" :slideNumber="7" :totalSlides="9">
    <p>Os <strong>Conectores MCP (Managed Content Providers)</strong> permitem ao OpenCode interagir com diferentes fontes de dados.</p>
    <h3>Filesystem Connector</h3>
    <p>Permite ao OpenCode ler e escrever arquivos no sistema de arquivos local.</p>
    <CodeBlock lang="json">
      {
        "type": "filesystem",
        "name": "local_fs",
        "command": ["npx", "-y", "@opencode/mcp-filesystem"]
      }
    </CodeBlock>
    <h3>Fetch Connector</h3>
    <p>Permite ao OpenCode buscar conteúdo de URLs.</p>
    <CodeBlock lang="json">
      {
        "type": "fetch",
        "name": "web_fetch",
        "command": ["npx", "-y", "@opencode/mcp-fetch"]
      }
    </CodeBlock>
    <p>Note que o <code>command</code> é um array, contendo o executável e seus argumentos.</p>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
