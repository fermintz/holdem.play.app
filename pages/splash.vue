<template>
  <div class="flex flex-col h-full relative bg-neutral-900" @click="$router.push('login')">
    <div class="w-full h-1/2 bg-[url('~/assets/img/login_bg.png')] bg-contain bg-no-repeat bg-right">

    </div>
    <div class="mb-5 flex flex-col text-white items-center">
      <strong class="text-4xl font-extrabold">Holdem <b class="text-rose-600">Play</b></strong>
      <span class="text-sm text-neutral-400">WSL</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'empty'
})

</script>

<style lang="scss" scoped>

</style>
