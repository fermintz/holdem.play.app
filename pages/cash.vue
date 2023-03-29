<template>
  <div>
    <header class="h-16 flex items-center px-2">
      <div
        class="w-12 h-12 flex items-center justify-center active:bg-gray-200 rounded-full"
        @click="$router.go(-1)"
      > 
        <span class="material-icons-round">arrow_back</span>
      </div>
      <div class="font-bold text-lg"></div>
    </header>

    <div class="px-5">
      <h2 class="text-2xl font-bold">클로버 충전하기</h2>
      <p class="text-sm mt-2 text-gray-500">시드권에 따라 전송시 필요한 클로버 수량이<br />달라질 수 있습니다.</p>

      <div
        class="flex items-center justify-between bg-gray-100 h-12 px-3 rounded-md mt-5"
      >
        <span class="font-bold">보유클로버</span>
        <div class="flex items-center">
          <img src="~/assets/img/clova.png" class="h-6">
          <strong class="ml-1 font-bold">12</strong>
        </div>
      </div>

      <div class="h-px bg-gray-300 my-8" />

      <div class="grid grid-cols-2 gap-3">
        <div
          class="border border-solid border-neutral-300 p-3 rounded-md"
          v-for="(item, index) in 5"
          :key="index"
          @click="itemSelector = index"
          :class="{active:itemSelector === index}"
          
        >
          <div class="flex flex-col items-start">
            <strong class="text-lg font-bold mb-1">X{{item}}0</strong>
            <img src="~/assets/img/clova.png" class="h-6">
          </div>
          <div class="flex flex-col items-end">
            <span class="text-xs text-gray-500 mb-1">판매가</span>
            <strong class="font-bold">{{item}}0,000원</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5 border-t border-solid border-gray-300 mt-10">
      <h4 class="font-bold text-lg mb-3">결제정보</h4>
      <dl class="flex items-center justify-between">
        <dt class="text-sm text-gray-500">충전클로버</dt>
        <dd class="font-bold">1개</dd>
      </dl>
      <dl class="flex items-center justify-between mt-2">
        <dt class="text-sm text-gray-500">총 비용</dt>
        <dd class="font-bold">1,000원</dd>
      </dl>
      <button 
        class="w-full h-12 rounded-md mt-5 bg-rose-600 text-white active:bg-rose-700" 
        @click="visible = true"
      >
        결제하기
      </button>
    </div>

    <modalMessage v-model="visible" title="충전하기" text="클로버 50개를 충전하시겠습니까?" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "empty",
});

const itemSelector = ref(0);
const visible = ref(false)
</script>

<style lang="scss" scoped>
.active{
  border:2px solid rgba(255,29,72,1);
}
</style>
