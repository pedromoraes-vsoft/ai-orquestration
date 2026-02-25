<script setup lang="ts">
import { computed } from 'vue';
import { useProgressStore, CURRICULUM_STEPS } from '../stores/progressStore';
import ConfigStep from '../components/config-steps/ConfigStep.vue';

const { setPageCompleted, isPageCompleted, progressState } = useProgressStore();

const allIndividualStepsCompleted = computed(() => {
  return CURRICULUM_STEPS.every(step => progressState.value[step] === true);
});

// --- Button Enablement Logic ---
const isStep0ActionEnabled = computed(() => true); // Intro step is always enabled
const isStep1ActionEnabled = computed(() => !!progressState.value['step-0']);
const isStep2ActionEnabled = computed(() => !!progressState.value['step-1']);
const isStep3ActionEnabled = computed(() => !!progressState.value['step-2']);
const isStep4ActionEnabled = computed(() => !!progressState.value['step-3']);
const isStep5ActionEnabled = computed(() => !!progressState.value['step-4']);
const isStep6ActionEnabled = computed(() => !!progressState.value['step-5']);
const isStep7ActionEnabled = computed(() => !!progressState.value['step-6']);
const isStep8ActionEnabled = computed(() => !!progressState.value['step-7']);
const isStep9ActionEnabled = computed(() => !!progressState.value['step-8']);

// --- Action Handlers ---
const introduceOpenCode = () => {
  setPageCompleted('step-0', true);
};

const installNodeJs = () => {
  window.open('https://nodejs.org/en/download', '_blank');
  setPageCompleted('step-1', true);
};

const installOpenCodeCli = () => {
  setPageCompleted('step-2', true);
};

const configureGeminiApiKey = () => {
  window.open('https://aistudio.google.com/app/apikey', '_blank');
  setPageCompleted('step-3', true);
};

const understandOpencodeJson = () => {
  setPageCompleted('step-4', true);
};

const handleSkillsSection = () => {
  setPageCompleted('step-5', true);
};

const handleAgentsSection = () => {
  setPageCompleted('step-6', true);
};

const handleConnectorsSection = () => {
  setPageCompleted('step-7', true);
};

const handleDailyCommandsSection = () => {
  setPageCompleted('step-8', true);
};

const handleCommonErrorsSection = () => {
  setPageCompleted('step-9', true);
};

const markPageAsCompleted = () => {
  const isAllComplete = allIndividualStepsCompleted.value;
  // If it's already completely done, uncheck all. Otherwise check all.
  CURRICULUM_STEPS.forEach(step => {
    setPageCompleted(step, !isAllComplete);
  });
};
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <!-- Header -->
    <header
      class="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-50 border-b border-slate-200 dark:border-primary/20">
      <div class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start cursor-pointer">
        <router-link to="/">
          <span class="material-symbols-outlined text-2xl">arrow_back</span>
        </router-link>
      </div>
      <h1 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center pr-10">Módulos do Currículo</h1>
    </header>
    <main class="flex-1 pb-24">
      <section class="p-4 flex flex-col items-center justify-start" v-if="!allIndividualStepsCompleted">
        <p class="text-slate-500 dark:text-slate-400 text-sm leading-normal max-w-sm text-center">Siga estes passos para configurar seu ambiente de desenvolvimento.</p>
      </section>
      <!-- Steps -->
      <section class="p-4" v-if="!allIndividualStepsCompleted">
        <div class="space-y-4">

          <!-- Step 0: Introdução ao OpenCode -->
          <ConfigStep
            id="step-0"
            :stepNumber="0"
            title="1. Introdução ao OpenCode"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-0']"
            :isEnabled="isStep0ActionEnabled"
            @action="introduceOpenCode"
          >
            Bem-vindo ao guia de configuração e uso do OpenCode com Gemini no Windows 11. Nesta apresentação, vamos cobrir o que é o OpenCode e por que usá-lo, Instalação e configuração inicial, Obtenção e configuração da chave de API do Gemini, Entendendo o opencode.json, Utilizando Skills e Agentes, Conectores MCP, Comandos essenciais e solução de erros comuns.
          </ConfigStep>

          <!-- Step 1: Instalação no Windows 11 - Instalar Node.js -->
          <ConfigStep
            id="step-1"
            :stepNumber="1"
            title="2. Instalação no Windows 11 - Instalar Node.js"
            buttonText="Download Node.js"
            :isCompleted="!!progressState['step-1']"
            :isEnabled="isStep1ActionEnabled"
            @action="installNodeJs"
          >
            Para começar a usar o OpenCode no Windows 11, você precisará ter o Node.js instalado.
            <br>Baixe e instale a versão LTS do Node.js em <a href="https://nodejs.org/" target="_blank" class="text-primary hover:underline">nodejs.org</a>.
          </ConfigStep>

          <!-- Step 2: Instalação no Windows 11 - Instalar OpenCode CLI -->
          <ConfigStep
            id="step-2"
            :stepNumber="2"
            title="3. Instalação no Windows 11 - Instalar OpenCode CLI"
            buttonText="Instalar OpenCode CLI"
            :isCompleted="!!progressState['step-2']"
            :isEnabled="isStep2ActionEnabled"
            @action="installOpenCodeCli"
          >
            Abra seu terminal (CMD ou PowerShell) e execute o seguinte comando:
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>npm install -g @opencode/cli</code></pre>
            Verifique a instalação:
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>opencode --version</code></pre>
          </ConfigStep>

          <!-- Step 3: Configurando a API do Gemini -->
          <ConfigStep
            id="step-3"
            :stepNumber="3"
            title="4. Configurando a API do Gemini"
            buttonText="Gerar API Key"
            :isCompleted="!!progressState['step-3']"
            :isEnabled="isStep3ActionEnabled"
            @action="configureGeminiApiKey"
          >
            O OpenCode utiliza o modelo Gemini para suas operações inteligentes.
            <br>1. Obter sua chave de API do Gemini: Visite o Google AI Studio em <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-primary hover:underline">aistudio.google.com/app/apikey</a> e crie uma nova chave de API.
            <br>2. Configurar a chave no OpenCode: Você pode configurar a chave de API de duas maneiras:
            <br>Variável de ambiente (Recomendado):
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>$env:GEMINI_API_KEY="SUA_CHAVE_AQUI" # PowerShell</code></pre>
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>set GEMINI_API_KEY=SUA_CHAVE_AQUI # CMD</code></pre>
            No arquivo opencode.json (Não recomendado para produção):
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>{
  "google": { "api_key": "SUA_CHAVE_AQUI" }
}</code></pre>
          </ConfigStep>

          <!-- Step 4: Entendendo opencode.json -->
          <ConfigStep
            id="step-4"
            :stepNumber="4"
            title="5. Entendendo opencode.json"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-4']"
            :isEnabled="isStep4ActionEnabled"
            @action="understandOpencodeJson"
          >
            O arquivo `opencode.json` é onde você configura o comportamento do OpenCode. Ele deve estar na raiz do seu projeto.
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>{
  "provider": "google",
  "model": "google/gemini-2.5-flash",
  "mode": "primary",
  "allowed_agents": [ "backend", "frontend", "revisor" ]
}</code></pre>
            <ul>
              <li><b>provider</b>: Define qual provedor de LLM será usado (ex: google).</li>
              <li><b>model</b>: Especifica o modelo do LLM (ex: google/gemini-2.5-flash).</li>
              <li><b>mode</b>: Controla quais agentes o OpenCode pode usar (primary, subagent, all).</li>
              <li><b>allowed_agents</b>: Lista de agentes personalizados permitidos.</li>
            </ul>
          </ConfigStep>

          <!-- Step 5: Skills: Ampliando Capacidades -->
          <ConfigStep
            id="step-5"
            :stepNumber="5"
            title="6. Skills: Ampliando Capacidades"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-5']"
            :isEnabled="isStep5ActionEnabled"
            @action="handleSkillsSection"
          >
            Skills são extensões que adicionam funcionalidades específicas ao OpenCode, permitindo que ele execute tarefas complexas de forma mais eficiente. Elas são armazenadas em `~/.config/opencode/skills/nome-da-skill/SKILL.md`.
            <br>Exemplo: Skill Clean Code
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code># Skill: Clean Code Auditor
## Descrição
Esta skill audita o código fornecido para aderência a princípios de clean code.</code></pre>
          </ConfigStep>

          <!-- Step 6: Agentes Especializados -->
          <ConfigStep
            id="step-6"
            :stepNumber="6"
            title="7. Agentes Especializados"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-6']"
            :isEnabled="isStep6ActionEnabled"
            @action="handleAgentsSection"
          >
            Agentes são configurações predefinidas que direcionam o OpenCode para atuar em papéis específicos (ex: backend, frontend, revisor). Eles são definidos como arquivos `.md` em `~/.config/opencode/agents/`.
            <br>Exemplo: Agente Backend
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code># Agente Backend Developer
## Objetivo
Atuar como um desenvolvedor backend experiente, focado em Node.js e Python, construindo APIs REST, manipulando bancos de dados e implementando lógica de negócio robusta.</code></pre>
            Outros exemplos seriam frontend para UI/UX e revisor para análise de código.
          </ConfigStep>

          <!-- Step 7: Conectores MCP: Filesystem e Fetch -->
          <ConfigStep
            id="step-7"
            :stepNumber="7"
            title="8. Conectores MCP: Filesystem e Fetch"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-7']"
            :isEnabled="isStep7ActionEnabled"
            @action="handleConnectorsSection"
          >
            Os Conectores MCP (Managed Content Providers) permitem ao OpenCode interagir com diferentes fontes de dados.
            <br><b>Filesystem Connector</b>: Permite ao OpenCode ler e escrever arquivos no sistema de arquivos local.
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>{
  "type": "filesystem",
  "name": "local_fs",
  "command": ["npx", "-y", "@opencode/mcp-filesystem"]
}</code></pre>
            <b>Fetch Connector</b>: Permite ao OpenCode buscar conteúdo de URLs.
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>{
  "type": "fetch",
  "name": "web_fetch",
  "command": ["npx", "-y", "@opencode/mcp-fetch"]
}</code></pre>
            Note que o `command` é array, contendo o executável e seus argumentos.
          </ConfigStep>

          <!-- Step 8: Uso Diário: Comandos Essenciais -->
          <ConfigStep
            id="step-8"
            :stepNumber="8"
            title="9. Uso Diário: Comandos Essenciais"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-8']"
            :isEnabled="isStep8ActionEnabled"
            @action="handleDailyCommandsSection"
          >
            Aqui estão alguns comandos essenciais para o seu dia a dia com o OpenCode:
            <ul>
              <li><b>opencode chat</b>: Inicia uma sessão de chat interativa.</li>
              <li><b>opencode run `agent_name`</b>: Executa um agente específico.</li>
              <li><b>opencode skill `skill_name`</b>: Invoca uma skill para uma tarefa.</li>
              <li><b>opencode config show</b>: Mostra a configuração atual do OpenCode.</li>
              <li><b>opencode config set key value</b>: Define um valor de configuração.</li>
              <li><b>opencode help</b>: Exibe informações de ajuda.</li>
            </ul>
            Exemplo de chat:
            <pre class="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-xs mt-2"><code>opencode chat "Refatore a função \`calculateTax\` em \`src/utils.js\` para ser mais legível."</code></pre>
          </ConfigStep>

          <!-- Step 9: Erros Comuns e Soluções -->
          <ConfigStep
            id="step-9"
            :stepNumber="9"
            title="10. Erros Comuns e Soluções"
            buttonText="Entendido"
            :isCompleted="!!progressState['step-9']"
            :isEnabled="isStep9ActionEnabled"
            @action="handleCommonErrorsSection"
          >
            Ao usar o OpenCode, você pode se deparar com alguns erros. Veja como resolvê-los:
            <ul>
              <li><b>Unrecognized key: provider.google.enabled</b>: Esta chave é inválida no schema atual do opencode.json. Remova-a.</li>
              <li><b>Invalid option: expected one of subagent|primary|all mode</b>: O valor fornecido para a chave `mode` em opencode.json é inválido. Certifique-se de que seja `primary`, `subagent` ou `all`.</li>
              <li><b>Problemas com a chave de API do Gemini</b>: Chave de API inválida, expirada ou não configurada corretamente. Verifique a variável de ambiente `GEMINI_API_KEY` ou a chave em `opencode.json`.</li>
            </ul>
          </ConfigStep>

        </div>
      </section>

      <section class="p-8 flex flex-col items-center justify-center text-center mt-10" v-else>
        <div class="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
          <span class="material-symbols-outlined text-5xl">workspace_premium</span>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Parabéns!</h2>
        <p class="text-slate-500 dark:text-slate-400 text-base mb-10 max-w-sm">
          Você concluiu todos os módulos de configuração. Seu ambiente está 100% pronto para extrair o máximo do OpenCode com Gemini.
        </p>
        <router-link to="/" class="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-semibold hover:bg-primary/90 transition-colors shadow-md">
          Voltar para o Início
        </router-link>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* No component-specific styles needed, as Tailwind handles most styling */
</style>
