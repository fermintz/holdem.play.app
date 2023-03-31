<template>
  <div>
    <div class="px-5">
      <h2 class="text-2xl font-bold">시드권 보내기(온라인)</h2>
      <p class="mt-2 text-neutral-500 text-sm ">먼 곳에 있는 사용자에게 시드권을<br/>전송할 수 있습니다.</p>

      <div class="flex items-center justify-between bg-neutral-100 p-3 rounded-md mt-6">
        <span class="text-sm text-neutral-500">보유클로바</span>
        <div class="flex items-center">
          <img src="~/assets/img/clova.png" class="mr-1 h-5"/>
          <span class="font-bold">12</span>
          <button
            @click="$router.push('/cash')"
            class="ml-4 border border-solid border-neutral-900 bg-white text-xs h-8 rounded-md px-2"
            >충전하기
          </button>
        </div>
      </div>
    </div>

    <div class="h-2 bg-neutral-100 my-6"></div>
    
    <div class="px-5">
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-bold text-sm">시드권 선택</h4>
        <button 
        v-show="state" 
        class="text-xs border border-solid border-neutral-300 px-3 h-7 rounded-md"
        @click="state = false"
        
        >다시선택</button>
      </div> 
      <button
        class="flex h-14 w-full border border-solid border-neutral-700 px-3 rounded-lg items-center justify-between active:bg-gray-100"
        v-if="state === false"
        @click="visible = true"
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

      <div class="mt-12">
        <h4 class="font-bold mb-2 text-sm">받는분 계정코드<span class="text-rose-600">*</span></h4>
        <input type="text" class="border border-solid border-neutral-300 w-full h-14 rounded-md px-3 placeholder:text-xs" placeholder="상대방 코드를 입력해주세요">
      </div>
    </div>

    <div class="mt-12 p-5 border-t border-solid border-neutral-300">
      <dl class="flex items-center justify-between h-8">
        <dt class="text-sm">시드 보내는 수량</dt>
        <dd class="font-bold">2장</dd>
      </dl>
      <dl class="flex items-center justify-between h-8">
        <dt class="text-sm">전송비용</dt>
        <dd class="font-bold flex items-center">
          <img src="~/assets/img/clova.png" class="mr-1 h-5"/>
          <span class="font-bold">2</span>
        </dd>
      </dl>
      <button 
        class="h-14 w-full rounded-lg bg-rose-600 text-white disabled:bg-gray-200 disabled:text-neutral-400 active:bg-rose-700 mt-4"
        :disabled="!state"
        @click="$router.push('send_finish')"
      >
        전송하기
      </button>
      <p class="text-xs text-neutral-500 mt-4">전송후에는 취소되지 않습니다<br/>신중하게 보내기 기능을
이용해주세요</p>
    </div>
    
    <ModalBottomSheet v-model="visible" @selector-seed="stateValue" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "sub",
});

const state = ref(false)
const visible = ref(false)

const stateValue = ()=>{
  state.value = true;
  visible.value = false;
}
</script>

<style lang="scss" scoped>

</style>
