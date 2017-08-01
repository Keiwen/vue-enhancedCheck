<template>
    <div class="enhancedCheck enhancedToggle" :class="computedClass" :style="style">
        <label :for="id">
            <input type="checkbox" :id="id" :name="name" :value="value" @change="inputChange()" :disabled="disabled" v-model="inputModel" />


            <span class="enhancedToggle-label labelOn" ref="toggleLabelOn">{{ labelOn }}</span>
            <span class="enhancedToggle-switch"></span>
            <span class="enhancedToggle-label labelOff" ref="toggleLabelOff">{{ labelOff }}</span>
        </label>
    </div>
</template>

<script>

  const DEFAULT_WIDTH = 50
  const SWITCH_WIDTH = 30
  const MIN_WIDTH = 50
  const HORIZONTAL_PADDING = 10

    export default {
      model: {
        prop: 'checked'
      },
      props: {
        id: {
          type: String,
          default: 'enhancedToggle'
        },
        checked: {
          default: false
        },
        labelOn: {
          type: String,
          default: ''
        },
        labelOff: {
          type: String,
          default: ''
        },
        name: {
          default: ''
        },
        value: {
          default: ''
        },
        styleOn: {
          type: String,
          default: 'primary'
        },
        styleOff: {
          type: String,
          default: 'default'
        },
        disabled: {
          type: Boolean,
          default: false
        },
        rounded: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          style: {},
          initLabelMaxWidth: 0,
          initLabelMaxChar: 0,
          labelMaxWidth: 0,
          labelMaxChar: 0,
          inputModel: this.checked
        }
      },
      watch: {
        checked: function (newValue) {
          this.inputModel = newValue
        },
        labelOn: function (newValue) {
          this.updateLabels()
        },
        labelOff: function (newValue) {
          this.updateLabels()
        }
      },
      mounted () {
        this.initLabelMaxWidth = this.getLabelMaxWidth();
        this.initLabelMaxChar = this.getLabelMaxChar();
        this.labelMaxWidth = this.initLabelMaxWidth;
        this.labelMaxChar = this.initLabelMaxChar;
        this.computeStyle()
      },
      computed: {
        computedClass () {
          let computedClass = 'enhancedCheck-' + this.styleOff
          if (this.inputModel) {
            computedClass = 'enhancedCheck-' + this.styleOn
            computedClass += ' enhancedCheck-checked'
          }
          if (this.disabled) computedClass += ' enhancedCheck-disabled'
          if (this.rounded) computedClass += ' enhancedCheck-rounded'
          return computedClass
        }
      },
      methods: {
        inputChange () {
          this.$emit('input', this.inputModel)
        },
        getLabelMaxWidth () {
          if (typeof this.$refs.toggleLabelOn === 'undefined') return DEFAULT_WIDTH
          return Math.max(this.$refs.toggleLabelOn.getBoundingClientRect().width, this.$refs.toggleLabelOff.getBoundingClientRect().width) - HORIZONTAL_PADDING
        },
        getLabelMaxChar () {
          return Math.max(this.labelOn.length, this.labelOff.length)
        },
        updateLabels () {
          const newMaxChar = this.getLabelMaxChar();
          if (newMaxChar !== this.labelMaxChar) {
            this.labelMaxWidth = this.initLabelMaxWidth / this.initLabelMaxChar * newMaxChar
            if (this.labelMaxWidth < MIN_WIDTH) this.labelMaxWidth = MIN_WIDTH
            this.computeStyle()
          }
        },
        computeStyle () {
          this.style = {
            '--labelWidth': this.labelMaxWidth + 'px',
            '--switchWidth': SWITCH_WIDTH + 'px',
            '--switchPos': (this.labelMaxWidth + HORIZONTAL_PADDING) + 'px',
            '--toggleWidth': (this.labelMaxWidth + SWITCH_WIDTH/2 + HORIZONTAL_PADDING) + 'px'
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/common.scss';

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


</style>
