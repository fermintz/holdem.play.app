<template>
  <div class="flex flex-col justify-between h-full p-8">
    <div>
      Holdem Play
    </div>
    <div class="flex flex-col gap-2">
      <button class=" h-12 border rounded-md flex items-center p-5 active:bg-neutral-100" @click="$router.push('/')">
        <img src="~/assets/img/kakao.png" class=" h-6">
        <strong class="flex-1 text-sm">카카오톡 로그인</strong>
      </button>
      <button class=" h-12 border rounded-md flex items-center p-5 active:bg-neutral-100" @click="$router.push('/')">
        <img src="~/assets/img/apple.png" class=" h-6">
        <strong class="flex-1 text-sm">Apple 로그인</strong>
      </button>
      <button class=" h-12 border rounded-md flex items-center p-5 active:bg-neutral-100" @click="$router.push('/')">
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