<template>
  <div class="border-t border-solid border-t-neutral-200 p-5">
    <div class="flex items-center">
      <img src="https://picsum.photos/200/300" class="block w-10 h-10 bg-cover rounded-full" @click="$router.push('league_detail')">
      <div class="ml-3">
        <strong class="block font-bold">WSL</strong>
        <span class="block text-xs text-neutral-500 mt-[2px]">3월 30일</span>
      </div>
    </div>
    
    <div class="image rounded-xl mt-5 relative">
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :speed="1500"
        :loop="true"
        :spaceBetween="0"
        :pagination="{
          type:'fraction',
          el:`.custom`
        }"
        :mousewheel="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="slide in 3" :key="slide">
          <img src="https://picsum.photos/600/1200" class=" object-cover w-full h-full object-top"  @click="visible = true"/>
        </swiper-slide>
        <div class="custom"></div>
      </swiper>
    </div>
    <p class="pt-0 text-sm mt-3" id="hiddenTextBox" :class="{active:hiddenTextBox}">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repudia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repudia
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci placeat cumque enim, voluptates doloremque aperiam ratione pariatur sequi, corrupti et illo excepturi velit sit perspiciatis temporibus sunt repellendus officia?
    </p>
    <div class="flex items-center justify-center">
      <button class="flex  items-center text-xs bg-neutral-200 py-1 px-3 mt-4 rounded-full object-cover" @click="hiddenTextBox = !hiddenTextBox" v-show="hiddenButton">
        <span>{{hiddenTextBox ? '닫기' : '더보기'}}</span>  
        <span class="material-icons ml-1" style="font-size:14px;">{{hiddenTextBox ? 'expand_less' : 'expand_more'}}</span>
      </button>
    </div>

    <ModalImageViewer v-model="visible"/>
  </div>

  

</template>

<script lang="ts" setup>
import {Pagination} from 'swiper'

const modules = [Pagination]
const hiddenTextBox = ref(false)
const hiddenButton = ref(false)
const visible = ref(false)

const creted = ()=>{
  const textLength = document.getElementById('hiddenTextBox')?.innerText

  if(Number(textLength?.length) >= 150){
    hiddenButton.value = !hiddenButton.value
  }
}

</script>

<style lang="scss" scoped>
.swiper{
  position: relative;
}

.image{
  overflow:hidden;
  position: relative;

  &:after{
    content:'';
    padding-bottom:100%;
    display:block;
  }
  
  .swiper{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
}


.custom{
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width:inherit;
  text-align:center;
  font-size:12px;
  width:40px;
  height:20px;
  border-radius:13px;
  color:#fff;
  top:15px;
  background:rgba(0,0,0,0.7);
  left:100%;
  transform: translateX(-55px);
  z-index:99;
}

#hiddenTextBox{
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

#hiddenTextBox.active{
  display:block;
}

</style>