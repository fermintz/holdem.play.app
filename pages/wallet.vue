<template>
  <div class="p-5">
    <div class="flex items-start mt-4">
      <div class="flex-1">
        <div class="text-2xl font-extrabold">시드지갑</div>
        <dl class="flex mt-2 text-sm items-center">
          <dt class="mr-2 text-neutral-500">계정코드</dt>
          <dd class="font-bold text-green-800">A1045601</dd>
        </dl>
      </div>
    </div>

    <div class="flex items-start gap-[10px] mt-7">
      <div class="gap-[10px] flex flex-col flex-1" >
        <button class="flex items-center bg-rose-50 rounded-md h-14 p-3"  @click="$router.push('seed_get')">
          <span class="material-icons-round text-rose-600 mr-3">download</span>
          <div class="flex flex-col text-left">
            <strong class="text-sm font-bold">받기</strong>
            <span class="text-[10px] text-gray-500">QR코드 지갑생성</span>
          </div>
        </button>
        <button class="flex items-center bg-blue-50 rounded-md h-14 p-3" @click="$router.push('qr_camera')">
          <span class="material-icons-round text-blue-600 mr-3">file_upload</span>
          <div class="flex flex-col text-left">
            <strong class="text-sm font-bold">보내기</strong>
            <span class="text-[10px] text-gray-500">QR코드 스캔</span>
          </div>
        </button>
      </div>
      <div class="flex-1 bg-neutral-100 rounded-md flex flex-col justify-between h-[122px] p-3">
        
        <div class="flex flex-col" @click="$router.push('seed_send_online')">
          <strong class="text-sm font-bold">온라인 보내기</strong>
          <span class="text-[12px] mt-1 text-gray-500">멀리있는 사람에게 시드권을 보낼 수 있습니다.</span>
        </div>
        <div class="text-right">
          <span class="material-icons-round">send</span>
        </div>
      </div>
    </div>


    <div class="h-px bg-gray-200 my-7" /> <!-- divider -->
    
    <div class=" mb-5 text-sm">
      보유시드권은 총 <strong class="text-rose-600 font-bold">3장</strong>입니다.
    </div>
    <div class="flex flex-col gap-4 pb-16"> <!-- list -->
      <div class="rounded-lg overflow-hidden" @click="$router.push('seed_detail')" > <!-- 시드권 컴포넌트 -->
        <div class="flex items-center p-4 gap-3 relative overflow-hidden bg-[url('~/assets/img/profile01.png')]  bg-no-repeat bg-cover bg-center after:content-[''] after:bg-[rgba(0,0,0,0.8)] after:absolute after:left-0 after:w-full after:h-full after:z-10">
          <div class="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden z-20">
            <img src="~/assets/img/profile01.png" class="block w-full">
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
          <strong class="block ml-3 font-bold">3장</strong>
          </div>
        </div>
      </div>

      <div class="rounded-lg overflow-hidden"  @click="$router.push('seed_detail')" > <!-- 시드권 컴포넌트 -->
        <div class="flex items-center p-4 gap-3 relative overflow-hidden bg-[url('~/assets/img/profile02.png')]  bg-no-repeat bg-cover bg-center after:content-[''] after:bg-[rgba(0,0,0,0.8)] after:absolute after:left-0 after:w-full after:h-full after:z-10">
          <div class="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden z-20">
            <img src="~/assets/img/profile02.png" class="block w-full">
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
          <strong class="block ml-3 font-bold">3장</strong>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>