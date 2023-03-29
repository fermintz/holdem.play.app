<template>
  <div class=" bg-neutral-900 h-full">
    <div class=" bg-black bg-opacity-60 w-full h-full fixed z-10"></div>

    <div class=" relative z-20"> 
      <header class="h-16 flex items-center px-2">
        <div
          class="w-12 h-12 flex items-center justify-center active:bg-black active:bg-opacity-10 rounded-full"
          @click="$router.go(-1)"
        > 
          <span class="material-icons-round text-white">arrow_back</span>
        </div>
        <div class="font-bold text-lg"></div>
      </header>

      <div class="px-5">
        <h2 class="text-2xl font-bold text-white">시드권 보내기(QR)</h2>
        <p class="mt-2 text-neutral-200">받는 분의 월렛 QR코드를 스캔해주세요</p>
      </div>

      <div class="flex flex-col items-center mt-20">
        <p class="bg-white bg-opacity-10 text-white rounded-full px-3 py-1 text-xs mb-5 ">QR코드를 영역내에 스캔해주세요</p>
        <div class="flex items-center justify-center">
          <div class="w-64 h-64 rounded-2xl bg-white bg-opacity-20" @click="$router.push('seed_send')">

          </div>
        </div>
      </div>
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