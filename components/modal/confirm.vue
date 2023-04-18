<template>
  <div class="relative" v-if="show">
    <div class="fixed flex items-center justify-center h-full z-10 inset-0 p-8">
      <transition
        name="fade"
        appear
      >
        <div class="fixed inset-0 h-full bg-black bg-opacity-70 z-20" @click.stop="show=false" v-if="show"></div>
      </transition>

      <transition name="slide-up" appear>
        <div class="relative bg-white w-full rounded-md p-4 z-30">
          <div>
            <h4 class="font-bold">충전하기</h4>
            <p class="mt-2 text-neutral-600">선택하신 금액 50,000원을 충전하시겠습니까?</p>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button class="h-10 bg-neutral-200 px-4 text-sm rounded-md" @click="show=false">취소</button>
            <button class="h-10 bg-rose-600 text-white px-4 text-sm rounded-md" @click="show=false">확인</button>
          </div>
        </div>
      </transition>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import {watch} from 'vue'

const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void,
  (e: 'selectorSeed', state: boolean):void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})

watch(props, ()=>{
  if(props.modelValue === true){
    document.body.style.cssText = `overflow:hidden`
  }else{
    document.body.style.cssText = `overflow-y:auto`
  }
})

</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.fade-enter-to, .fade-leave-from{
  opacity: 1;
}

.slide-up-enter-active, .slide-up-leave-active{
  transition: all 0.5s ease;
}
.slide-up-enter-from, .slide-up-leave-to{
  transform: translateY(50px);
}
.slide-up-enter-to, .slide-up-leave-from{
  transform: translateY(0px);
}


</style>