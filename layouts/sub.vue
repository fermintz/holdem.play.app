<template>
  <div class="h-full">
    <header class="h-16 flex justify-between items-center px-2">
      <div 
        class="w-12 h-12 flex items-center justify-center active:bg-gray-200 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round">arrow_back</span>
      </div>
    </header>

    <div class="pb-20">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
