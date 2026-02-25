<template>
  <SlideLayout :title="'Skills: Ampliando Capacidades'" :slideNumber="5" :totalSlides="9">
    <p><strong>Skills</strong> são extensões que adicionam funcionalidades específicas ao OpenCode, permitindo que ele execute tarefas complexas de forma mais eficiente.</p>
    <p>Elas são armazenadas em <code>~/.config/opencode/skills/nome-da-skill/SKILL.md</code>.</p>
    <h3>Exemplo: Skill Clean Code</h3>
    <p>Imagine uma skill para revisar código e aplicar princípios de <em>clean code</em>. O arquivo <code>SKILL.md</code> poderia conter instruções detalhadas sobre o que verificar e como sugerir melhorias.</p>
    <CodeBlock lang="markdown">
      # Skill: Clean Code Auditor

      ## Descrição
      Esta skill audita o código fornecido para aderência a princípios de clean code, focando em legibilidade, manutenibilidade e padrões de projeto.

      ## Instruções
      1. Analise o código em busca de variáveis mal nomeadas, funções muito longas, duplicação de código e comentários desnecessários.
      2. Sugira refatorações para melhorar a clareza e a modularidade.
      3. Identifique oportunidades para aplicar padrões de projeto conhecidos (ex: Strategy, Factory).
      4. Forneça exemplos de código refatorado quando aplicável.
    </CodeBlock>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>
