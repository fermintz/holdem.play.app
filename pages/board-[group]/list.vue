<template>
  <div>
    <header class="h-16 flex items-center px-2">
      <div 
        class="w-12 h-12 flex items-center justify-center active:bg-neutral-100 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round text-neutral-900">arrow_back</span> 
      </div>
      <div class="font-bold text-lg text-neutral-900">공지사항</div>
    </header>

    
    <div>
      <div 
        v-for="item in 30" 
        :key="item" 
        class="border-b border-solid border-b- border-neutral-200 p-5 py-3"
        @click="$router.push('1')"
      >
        <strong class="block font-bold text-neutral-800">포인트 적립 안내 및 사용방법</strong>
        <span class="block text-xs text-neutral-500 mt-1">23.03.14 13:45</span>
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