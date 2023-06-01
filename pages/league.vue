<template>
  <div class="p-5 pb-20">
    <div class="mt-5">
      <h2 class="text-2xl font-bold">홀덤대회</h2>
      <p class="mt-2 text-neutral-500 text-sm ">관심있는 대회를 구독하시면<br/> 새로운 정보가 업데이트 되면 먼저 알려드립니다</p>    
    </div>
    <div class="grid grid-cols-2 gap-5 mt-10">
      <dl 

        class="flex flex-col items-center bg-neutral-100 p-4 rounded-xl" 
        @click="$router.push('league_detail')"
      >
        <dt>
          <img src="~/assets/img/profile01.png" class="w-32 h-32 object-cover rounded-full"/>
        </dt>
        <dd class="flex flex-col items-center mt-3">
          <strong class="block font-bold">HL</strong>
          <button class="bg-white h-7 text-xs rounded-full px-3 mt-2 border border-solid border-neutral-300 active:bg-neutral-100">구독하기</button>
        </dd>
      </dl>
      <dl 

        class="flex flex-col items-center bg-neutral-100 p-4 rounded-xl" 
        @click="$router.push('league_detail')"
      >
        <dt>
          <img src="~/assets/img/profile02.png" class="w-32 h-32 object-cover rounded-full"/>
        </dt>
        <dd class="flex flex-col items-center mt-3">
          <strong class="block font-bold">KSOP</strong>
          <button class="bg-white h-7 text-xs rounded-full px-3 mt-2 border border-solid border-neutral-300 active:bg-neutral-100">구독하기</button>
        </dd>
      </dl>
      <dl 

        class="flex flex-col items-center bg-neutral-100 p-4 rounded-xl" 
        @click="$router.push('league_detail')"
      >
        <dt>
          <img src="~/assets/img/profile03.png" class="w-32 h-32 object-cover rounded-full"/>
        </dt>
        <dd class="flex flex-col items-center mt-3">
          <strong class="block font-bold">KMGM</strong>
          <button class="bg-white h-7 text-xs rounded-full px-3 mt-2 border border-solid border-neutral-300 active:bg-neutral-100">구독하기</button>
        </dd>
      </dl>

      <dl 

        class="flex flex-col items-center bg-neutral-100 p-4 rounded-xl" 
        @click="$router.push('league_detail')"
      >
        <dt>
          <img src="~/assets/img/profile04.png" class="w-32 h-32 object-cover rounded-full"/>
        </dt>
        <dd class="flex flex-col items-center mt-3">
          <strong class="block font-bold">WPL</strong>
          <button class="bg-white h-7 text-xs rounded-full px-3 mt-2 border border-solid border-neutral-300 active:bg-neutral-100">구독하기</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>