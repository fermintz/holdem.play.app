<template>
  <div class="overflow-hidden pb-16">
    <header class="relative top-0 w-full bg-white p-5 z-10">
      <div class="flex items-center">
        <img src="~/assets/img/logo.png" class="h-12">
        <div class="ml-3 flex flex-col">
          <span class="text-lg font-bold text-neutral-800 leading-none">Holdem Play</span>
          <span class="text-xs text-gray-500 mt-[2px]">홀덤플레이</span>
        </div>
      </div>
    </header>

    <div class="pb-5 mt-3">
      <div class="flex pl-5">
        <div class=" leading-none">
          <strong class="block h-1 bg-rose-600 rounded-full mb-2 w-3"></strong>
          <span class="text-xs text-neutral-500 font-bold">구독중인<br/>리그</span>
        </div>
        
        <div class="flex overflow-y-scroll gap-4 px-5" id="h_scroll" >
          <dl class="text-center" 
            :class="{active:tabActive === 0}"
            @click="tabActive = 0"
          >
            <dt class="w-14 relative flex justify-center items-center">
              <img src="~/assets/img/profile00.png" class="block w-14 h-14 bg-cover rounded-full"> 
              <span class="material-icons absolute text-rose-600 font-bold" v-show="0 === tabActive">check</span>
            </dt>
            <dd class="text-xs mt-2">ALL</dd>
          </dl>
          <dl class="text-center" 
            :class="{active:tabActive === 1}"
            @click="tabActive = 1"
          >
            <dt class="w-14 relative flex justify-center items-center">
              <img src="~/assets/img/profile01.png" class="block w-14 h-14 bg-cover rounded-full"> 
              <span class="material-icons absolute text-rose-600 font-bold" v-show="1 === tabActive">check</span>
            </dt>
            <dd class="text-xs mt-2">WSL</dd>
          </dl>
          <dl class="text-center" 
            :class="{active:tabActive === 2}"
            @click="tabActive = 2"
          >
            <dt class="w-14 relative flex justify-center items-center">
              <img src="~/assets/img/profile02.png" class="block w-14 h-14 bg-cover rounded-full"> 
              <span class="material-icons absolute text-rose-600 font-bold" v-show="2 === tabActive">check</span>
            </dt>
            <dd class="text-xs mt-2">KSOP</dd>
          </dl>
          <dl class="text-center" 
            :class="{active:tabActive === 3}"
            @click="tabActive = 3"
          >
            <dt class="w-14 relative flex justify-center items-center">
              <img src="~/assets/img/profile03.png" class="block w-14 h-14 bg-cover rounded-full"> 
              <span class="material-icons absolute text-rose-600 font-bold" v-show="3 === tabActive">check</span>
            </dt>
            <dd class="text-xs mt-2">KMGM</dd>
          </dl>
        </div>
      </div>
      
    </div>

    <div class="flex flex-col">
      <Feed v-for="item in 3" :key="item"/>
    </div>

    <div class="p-5">
      <div class="flex justify-center bg-neutral-100 p-3 rounded-md">
        <Icon name="svg-spinners:180-ring-with-bg" size="18" class="mr-2"></Icon>
        <span class="text-xs text-neutral-500">불러오는 중...</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tabActive = ref(0)



</script>

<style lang="scss" scoped>
#h_scroll::-webkit-scrollbar{
  display:none;
}


.active{
  img{
    border:3px solid rgb(225,29,72)
  }
  dd{
    color:rgb(225,29,72)
  }
}


</style>