<script setup>
import { ref, computed, watch, onMounted, defineProps, defineEmits } from 'vue'

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

const emit = defineEmits(['update:modelValue'])

onMounted(async () => {
  if (props.id === '') {
    generatedId.value = 'enhancedCheck_' + Math.random().toString(36).substring(2, 9)
  } else {
    generatedId.value = props.id
  }
  inputModel.value = props.modelValue
  if (props.checked) inputModel.value = true
})

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== inputModel.value) inputModel.value = newValue
})

// computed
const computedClass = computed(() => {
  let computedClass = 'enhancedCheck-' + props.subClass
  if (props.rounded) computedClass += ' enhancedCheck-rounded'
  if (props.animate) computedClass += ' enhancedCheck-animate'
  if (props.disabled) computedClass += ' enhancedCheck-disabled'
  return computedClass
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

<style>
</style>
