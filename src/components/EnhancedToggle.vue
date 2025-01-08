<script setup>
import { ref, computed, watch, onMounted, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  id: { type: String, default: '' },
  checked: { default: false },
  labelOn: { type: String, default: 'On' },
  labelOff: { type: String, default: 'Off' },
  name: { default: '' },
  value: { default: '' },
  styleOn: { type: String, default: 'primary' },
  styleOff: { type: String, default: 'default' },
  disabled: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false }
})

const DEFAULT_WIDTH = 50
const SWITCH_WIDTH = 30
const MIN_WIDTH = 50
const HORIZONTAL_PADDING = 10

const style = ref({})
const initLabelMaxWidth = ref(0)
const initLabelMaxChar = ref(0)
const labelMaxWidth = ref(0)
const labelMaxChar = ref(0)
const inputModel = ref(false)
const generatedId = ref('')
const toggleLabelOn = ref(null)
const toggleLabelOff = ref(null)

const emit = defineEmits(['update:modelValue'])

onMounted(async () => {
  if (props.id === '') {
    generatedId.value = 'enhancedToggle_' + Math.random().toString(36).substring(2, 9)
  } else {
    generatedId.value = props.id
  }
  initLabelMaxWidth.value = getLabelMaxWidth()
  initLabelMaxChar.value = getLabelMaxChar()
  labelMaxWidth.value = initLabelMaxWidth.value
  labelMaxChar.value = initLabelMaxChar.value
  inputModel.value = props.modelValue
  computeStyle()
})

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== inputModel.value) inputModel.value = newValue
})
watch(() => props.labelOn, (newValue, oldValue) => {
  updateLabels()
})
watch(() => props.labelOff, (newValue, oldValue) => {
  updateLabels()
})

// computed
const computedClass = computed(() => {
  let computedClass = 'enhancedCheck-' + props.styleOff
  if (inputModel.value) {
    computedClass = 'enhancedCheck-' + props.styleOn
    computedClass += ' enhancedCheck-checked'
  }
  if (props.rounded) computedClass += ' enhancedCheck-rounded'
  if (props.animate) computedClass += ' enhancedCheck-animate'
  if (props.disabled) computedClass += ' enhancedCheck-disabled'
  return computedClass
})

// methods
const inputChange = () => {
  emit('update:modelValue', inputModel.value)
}
const getLabelMaxWidth = () => {
  if (typeof toggleLabelOn.value === 'undefined') return DEFAULT_WIDTH
  return Math.max(toggleLabelOn.value.getBoundingClientRect().width, toggleLabelOff.value.getBoundingClientRect().width) - HORIZONTAL_PADDING
}
const getLabelMaxChar = () => {
  return Math.max(props.labelOn.length, props.labelOff.length)
}
const updateLabels = () => {
  const newMaxChar = getLabelMaxChar()
  if (newMaxChar !== labelMaxChar.value) {
    labelMaxWidth.value = initLabelMaxWidth.value / initLabelMaxChar.value * newMaxChar
    if (labelMaxWidth.value < MIN_WIDTH) labelMaxWidth.value = MIN_WIDTH
    computeStyle()
  }
}
const computeStyle = () => {
  style.value = {
    '--labelWidth': labelMaxWidth.value + 'px',
    '--switchWidth': SWITCH_WIDTH + 'px',
    '--switchPos': (labelMaxWidth.value + HORIZONTAL_PADDING) + 'px',
    '--toggleWidth': (labelMaxWidth.value + SWITCH_WIDTH / 2 + HORIZONTAL_PADDING) + 'px'
  }
}

</script>

<template>
  <div class="enhancedCheck enhancedToggle" :class="computedClass" :style="style">
    <label :for="generatedId">
      <input type="checkbox" :id="generatedId" :name="name" :value="value" @change="inputChange()" :disabled="disabled" v-model="inputModel" :checked="modelValue" />

      <span class="enhancedToggle-label labelOn" ref="toggleLabelOn">{{ labelOn }}</span>
      <span class="enhancedToggle-switch"></span>
      <span class="enhancedToggle-label labelOff" ref="toggleLabelOff">{{ labelOff }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
    .enhancedToggle {
        width: var(--toggleWidth);
        .labelOn {
            width: var(--labelWidth);
        }
        .labelOff {
            width: var(--labelWidth);
        }
        .enhancedToggle-switch {
            width: var(--switchWidth);
            left: var(--switchPos);
        }
    }

    // !!! Style completely broken with bootstrap !!!
    // following style is canceling bootstrap style
    // seems that no effect without bootstrap
    * {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }

    label {
        max-width: none;
        margin-bottom: 0;
    }

</style>
