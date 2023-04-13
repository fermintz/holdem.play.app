<template>
  <div class="fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center" v-if="show">
    <div class="bg-black opacity-70 fixed w-full h-full z-10">

    </div>
    <div class="w-full h-full z-20 p-5 pb-20 overflow-y-auto">
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
        <swiper-slide v-for="slide in 3" :key="slide" class=" rounded-lg overflow-hidden">
          <img src="https://picsum.photos/600/1700" class="w-full"/>
        </swiper-slide>
        <div class="custom"></div>
      </swiper>
    </div>
    <div class="fixed bottom-5 w-full z-30 flex justify-center">
      <button class="bg-neutral-900 rounded-full py-3 px-10" @click="show = false">
        <span class="text-white font-bold">닫기</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Pagination} from 'swiper'

const modules = [Pagination]

const props = defineProps<{
  modelValue: boolean,
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void,
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
    
  }
})
</script>

<style lang="scss" scoped>
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
</style>
