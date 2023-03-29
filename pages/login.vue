<template>
  <div class="flex flex-col justify-between h-full relative bg-white">
    <div class="w-full h-1/2 bg-[url('~/assets/img/login_bg.png')] bg-contain bg-no-repeat bg-right">

    </div>
    <div class="flex flex-col gap-2 fixed bottom w-full left-0 p-8 bottom-0">
      <div class="mb-5 flex flex-col">
        <strong class="text-3xl font-extrabold">Holdem <b class="text-rose-600">Play</b></strong>
        <span class="text-sm text-neutral-500">WSL</span>
      </div>
      <button class="bg-white h-12 border border-neutral-300 rounded-md flex items-center p-5 active:bg-neutral-100" @click="$router.push('/')">
        <img src="~/assets/img/kakao.png" class=" h-6">
        <strong class="flex-1 text-sm">카카오톡 로그인</strong>
      </button>
      <button class="bg-white  h-12 border border-neutral-300 rounded-md flex items-center p-5 active:bg-neutral-100" @click="$router.push('/')">
        <img src="~/assets/img/apple.png" class=" h-6">
        <strong class="flex-1 text-sm">Apple 로그인</strong>
      </button>
      <button class="bg-white  h-12 border border-neutral-300 rounded-md flex items-center p-5 active:bg-neutral-100" @click="$router.push('/')">
        <img src="~/assets/img/google.png" class=" h-6">
        <strong class="flex-1 text-sm">Google 로그인</strong>
      </button>
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