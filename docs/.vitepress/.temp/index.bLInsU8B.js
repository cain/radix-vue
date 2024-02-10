const index = `<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import './styles.css'

const progressValue = ref(10)

onMounted(() => {
  const timer = setTimeout(() => (progressValue.value = 66), 500)
  return () => clearTimeout(timer)
})
<\/script>

<template>
  <ProgressRoot
    v-model="progressValue"
    class="ProgressRoot"
    style="transform: translateZ(0)"
  >
    <ProgressIndicator
      class="ProgressIndicator"
      :style="\`transform: translateX(-\${100 - progressValue}%)\`"
    />
  </ProgressRoot>
</template>
`;
export {
  index as default
};
