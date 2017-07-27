<template>
    <div class="enhancedCheck" :class="computedClass">
        <div v-for="inputElmt in inputList">
            <input type="radio" :id="inputElmt.id" :name="name" :value="inputElmt.value" :disabled="inputElmt.disabled" @change="inputChange()" v-model="inputModel">
            <label :for="inputElmt.id">{{ inputElmt.label }}</label>
        </div>

    </div>
</template>

<script>

    export default {
      model: {
        prop: 'radioModel'
      },
      props: {
        label: {
          type: Array,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        id: {
          default: 'enhancedCheckRadio'
        },
        value: {
          type: Array,
          default: () => []
        },
        radioModel: {
          default: ''
        },
        subClass: {
          type: String,
          default: 'default'
        },
        disabled: {
          default: false
        },
        inline: {
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
          inputModel: this.radioModel
        }
      },
      computed: {
        inputList () {
          let list = []
          for (let i = 0; i < this.label.length; i++) {
            let idElmt = 0
            if (Array.isArray(this.id)) {
              idElmt = this.id[i]
            } else {
              idElmt = this.id + '_' + i
            }
            let valueElmt = this.value[i]
            if (typeof valueElmt === 'undefined') {
              valueElmt = this.label[i]
            }
            const elmt = {
              id: idElmt,
              label: this.label[i],
              value: valueElmt,
              disabled: this.disabledList[i]
            }
            list.push(elmt)
          }
          return list
        },
        disabledList () {
          return this.generateListFromProp(this.disabled)
        },
        computedClass () {
          let computedClass = 'enhancedCheck-' + this.subClass
          if (this.inline) computedClass += ' enhancedCheck-inline'
          if (this.animate) computedClass += ' enhancedCheck-animate'
          return computedClass
        }
      },
      methods: {
        generateListFromProp (propValue) {
          if (!Array.isArray(propValue)) {
            const elmtCount = this.id.length
            if (elmtCount === 1) return [propValue]
            return new Array(elmtCount).fill(propValue)
          }
          return propValue
        },
        inputChange () {
          this.$emit('input', this.inputModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/common.scss';
</style>
