<template>
  <div class="overflow-hidden pb-16">
    <header class="relative top-0 w-full bg-white p-5 z-10">
      <div class="flex items-center">
        <img src="~/assets/img/logo.png" class="h-12">
        <div class="ml-2 flex flex-col">
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
            v-for="(item, index) in ['전체','WSL','KSOP','WPP','XPL','ESOP']" 
            :key="index" 
            :class="{active:tabActive === index}"
            @click="tabActive = index"
          >
            <dt class="w-14 relative flex justify-center items-center">
              <img :src="'https://picsum.photos/200/30' + index" class="block w-14 h-14 bg-cover rounded-full">
              <span class="material-icons absolute text-rose-600 font-bold" v-show="tabActive === index">check</span>
            </dt>
            <dd class="text-xs mt-2">{{item}}</dd>
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

    <ModalLoading v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>

const tabActive = ref(0)
const open = ref(true)
const visible = ref(true)

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