// Component imports
import EnhancedCheck from './components/EnhancedCheck.vue'
import EnhancedCheckGroup from './components/EnhancedCheckGroup.vue'
import EnhancedCheckRadio from './components/EnhancedCheckRadio.vue'
import EnhancedToggle from './components/EnhancedToggle.vue'
import './styles/common.scss'

// Default export for global usage
const install = (app) => {
  app.component('enhanced-check', EnhancedCheck)
  app.component('enhanced-check-group', EnhancedCheckGroup)
  app.component('enhanced-check-radio', EnhancedCheckRadio)
  app.component('enhanced-toggle', EnhancedToggle)
}
export default install

// Named export for specific usage
export { install, EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio, EnhancedToggle }
