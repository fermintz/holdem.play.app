<template>
  <div class="pt-4">
    <header class="sticky top-0 w-full bg-white px-5 py-3">
      <div class="font-sans text-3xl font-bold">
        Holdem <strong class=" text-rose-600">Play</strong>
      </div>
      <div class="text-xs text-gray-500">홀덤플레이</div>
    </header>
    <div class="pb-16 pt-5">
      <div 
        class="flex items-center px-5 py-3 border-b border-solid border-gray-200 last:border-b-0"
        v-for="item in 10" 
        :key="item"
        @click="$router.push('board-free/1')"
      >
        <div class="w-20 h-20 overflow-hidden rounded-md">
          <img src="https://picsum.photos/200/300" class="block w-full"/>
        </div>
        <div class="flex-1 ml-4">
          <strong class="text-sm font-bold">3월 29일 ~ 4월 2일 WFP 대회 일정안내 파라다이스</strong>
          <div class="flex items-center mt-2">
            <span class="text-gray-500 text-xs pr-2 block border-r-2 border-gray-400">관리자</span>
            <span class="h-3 w-px bg-gray-200"></span>
            <span class="text-gray-500 text-xs px-2 block">23.03.15</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.el-button{
  color:$primary;
}
</style>