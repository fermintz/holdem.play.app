<template>
  <div>
    <div class="p-5 mt-4">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">마이페이지</h2>
        <button class="text-sm underline" @click="$router.push('login')">로그아웃</button>
      </div>
      <div class="flex items-center mt-10 gap-4">
        <dl class="flex-1 border-r border-solid border-neutral-200">
          <dt class="text-xs text-neutral-500">계정코드</dt>
          <dd class="font-bold mt-1 text-lg">A1045601</dd>
        </dl>
        <dl class="flex-1 border-r border-solid border-neutral-200" @click="$router.push('wallet')">
          <dt class="text-xs text-neutral-500">보유 시드권</dt>
          <dd class="font-bold mt-1 text-lg">5장</dd>
        </dl>
        <dl class="flex-1" @click="$router.push('cash')">
          <dt class="text-xs text-neutral-500">보유 클로버</dt>
          <dd class="font-bold mt-1 text-lg">50개</dd>
        </dl>
      </div>
    </div>

    <div class="h-2 bg-neutral-100"></div>

    <div class="p-5">
      <dl>
        <dt class="text-xs mb-4 text-neutral-500">서비스</dt>
        <dd class="flex flex-col">
          <button class=" text-left h-10" @click="$router.push('seed_history')">시드권 양도내역</button>
          <button class=" text-left h-10" @click="$router.push('cash')">클로버 충전하기</button>
          <button class=" text-left h-10" @click="$router.push('cash_history')">클로버 충전내역</button>
        </dd>
      </dl>
      <div class="h-px bg-neutral-200 my-8"></div>
      <dl>
        <dt class="text-xs mb-4 text-neutral-500">고객센터</dt>
        <dd class="flex flex-col">
          <button class=" text-left h-10" @click="$router.push('board-notice/list')">공지사항</button>
          <button class=" text-left h-10">개인정보 취급방침</button>
          <button class=" text-left h-10">서비스약관 및 정책</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>