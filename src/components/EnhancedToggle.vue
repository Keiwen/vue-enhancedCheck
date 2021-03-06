<template>
    <div class="enhancedCheck enhancedToggle" :class="computedClass" :style="style">
        <label :for="generatedId">
            <input type="checkbox" :id="generatedId" :name="name" :value="value" @change="inputChange()" :disabled="disabled" v-model="inputModel" />


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
      name: 'EnhancedToggle',
      model: {
        prop: 'checked'
      },
      props: {
        id: {
          type: String,
          default: ''
        },
        checked: {
          default: false
        },
        labelOn: {
          type: String,
          default: 'On'
        },
        labelOff: {
          type: String,
          default: 'Off'
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
          inputModel: this.checked,
          generatedId: ''
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
        if (this.id === '') {
          this.generatedId = 'enhancedToggle_' + Math.random().toString(36).substr(2, 9)
        } else {
          this.generatedId = this.id
        }
        this.initLabelMaxWidth = this.getLabelMaxWidth();
        this.initLabelMaxChar = this.getLabelMaxChar();
        this.labelMaxWidth = this.initLabelMaxWidth;
        this.labelMaxChar = this.initLabelMaxChar;        this.computeStyle()
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
