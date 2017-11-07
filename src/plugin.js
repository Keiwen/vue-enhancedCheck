import { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio, EnhancedToggle } from './main.js'

export default {
	install(Vue, options) {
		Vue.component('EnhancedCheck', EnhancedCheck)
		Vue.component('EnhancedCheckGroup', EnhancedCheckGroup)
		Vue.component('EnhancedCheckRadio', EnhancedCheckRadio)
		Vue.component('EnhancedToggle', EnhancedToggle)
	}
}