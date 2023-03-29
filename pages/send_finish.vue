<template>
  <div class="p-5">
    <div class="flex flex-col items-center justify-center">
      <div class="w-40 h-40 flex items-center justify-center bg-neutral-100 rounded-full my-10">
        <span class="material-icons-round text-rose-600" style="font-size:100px;font-weight:bold;">check</span>
      </div>
      <h2 class="text-2xl font-bold">전송이 완료되었습니다.</h2>
      <p class="mt-2 text-neutral-500">시드권이 안전하게 전송되었습니다.</p>
    </div>    
    <div class="h-px bg-neutral-200 my-8"></div>
    <div class="flex flex-col gap-4">
      <dl class="flex justify-between items-center">
        <dt class="text-sm text-neutral-500">보낸 시드명</dt>
        <dd class="font-bold">WSL</dd>
      </dl>
      <dl class="flex justify-between items-center">
        <dt class="text-sm text-neutral-500">수량</dt>
        <dd class="font-bold">2장</dd>
      </dl>
      <dl class="flex justify-between items-center">
        <dt class="text-sm text-neutral-500">받은 유저코드</dt>
        <dd class="font-bold">AD08757</dd>
      </dl>
    </div>

    <div class="flex items-center gap-3 mt-10">
      <button class="flex-1 h-12 text-sm font-bold border border-solid border-neutral-300 rounded-md" @click="$router.push('/')">홈으로</button>
      <button class="flex-1 h-12 text-sm font-bold border border-solid border-neutral-300 rounded-md" @click="$router.push('wallet')">시드지갑</button>
    </div>
    <p class="text-sm text-neutral-500 mt-5">
      전송된 내역은 [마이페이지] > [시드권 양도내역]에서<br/>다시 보실 수 있습니다.
    </p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty'
})
</script>

<style lang="scss" scoped>

</style>
