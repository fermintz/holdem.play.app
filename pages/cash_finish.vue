<template>
  <div class="px-5">
    <div class="flex flex-col items-center py-12">
      <div class="w-40 h-40 bg-neutral-100 rounded-full flex justify-center items-center my-10 relative">
        <span class="material-icons absolute bottom-6 right-6 bg-white rounded-full p-2 text-rose-600">check</span>
        <img src="~/assets/img/clova.png" class="h-32"/>
      </div>
      <h2 class="text-xl font-bold">클로버 10개</h2>
      <p class="mt-2">충전이 완료되었습니다</p>
    </div>

    <h4 class="mb-3 font-bold text-neutral-500">결제완료</h4>
    <div class="border-y border-solid border-neutral-800 border-b-neutral-300 flex flex-col py-5 gap-3">
      <dl class="flex items-center justify-between">
        <dt class="text-sm text-neutral-500">클로버</dt>
        <dd class="font-bold">5개</dd>
      </dl>
      <dl class="flex items-center justify-between">
        <dt class="text-sm text-neutral-500">결제금액</dt>
        <dd class="font-bold">5,000원</dd>
      </dl>
      <dl class="flex items-center justify-between">
        <dt class="text-sm text-neutral-500">충전 후 캐시</dt>
        <dd class="font-bold">24개</dd>
      </dl>
    </div>

    <div class="flex items-center mt-10 gap-3">
      <button class="flex-1 h-12 rounded-md border border-solid border-neutral-300 active:bg-neutral-50" @click="$router.push('cash')">
        추가 충전
      </button>
      <button class="flex-1 h-12 bg-rose-600 text-white rounded-md active:bg-rose-700" @click="$router.push('/')">
        완료
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