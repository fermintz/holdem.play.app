<template>
  <div>
    <div class="px-5">
      <h2 class="text-2xl font-bold">캐쉬 충전내역</h2>
      <p class="mt-2 text-neutral-500 text-sm">클로버 캐시를 충전한 내역을 확인 할 수 있습니다.</p>
    </div>
    <div class="p-5 mt-5 flex flex-col">
      <dl class="flex flex-col pb-10 mb-10 border-b border-solid border-neutral-200 last:border-b-0" v-for="date in 3" :key="date">
        <dt class="text-xs text-neutral-500 mb-3">23.04.14</dt>
        <dd class="flex flex-col gap-6">
          <div class="flex items-center justify-between"  v-for="time in 3" :key="time">
            <div class="flex items-center">
              <span class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                <img src="~/assets/img/clova.png" class="h-8"/>
              </span>
              <div class="flex flex-col ml-5">
                <span class="text-lg font-bold">+{{time}} 충전</span>
                <span class="text-[11px] mt-0.5 text-neutral-500">잔여클로버 14 / 구글</span>
              </div>
            </div>
            <div class="text-sm">
              14:1{{time}}
            </div>
          </div>
          
          
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub'
})
</script>
