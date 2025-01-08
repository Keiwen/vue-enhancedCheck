<script setup>
import { ref, computed, onMounted, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  label: { type: Array, required: true },
  id: { default: '' },
  name: { type: String, default: '' },
  value: { type: Array, default: () => [] },
  subClass: { type: String, default: 'default' },
  disabled: { default: false },
  inline: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  animate: { type: Boolean, default: false }
})

const radioModel = ref('')
const generatedId = ref('')
const generatedName = ref('')

const emit = defineEmits(['update:modelValue'])

onMounted(async () => {
  if (props.id === '') {
    generatedId.value = 'enhancedCheckRadio_' + Math.random().toString(36).substr(2, 9)
  } else {
    generatedId.value = props.id
  }
  if (props.name === '') {
    generatedName.value = generatedId.value
  } else {
    generatedName.value = props.name
  }
  radioModel.value = props.modelValue
})

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== radioModel.value) radioModel.value = newValue
})

// computed
const computedClass = computed(() => {
  let computedClass = 'enhancedCheck-' + props.subClass
  if (props.inline) computedClass += ' enhancedCheck-inline'
  if (props.rounded) computedClass += ' enhancedCheck-rounded'
  if (props.animate) computedClass += ' enhancedCheck-animate'
  return computedClass
})
const disabledList = computed(() => generateListFromProp(props.disabled))
const inputList = computed(() => {
  const list = []
  for (let i = 0; i < props.label.length; i++) {
    let idElmt = 0
    if (Array.isArray(generatedId.value)) {
      idElmt = generatedId.value[i]
    } else {
      idElmt = generatedId.value + '_' + i
    }
    let valueElmt = props.value[i]
    if (typeof valueElmt === 'undefined') {
      valueElmt = props.label[i]
    }
    const elmt = {
      id: idElmt,
      label: props.label[i],
      value: valueElmt,
      checked: props.modelValue.includes(valueElmt)
    }
    list.push(elmt)
  }
  return list
})

// methods
const inputChange = () => {
  emit('update:modelValue', radioModel.value)
}

const generateListFromProp = (propValue) => {
  if (!Array.isArray(propValue)) {
    const elmtCount = props.label.length
    if (elmtCount === 1) return [propValue]
    return new Array(elmtCount).fill(propValue)
  }
  return propValue
}

</script>

<template>
  <div class="enhancedCheck" :class="computedClass">
    <div v-for="(inputElmt, indexElmt) in inputList" :key="indexElmt">
      <input type="radio" :id="inputElmt.id" :name="generatedName" :value="inputElmt.value" :disabled="disabledList[indexElmt]" @change="inputChange()" v-model="radioModel" :checked="inputElmt.checked">
      <label :for="inputElmt.id">{{ inputElmt.label }}</label>
    </div>

  </div>
</template>

<style lang="scss" scoped>
    @import '../styles/common.scss';
</style>
