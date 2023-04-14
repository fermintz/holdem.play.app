<template>
  <div>
    <div class="px-5">
      <h2 class="text-2xl font-bold">시드 전송내역</h2>
      <p class="mt-2 text-neutral-500 text-sm">시드권을 보내고 받은 내역을 확인할 수 있습니다</p>
    </div>

    <div class="p-5 mt-5 flex flex-col">
      <dl class="border-b border-solid border-neutral-200  pb-8 mb-8">
        <dt class="text-sm text-neutral-500">3월 28일</dt>
        <dd class="flex flex-col gap-6 mt-4">
          <history-item @click="$router.push('seed_history_detail')"/>
        </dd>
      </dl>

      <dl class="border-b border-solid border-neutral-200  pb-8 mb-8 last:border-0">
        <dt class="text-sm text-neutral-500">3월 24일</dt>
        <dd class="flex flex-col gap-5 mt-4">
          <history-item />
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

<style lang="scss" scoped>
.tab.active{
  color:rgb(225 29 72);
}
.tab.active:after{
  content:'';
  position: absolute;
  width:100%;
  height:2px;
  background:rgb(225 29 72);
  left:0;
  bottom:0;
}
</style>
