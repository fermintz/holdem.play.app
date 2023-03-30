<template>
  <div class="overflow-hidden">
    <header class="sticky top-0 w-full bg-white p-5">
      <div class="font-sans text-3xl font-extrabold">
        Holdem <strong class=" text-rose-600">Play</strong>
      </div>
      <div class="text-xs text-gray-500 mt-1">홀덤플레이</div>
    </header>

    <div class="pb-5">
      <div class="px-5 mb-3 flex justify-between items-center">
        
      </div>
      
      <div class="flex overflow-y-scroll gap-4 px-5" id="h_scroll" >
        <div class=" leading-none">
          <strong class="block h-1 bg-rose-600 rounded-full mb-2 w-3"></strong>
          <span class="text-xs text-neutral-500 font-bold">구독중인<br/>리그</span>
        </div>

        <dl class="text-center" 
          v-for="(item, index) in ['전체','WSL','KSOP']" 
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

    <div class="flex flex-col pb-16">
      <div v-for="(item ,index) in 3" :key="index" class="border-t border-solid border-t-neutral-200 p-5">
        <div class="flex items-center">
          <img :src="'https://picsum.photos/200/30' + index" class="block w-10 h-10 bg-cover rounded-full">
          <div class="ml-3">
            <strong class="block font-bold">WSL</strong>
            <span class="block text-xs text-neutral-500 mt-[2px]">3월 30일</span>
          </div>
        </div>
        <p class="pt-0 text-sm mt-3">
          4/8 ~ 4/11 AUP대회 일정안내 제주롯데호텔
        </p>
        <div class="image rounded-xl mt-5 relative">
          <img :src="'https://picsum.photos/600/120' + index" class="w-full object-cover"/>

          <div class="absolute top-4 right-4 bg-black bg-opacity-50 py-[1px] px-2 z-10 rounded-full text-xs text-white" >
            1/1
          </div>
        </div>
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

.image{
  overflow:hidden;
  position: relative;

  &:after{
    content:'';
    padding-bottom:100%;
    display:block;
  }
  img{
    width:100%;
    position: absolute;
    object-fit: cover;
  }
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