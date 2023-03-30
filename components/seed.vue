<template>
  <div class="rounded-lg overflow-hidden" > <!-- 시드권 컴포넌트 -->
    <div class="flex items-center p-4 gap-3 relative overflow-hidden bg-[url('https://picsum.photos/200/300')] bg-no-repeat bg-cover bg-center after:content-[''] after:bg-[rgba(0,0,0,0.8)] after:absolute after:left-0 after:w-full after:h-full after:z-10">
      <div class="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden z-20">
        <img src="https://picsum.photos/200/300" class="block w-full">
      </div>
      <div class="flex-1 z-20">
        <div class="font-bold text-white">WPL</div>
        <div class="text-xs text-gray-300 mt-1">Winjoy Poker League</div>
      </div>
      <span class="material-icons-round text-white absolute right-3 top-3 z-20"  style="font-size:18px;" v-show="isShow">arrow_forward</span>
    </div> 
    <div class="flex items-center justify-between p-4 border border-solid border-gray-300 rounded-b-lg border-t-0">
      <span class="text-xs text-neutral-500">KSOP</span>
      <div class="flex items-center"> 
        <span class="block text-xs text-neutral-500">보유수량</span>
      <strong class="block ml-3 font-bold">1장</strong>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const isShow = computed(()=> route.path === '/wallet')

</script>

