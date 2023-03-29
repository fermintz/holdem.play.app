<template>
  <div class="bg-neutral-800 h-full">
    <header class="h-16 flex items-center px-2">
      <div 
        class="w-12 h-12 flex items-center justify-center active:bg-neutral-800 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round text-white">arrow_back</span> 
      </div>
      <div class="font-bold text-lg text-white">상세보기</div>
    </header>

    <div class="p-6">
      <div class="bg-white rounded-xl shadow-lg shadow-black overflow-hidden p-5 pb-10">
     
        <div class="flex items-center relative">
          <img src="https://picsum.photos/200/300" class="block w-20 h-20 object-cover object-top rounded-lg">
          <dl class=" flex-1 ml-4">
            <dt class="font-bold text-xl">WPL</dt>
            <dd class="text-sm text-gray-500">Winjoy Poker League</dd>
          </dl>
        </div>

        <div class="h-px bg-neutral-200 my-5" />
        
        <div class="flex items-center justify-between gap-5">
          <dl class="flex-1 text-left border-r border-solid border-neutral-200">
            <dt class="text-xs text-gray-500">담당기관</dt>
            <dd class="font-bold mt-1">KSOP</dd>
          </dl>
          <dl class="flex-1 text-left">
            <dt class="text-xs text-gray-500">보유시드권</dt>
            <dd class="font-bold mt-1">1장</dd>
          </dl>
        </div>

        <div class="h-px bg-neutral-200 my-5" />
        
        
          <div class="flex items-center justify-between">
            <div class="text-xs text-gray-500">수량</div>
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center active:bg-slate-300">
                <span class="material-icons"  style="font-size:16px">remove</span>
              </div>
              <div class="font-bold">
                1
              </div>
              <div class="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center active:bg-slate-300">
                <span class="material-icons"  style="font-size:16px">add</span>
              </div>
            </div>
          </div>
          <button class="w-full h-12 bg-rose-600 mt-6 rounded-lg flex items-center justify-center text-white font-bold active:bg-rose-700">
            현장 사용하기
          </button>
          <div class="text-xs text-gray-500 mt-5">
            QR코드로 시드권을 전송시에는 GPS상 50mm내에<br/>위치에서만 양도할 수 있습니다. 
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