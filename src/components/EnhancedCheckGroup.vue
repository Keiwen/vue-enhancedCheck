<script setup>
import { ref, computed, onMounted, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Array,
  label: { type: Array, required: true },
  id: { default: '' },
  name: { default: '' },
  value: { type: Array, default: () => [] },
  subClass: { type: String, default: 'default' },
  disabled: { default: false },
  combine: { type: Boolean, default: false },
  inline: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  animate: { type: Boolean, default: false }
})

const groupModel = ref([])
const generatedId = ref('')

const emit = defineEmits(['update:modelValue'])

onMounted(async () => {
  if (props.id === '') {
    generatedId.value = 'enhancedCheckGroup_' + Math.random().toString(36).substring(2, 9)
  } else {
    generatedId.value = props.id
  }
  groupModel.value = props.modelValue
})

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== groupModel.value) groupModel.value = newValue
})

// computed
const computedClass = computed(() => {
  let computedClass = 'enhancedCheck-' + props.subClass
  if (props.combine) computedClass += ' enhancedCheck-combine'
  if (props.inline) computedClass += ' enhancedCheck-inline'
  if (props.rounded) computedClass += ' enhancedCheck-rounded'
  if (props.animate) computedClass += ' enhancedCheck-animate'
  return computedClass
})
const nameList = computed(() => generateListFromProp(props.name))
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
  emit('update:modelValue', groupModel.value)
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
      <input type="checkbox" :id="inputElmt.id" :name="nameList[indexElmt]" :value="inputElmt.value" :disabled="disabledList[indexElmt]" @change="inputChange()" v-model="groupModel" :checked="inputElmt.checked">
      <label :for="inputElmt.id">{{ inputElmt.label }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import '../styles/common.scss';
</style>
