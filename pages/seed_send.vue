<template>
  <div class="pb-20">
    <header class="h-16 flex items-center px-2">
      <div
        class="w-12 h-12 flex items-center justify-center active:bg-gray-200 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round">arrow_back</span>
      </div>
    </header>

    <div class="px-5">
      <h2 class="text-2xl font-bold">시드권 보내기(QR)</h2>
      <p class="mt-2 text-neutral-500 text-sm">보내실 시드권 및 수량을 선택해주세요 <br/></p>
    </div>


    <div class="px-5 mt-12">
      <h4 class="font-bold text-sm mb-2">받으실 사용자코드</h4>
      <div class="h-14 bg-neutral-100 rounded-md mb-10 flex items-center px-4">FG8590AS</div>
   
      
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-bold text-sm">시드권 선택</h4>
        <button 
          class="text-xs border border-solid border-neutral-300 px-3 h-7 rounded-md"
          v-show="state"
          @click="visible = true"
          >다시선택</button>
      </div> 
      <button
        class="flex h-14 w-full border border-solid border-neutral-700 px-3 rounded-lg items-center justify-between active:bg-gray-100"
        @click="visible = true"
        v-if="state === false"
      > 
        <span class="text-sm">시드권 선택하기</span>
        <span class="material-icons">chevron_right</span>
      </button>

      <Seed v-show="state"/>

      <div class="flex items-center justify-between h-14 bg-neutral-100 rounded-lg px-3 mt-4" v-show="state">
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


      <div class="h-px bg-neutral-200 my-8"></div>


      <button
        class="h-14 w-full rounded-lg bg-rose-600 text-white disabled:bg-gray-200 disabled:text-neutral-400 active:bg-rose-700"
        :disabled="!state"
        @click="$router.push('send_finish')"
      >
        보내기 완료
      </button>

      <p class="text-sm mt-4 text-neutral-500">
        전송을 완료하시면 상대방에게 시드권이 최종적으로 이동합니다. 신중하게 선택해주세요
      </p>
    </div>

    <ModalBottomSheet v-model="visible" @selector-seed="stateValue" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "empty",
});

const visible = ref(false)
const state = ref(false)

const stateValue = ()=>{
  state.value = true;
  visible.value = false;
}
</script>

<style lang="scss" scoped>

</style>
