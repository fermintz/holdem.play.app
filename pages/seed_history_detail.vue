<template>
  <div>
    <header class="h-16 flex items-center px-2">
      <div
        class="w-12 h-12 flex items-center justify-center active:bg-gray-200 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round">arrow_back</span>
        
      </div>
      <strong class="font-bold text-lg">상세내역</strong>
    </header>


    <div class="flex flex-col justify-center items-center p-5">
      <img src="https://picsum.photos/200/300" class=" object-cover w-28 h-28 overflow-hidden rounded-full">
      <strong class="text-xl font-bold mt-4">WPL</strong>
    </div>
    

    <div class="flex flex-col p-5 mt-8 gap-5">
      <dl class="flex items-center justify-between">
        <dt class=" text-neutral-500">보낸수량</dt>
        <dd class="font-bold">1장</dd>
      </dl>
      <div class="h-px bg-neutral-200"></div>

      <dl class="flex items-center justify-between">
        <dt class=" text-neutral-500">전송번호</dt>
        <dd class="font-bold">15616161</dd>
      </dl>
      <dl class="flex items-center justify-between">
        <dt class=" text-neutral-500">전송일시</dt>
        <dd class="font-bold">2023.03.28 14:56:14</dd>
      </dl>
      <dl class="flex items-center justify-between">
        <dt class=" text-neutral-500">티켓코드</dt>
        <dd class="font-bold">15616161</dd>
      </dl>
      <dl class="flex items-center justify-between">
        <dt class=" text-neutral-500">사용한캐시</dt>
        <dd class="font-bold">클로버 2개</dd>
      </dl>
      <dl class="flex items-center justify-between">
        <dt class=" text-neutral-500">보낸유저 코드</dt>
        <dd class="font-bold">F01438658</dd>
      </dl>     
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
