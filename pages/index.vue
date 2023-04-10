<template>
  <div class="overflow-hidden">
    <header class="relative top-0 w-full bg-white p-5 z-10">
      <div class="font-sans text-3xl font-extrabold">
        Holdem <strong class=" text-rose-600">Play</strong>
      </div>
      <div class="text-xs text-gray-500 mt-1">홀덤플레이</div>
    </header>

    <div class="pb-5 mt-2">
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

    <div class="flex flex-col pb-16">
      <Feed v-for="item in 10" :key="item"/>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

const tabActive = ref(0)
const open = ref(true)


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