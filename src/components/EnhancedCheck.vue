<template>
    <div class="enhancedCheck" :class="computedClass">
        <div>
            <input type="checkbox" :id="id" :name="name" :value="value" @change="inputChange()" :disabled="disabled" v-model="inputModel">
            <label :for="id">{{ label }}</label>
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
          default: 'enhancedCheck'
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
        animate: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          inputModel: this.checked
        }
      },
      computed: {
        computedClass () {
          let computedClass = 'enhancedCheck-' + this.subClass
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

<style>
</style>
