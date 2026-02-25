<template>
  <SlideLayout :title="'Agentes Especializados'" :slideNumber="6" :totalSlides="9">
    <p><strong>Agentes</strong> são configurações predefinidas que direcionam o OpenCode para atuar em papéis específicos (ex: backend, frontend, revisor).</p>
    <p>Eles são definidos como arquivos <code>.md</code> em <code>~/.config/opencode/agents/</code>.</p>
    <h3>Exemplo: Agente Backend</h3>
    <p>Um agente backend teria instruções como:</p>
    <CodeBlock lang="markdown">
      # Agente Backend Developer

      ## Objetivo
      Atuar como um desenvolvedor backend experiente, focado em Node.js e Python, construindo APIs REST, manipulando bancos de dados e implementando lógica de negócio robusta.

      ## Responsabilidades
      - Projetar e implementar endpoints de API RESTful.
      - Gerenciar interações com bancos de dados (SQL e NoSQL).
      - Escrever testes unitários e de integração para o código backend.
      - Garantir a segurança e escalabilidade das soluções.
      - Documentar APIs e decisões de arquitetura.
    </CodeBlock>
    <p>Outros exemplos seriam <code>frontend</code> para UI/UX e <code>revisor</code> para análise de código.</p>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
