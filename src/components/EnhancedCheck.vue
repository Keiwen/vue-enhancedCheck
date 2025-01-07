<script setup>
import { ref, computed, onMounted, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  label: { type: String, required: true },
  id: { type: String, default: '' },
  checked: { default: false },
  name: { default: '' },
  value: { default: '' },
  subClass: { type: String, default: 'default' },
  disabled: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  animate: { type: Boolean, default: false }
})

const inputModel = ref(false)
const generatedId = ref('')

const emit = defineEmits(['update:modelValue', 'input'])

// computed
const computedClass = computed(() => {
  let computedClass = 'enhancedCheck-' + props.subClass
  if (props.rounded) computedClass += ' enhancedCheck-rounded'
  if (props.animate) computedClass += ' enhancedCheck-animate'
  return computedClass
})

onMounted(async () => {
  if (props.id === '') {
    generatedId.value = 'enhancedCheck_' + Math.random().toString(36).substr(2, 9)
  } else {
    generatedId.value = props.id
  }
})

// methods
const inputChange = () => {
  emit('update:modelValue', inputModel.value)
}

</script>

<template>
  <div class="enhancedCheck" :class="computedClass">
    <div>
      <input type="checkbox" :id="generatedId" :name="name" :value="value" @change="inputChange()" :disabled="disabled" v-model="inputModel" :checked="modelValue">
      <label :for="generatedId">{{ label }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import '../styles/common.scss';

</style>
