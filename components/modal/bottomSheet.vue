<template>
  <div class="fixed top-0 w-full h-full left-0 items-center" v-if="show">
    <transition
      appear
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div class="fixed bg-opacity-70 bg-black w-full h-full z-10 top-0 left-0" v-if="show"  @click="show = false"/> 
    </transition>
    

    <transition
      appear
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-[100%]"
      enter-to-class="translate-y-[0]"

      leave-active-class="transition duration-100 ease-in"
      leave-from-class="translate-y-[0]"
      leave-to-class="translate-y-[100%]"
    >
      <div class="max-h-[70%] bg-white rounded-t-3xl absolute bottom-0 w-full z-20 p-5 pb-10 overflow-y-scroll du" v-if="show">
        <div class="flex items-center justify-between mt-2">
          <div>
            <h2 class="text-xl font-bold">
              시드 선택하기
            </h2>
            <p class="text-xs text-neutral-500 mt-1">전송하실 시드권을 선택해주세요</p>
          </div>
          <button class="px-4 h-8 text-xs bg-neutral-200 rounded-md" @click="show = false">닫기</button>
        </div>
        <div class="flex flex-col gap-8 mt-6">
          <div class="flex justify-between items-center" @click="onSelected(true)">
            <div class="flex items-center ">
              <img src="~/assets/img/profile01.png" class="w-14 h-14 overflow-hidden object-cover rounded-full">
              <div class="flex flex-col ml-3">
                <strong class="font-bold">HL</strong>
                <span class="text-xs text-neutral-500">World Play Leguae</span>
              </div>
            </div>
            <div class="font-bold">
              1장
            </div>
          </div>

          <div class="flex justify-between items-center" @click="onSelected(true)">
            <div class="flex items-center ">
              <img src="~/assets/img/profile02.png" class="w-14 h-14 overflow-hidden object-cover rounded-full">
              <div class="flex flex-col ml-3">
                <strong class="font-bold">KSOP</strong>
                <span class="text-xs text-neutral-500">World Play Leguae</span>
              </div>
            </div>
            <div class="font-bold">
              1장
            </div>
          </div>

          <div class="flex justify-between items-center" @click="onSelected(true)">
            <div class="flex items-center ">
              <img src="~/assets/img/profile03.png" class="w-14 h-14 overflow-hidden object-cover rounded-full">
              <div class="flex flex-col ml-3">
                <strong class="font-bold">KMGM</strong>
                <span class="text-xs text-neutral-500">World Play Leguae</span>
              </div>
            </div>
            <div class="font-bold">
              1장
            </div>
          </div>

          <div class="flex justify-between items-center" @click="onSelected(true)">
            <div class="flex items-center ">
              <img src="~/assets/img/profile04.png" class="w-14 h-14 overflow-hidden object-cover rounded-full">
              <div class="flex flex-col ml-3">
                <strong class="font-bold">WSP</strong>
                <span class="text-xs text-neutral-500">World Play Leguae</span>
              </div>
            </div>
            <div class="font-bold">
              1장
            </div>
          </div>
          
        </div>
      </div>
    </transition>
  </div>
  
</template>

<script lang="ts" setup>
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

const onSelected =  (state: boolean) => {
  emits('selectorSeed', state),
  console.log('선택함')
}

watch(props, ()=>{
  if(props.modelValue === true){
    document.body.style.cssText = `overflow:hidden`
  }else{
    document.body.style.cssText = `overflow-y:auto`
  }
})

</script>

<style lang="scss" scoped>
.home{}
</style>