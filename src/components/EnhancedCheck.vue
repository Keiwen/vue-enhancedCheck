<template>
    <div class="enhancedCheck" :class="computedClass">
        <div>
            <input type="checkbox" :id="generatedId" :name="name" :value="value" @change="inputChange()" :disabled="disabled" v-model="inputModel">
            <label :for="generatedId">{{ label }}</label>
        </div>
    </div>
</template>

<script>

    export default {
      model: {
        prop: 'checked'
      },
      props: {
        label: {
          type: String,
          required: true
        },
        id: {
          type: String,
          default: ''
        },
        checked: {
          default: false
        },
        name: {
          default: ''
        },
        value: {
          default: ''
        },
        subClass: {
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
        },
        animate: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          inputModel: this.checked,
          generatedId: ''
        }
      },
      mounted () {
        if (this.id === '') {
          this.generatedId = 'enhancedCheck_' + Math.random().toString(36).substr(2, 9)
        } else {
          this.generatedId = this.id
        }
      },
      watch: {
        checked: function (newValue) {
          this.inputModel = newValue
        }
      },
      computed: {
        computedClass () {
          let computedClass = 'enhancedCheck-' + this.subClass
          if (this.rounded) computedClass += ' enhancedCheck-rounded'
          if (this.animate) computedClass += ' enhancedCheck-animate'
          return computedClass
        }
      },
      methods: {
        inputChange () {
          this.$emit('input', this.inputModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/common.scss';

</style>
