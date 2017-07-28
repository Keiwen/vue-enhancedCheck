# vue-enhanced-check

Enhanced checkboxes /radio input, component for vue 2+.
[Live demo here](https://keiwen.github.io/vue-enhancedCheck/)

> Based on first [enhancedCheck project](https://github.com/Keiwen/enhancedCheck) (CSS/JS)

## Global use
- npm install (work in progress)
- import in your component
```
import { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio } from 'vue-enhanced-check'
```
- declare use
```
export default {
    components: { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio },
    methods: ...
}
```

##Checkbox
Label is prefixed by 'check' icon
```
<enhanced-check label="Checkbox"></enhanced-check>
```
```
<enhanced-check :label="sc_label" :subClass="sc_subclass"
                v-model="sc_model" :disabled="sc_disabled"
                :rounded="sc_rounded" :animate="sc_animate">

</enhanced-check>
```


| Prop | Type | Note
| :--- | :--- | ---: |
| `label` | `String` | **REQUIRED**: by design, label is a main part of the display |
| `subClass` | `String` | Same colors than bootstrap style, possible values are 'default', 'primary', 'success', 'warning', 'danger' |
| `disabled` | `Boolean` | False by default. Prevent clic action but not direct model change |
| `rounded` | `Boolean` | False by default. Rounded border style |
| `animate` | `Boolean` | False by default. Add a transition on style |

As a classic simple checkbox, model bound to check state: true or false


##Checkbox group
```
<enhanced-check-group :label="['First', 'Second', 'Third']"></enhanced-check-group>
```
```
<enhanced-check-group :label="['First', 'Second', 'Third']"
                      :subClass="gc_subclass" v-model="gc_model"
                      :disabled="gc_disabled" :rounded="gc_rounded"
                      :animate="gc_animate" :inline="gc_inline"
                      :combine="gc_combine"
                      :value="[gc_val1, gc_val2, gc_val3]">
    
</enhanced-check-group>
```


| Prop | Type | Note
| :--- | :--- | ---: |
| `label` | `Array` | **REQUIRED** |
| `value` | `Array` | Value for each input. By default equal to label |
| `subClass` | `String` | *Same than checkbox* |
| `disabled` | `Boolean` | *Same than checkbox* |
| `rounded` | `Boolean` | *Same than checkbox* |
| `animate` | `Boolean` | *Same than checkbox* |
| `inline` | `Boolean` | False by default. Turn all input as inline-block |
| `combine` | `Boolean` | False by default. Turn 'check' icon into 'plus' icon |

As classic multiple checkboxes, model bound to array of value from checked input


##Radio
Label is prefixed by 'dot' icon
```
<enhanced-check-radio :label="['Element A', 'Element B', 'Element C']" name="radiotest"></enhanced-check-radio>
```
```
<enhanced-check-radio :label="['Element A', 'Element B', 'Element C']"
                      name="radiotest" :subClass="rc_subclass"
                      v-model="rc_model" :disabled="rc_disabled"
                      :rounded="rc_rounded" :animate="rc_animate"
                      :inline="rc_inline"
                      :value="[rc_val1, rc_val2, rc_val3]">

</enhanced-check-radio>
```


| Prop | Type | Note
| :--- | :--- | ---: |
| `label` | `Array` | **REQUIRED** |
| `value` | `Array` | Value for each input. By default equal to label |
| `subClass` | `String` | *Same than checkbox* |
| `disabled` | `Boolean` | *Same than checkbox* |
| `rounded` | `Boolean` | *Same than checkbox* |
| `animate` | `Boolean` | *Same than checkbox* |
| `inline` | `Boolean` | *Same than checkbox group* |

As classic radio buttons, model bound to value from checked input

##Toggle button
Work in progress
