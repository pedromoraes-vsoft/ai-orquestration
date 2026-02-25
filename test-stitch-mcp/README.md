# test-stitch-mcp

This project is a Vue 3 application built with Vite and TypeScript, designed to be compatible with OpenCode's intelligent operations. It utilizes `<script setup>` SFCs and Vue Router for navigation.

## Configuração Passo a Passo

Siga estes passos para configurar seu ambiente de desenvolvimento e o projeto.

### 1. Instalar Visual Studio Code

Baixe e instale o VS Code em seu sistema operacional.

[Download VS Code](https://code.visualstudio.com/)

### 2. Instalar Node.js e NPM

O Node.js inclui o NPM, que é essencial para gerenciar pacotes.

[Download Node.js](https://nodejs.org/)

### 3. Configurar credenciais da API Gemini

Obtenha sua chave de API e configure-a no ambiente para uso com OpenCode.

*   **Obter sua chave de API do Gemini**:
    Visite o Google AI Studio em [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) e crie uma nova chave de API. Certifique-se de copiar sua chave, pois ela só será mostrada uma vez.

*   **Configurar a chave no OpenCode (Variável de ambiente - Recomendado)**:
    Abra seu terminal e defina a variável de ambiente `GEMINI_API_KEY`:

    *   **PowerShell:**
        ```bash
        $env:GEMINI_API_KEY="SUA_CHAVE_AQUI"
        ```
    *   **CMD:**
        ```bash
        set GEMINI_API_KEY=SUA_CHAVE_AQUI
        ```
    *(Substitua `SUA_CHAVE_AQUI` pela sua chave de API real.)*

*   **No arquivo `opencode.json` (Não recomendado para produção):**
    Você também pode adicionar a chave diretamente ao seu `opencode.json` (veja o próximo passo).

### 4. Instalar OpenCode CLI

Abra seu terminal (CMD ou PowerShell) e execute o seguinte comando:

```bash
npm install -g @opencode/cli
```

Verifique a instalação:

```bash
opencode --version
```

### 5. Clonar repositório

Clone o repositório do projeto para sua máquina local.

```bash
git clone <URL_DO_REPOSITORIO>
cd test-stitch-mcp
```
*(Substitua `<URL_DO_REPOSITORIO>` pelo URL real do repositório.)*

### 6. Configurar `opencode.json`

Crie um arquivo `opencode.json` na raiz do seu projeto (`C:\Source\claude-teste\test-stitch-mcp`) com o seguinte conteúdo para configurar o comportamento do OpenCode:

```json
{
  "provider": "google",
  "model": "google/gemini-2.5-flash",
  "mode": "primary",
  "allowed_agents": [
    "backend",
    "frontend",
    "revisor"
  ],
  "connectors": [
    {
      "type": "filesystem",
      "name": "local_fs",
      "command": ["npx", "-y", "@opencode/mcp-filesystem"]
    },
    {
      "type": "fetch",
      "name": "web_fetch",
      "command": ["npx", "-y", "@opencode/mcp-fetch"]
    }
  ]
}
```

### 7. Instalar dependências

No diretório do projeto (`C:\Source\claude-teste\test-stitch-mcp`), execute `npm install` para instalar todas as dependências do projeto.

```bash
npm install
```

---

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

-   Chromium-based browsers (Chrome, Edge, Brave, etc.):
    -   [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
    -   [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
-   Firefox:
    -   [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
    -   [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Development Workflow

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Production Workflow

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```
