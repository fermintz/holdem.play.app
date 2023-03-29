<template>
  <div class=" bg-neutral-800 h-full"> 
    <header class="h-16 flex items-center px-2">
      <div 
        class="w-12 h-12 flex items-center justify-center active:bg-neutral-800 rounded-full"
        @click="$router.go(-1)"
      >
        <span class="material-icons-round text-white">arrow_back</span>
      </div>
    </header>

    <div class="px-5">
      <div>
        <h2 class="text-2xl font-bold text-white">시드권 받기</h2>
        <p class="mt-2 text-neutral-400 text-sm">시드월렛 QR코드는 홈덤플레이앱을 <br/>통해서만 스캔할 수 있습니다.</p>
      </div>

      <div class="px-5 mt-10">
        <div class=" bg-rose-700 rounded-2xl shadow-lg shadow-black overflow-hidden">
          <div class="bg-white  p-6">
            <div class="flex items-center justify-between mb-8">
              <span class="text-sm text-gray-500">Holdem Play</span>
              <strong class="text-sm">아이디</strong>
            </div>
            <div class="flex items-center justify-center">
              <div class="flex items-center justify-center w-52 h-52 rounded-xl border-4 border-solid border-gray-200 p-4">
                QR코드 자리
              </div>
            </div>
            <div class="flex justify-center">
              <p class="mt-5 text-xs bg-gray-200 py-2 px-4 rounded-full text-gray-500">QR코드를 스캔해주세요</p>
            </div>
          </div>
          
          <div class="h-16 flex items-center justify-center text-white text-sm">
            위변조 방지를 위해 5초마다 갱신됩니다.
          </div>
        </div>
      </div>
    </div>

  

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty'
})
</script>