<template>
  <div class="h-full overflow-hidden">

    <div class="fixed top-0 left-0 h-full w-full"> <!-- 카메라 자리 --></div>

    <header class="h-16 flex items-center px-2 bg-neutral-900 bg-opacity-70 relative z-30">
      <div
        class="w-12 h-12 flex items-center justify-center active:bg-black active:bg-opacity-10 rounded-full"
        @click="$router.go(-1)"
      > 
        <span class="material-icons-round text-white">arrow_back</span>
      </div>
      <div class="font-bold text-lg"></div>
    </header>

    <div class="px-5 bg-neutral-900 bg-opacity-70">
      <h2 class="text-2xl font-bold text-white">시드권 보내기(QR)</h2>
      <p class="text-neutral-200">받는 분의 월렛 QR코드를 스캔해주세요</p>
    </div>

    <div class="flex flex-col h-full">
      <div class="flex justify-center bg-neutral-900 bg-opacity-70 pt-14 pb-5">
        <p class="bg-white bg-opacity-10 text-white rounded-full px-3 py-1 text-xs">QR코드를 영역내에 스캔해주세요</p>
      </div>
      <div class="flex">
        <div class="flex-1 bg-neutral-900 bg-opacity-70">
          
        </div>
        <div class="w-56 h-56 bg-transparent">

        </div>
        <div class="flex-1 bg-neutral-900 bg-opacity-70">
          
        </div>
      </div>

      <div class="bg-neutral-900 bg-opacity-70 flex-1">

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