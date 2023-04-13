<template>
  <div class="flex flex-col h-full relative bg-neutral-900" @click="$router.push('login')">
    <div class="w-full h-1/2 bg-[url('~/assets/img/login_bg.png')] bg-contain bg-no-repeat bg-right">

    </div>
    <div class="mb-5 flex flex-col text-white items-center">
      <img src="~/assets/img/logo-w.png" class="h-20">
      <span class="text-xl mt-3 text-neutral-500">Holdem Play</span>
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
