<template>
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden z-30" v-if="show" id="modal">
    <transition
      appear
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      class="absolute top-0"
    >
      <div class=" bg-opacity-70 bg-black w-full h-full absolute z-10 top-0 left-0" 
        v-if="show"  
        @click="show = false"
      >
      </div> 
    </transition>

    <transition
      appear
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full z-30 px-8" v-if="show">
        <div class="flex flex-col items-center">
          <Icon name="svg-spinners:blocks-shuffle-3" size="40" class="text-white"></Icon>
          <span class="text-white mt-5">자료를 불러오는 중입니다.</span>
        </div>
      </div>   
    </transition>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean,
  text: string,
  title:string
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

</style>