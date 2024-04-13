<script setup lang="ts">
import useService from '@renderer/hook/useService'
import { TYPES } from '@shared/service-interface/types'
import { reactive } from 'vue'

const versions = reactive({ ...window.electron.process.versions })

const appService = useService(TYPES.AppService)
console.log('appService', appService)

const clickHandle = async () => {
  console.log('clickHandle')
  const helloRes = await appService.sayHello()
  console.log('helloRes', helloRes)
}
</script>

<template>
  <ul class="versions">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
  </ul>
  <button @click="() => clickHandle()">test</button>
</template>
