<script setup>
import { ref } from 'vue'
import SlideLayout from './SlideLayout.vue'
import Callout from './Callout.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <SlideLayout title="Boas-Vindas ao Projeto!" :slideNumber="1" :totalSlides="1">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edite
        <code>components/HelloWorld.vue</code> para testar HMR.
      </p>
    </div>

    <Callout>
      <p>
        Este é um <strong>Callout</strong>! Use-o para destacar informações importantes ou para quebrar blocos de texto longos, melhorando a escaneabilidade.
      </p>
      <ul>
        <li>Item de lista com <strong>destaque</strong></li>
        <li>Outro item importante</li>
      </ul>
    </Callout>

    <p>
      Confira
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, o starter oficial Vue + Vite.
    </p>
    <p>
      Saiba mais sobre o suporte a IDE para Vue no
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        >Guia de Escalabilidade do Vue Docs</a
      >.
    </p>
    <p>Clique nos logos Vite e Vue para saber mais.</p>
  </SlideLayout>
</template>
