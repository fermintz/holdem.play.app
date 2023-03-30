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
      보유시드권은 총 <strong class="text-rose-600 font-bold">5장</strong>입니다.
    </div>
    <div class="flex flex-col gap-4 pb-16"> <!-- list -->
      <Seed v-for="item in 6" :key="item" @click="$router.push('seed_detail')"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>