// import EnhancedInput from './EnhancedInput.vue'
import EnhancedCheck from './EnhancedCheck.vue'
import EnhancedCheckGroup from './EnhancedCheckGroup.vue'
import EnhancedCheckRadio from './EnhancedCheckRadio.vue'
// import EnhancedToggle from './EnhancedToggle.vue'

const plugin = {
  install (Vue, options) {
//    Vue.component('EnhancedInput', EnhancedInput)
    Vue.component('EnhancedCheck', EnhancedCheck)
    Vue.component('EnhancedCheckGroup', EnhancedCheckGroup)
    Vue.component('EnhancedCheckRadio', EnhancedCheckRadio)
//    Vue.component('EnhancedToggle', EnhancedToggle)
  }
}

export default plugin
