# vue-enhanced-check
[![npm](https://img.shields.io/npm/v/vue-enhanced-check.svg)](https://www.npmjs.com/package/vue-enhanced-check)
[![npm](https://img.shields.io/npm/dt/vue-enhanced-check.svg)](https://www.npmjs.com/package/vue-enhanced-check)

Enhanced checkboxes / radio input, component for vue 3. For vue 2, please check 1.5.X releases.

[Live demo here](https://keiwen.github.io/vue-enhancedCheck/)

*Note that unicode is used for 'icons'. Therefore design can change according to your browser. It is still possible to override CSS style (checked and hover styles)*

> Based on first [enhancedCheck project](https://github.com/Keiwen/enhancedCheck) (CSS/JS)

## Global use
- npm install in console
```
npm install --save vue-enhanced-check
```
- import components in your code
```
import { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio, EnhancedToggle } from 'vue-enhanced-check'
```
or only one according to your needs
```
import { EnhancedCheck } from 'vue-enhanced-check'
```
you may also import them globally in your app
```
import { createApp } from "vue";
import vueEnhancedCheck from "vue-enhanced-check";
createApp(App).use(vueEnhancedCheck);
```
- Use components as described below

## Components
### Checkbox
Label is prefixed by 'check' icon
```
<enhanced-check label="Checkbox"></enhanced-check>
```
```
<enhanced-check :label="sc_label" :sub-class="sc_subclass"
                v-model="sc_model" :disabled="sc_disabled"
                :rounded="sc_rounded" :animate="sc_animate"
                id="enhancedCheck" name="" value="">

</enhanced-check>
```


| Prop        | Type | Note |
|:------------| :--- | ---: |
| `label`     | `String` | **REQUIRED**: by design, label is a main part of the display |
| `id`        | `String` | id of input and associated label. |
| `name`      | `String` | name of classic input. Empty by default |
| `value`     | `String` | value of classic input. Empty by default |
| `sub-class` | `String` | Same colors than bootstrap style, possible values are 'default', 'primary', 'success', 'warning', 'danger' |
| `disabled`  | `Boolean` | False by default. Prevent clic action but not direct model change |
| `rounded`   | `Boolean` | False by default. Rounded border style |
| `animate`   | `Boolean` | False by default. Add a transition on style |

As a classic simple checkbox, model bound to check state: true or false


### Checkbox group
```
<enhanced-check-group :label="['First', 'Second', 'Third']"></enhanced-check-group>
```
```
<enhanced-check-group :label="['First', 'Second', 'Third']"
                      :sub-class="gc_subclass" v-model="gc_model"
                      :disabled="gc_disabled" :rounded="gc_rounded"
                      :animate="gc_animate" :inline="gc_inline"
                      :combine="gc_combine"
                      :value="[gc_val1, gc_val2, gc_val3]"
                      id="enhancedCheckGroup" name="">
    
</enhanced-check-group>
```


| Prop        | Type | Note |
|:------------| :--- | ---: |
| `label`     | `Array` | **REQUIRED** |
| `value`     | `Array` | Value for each input. By default equal to label |
| `id`        | `String`/`Array` | id of input and associated label. If string provided, each element id will have a counter as suffix |
| `name`      | `String`/`Array` | name of classic input. Use array to specify different names |
| `sub-class` | `String` | *Same than checkbox* |
| `disabled`  | `Boolean` | *Same than checkbox* |
| `rounded`   | `Boolean` | *Same than checkbox* |
| `animate`   | `Boolean` | *Same than checkbox* |
| `inline`    | `Boolean` | False by default. Turn all input as inline-block |
| `combine`   | `Boolean` | False by default. Turn 'check' icon into 'plus' icon |

As classic multiple checkboxes, model bound to array of value from checked input


### Radio
Label is prefixed by 'dot' icon
```
<enhanced-check-radio :label="['Element A', 'Element B', 'Element C']"></enhanced-check-radio>
```
```
<enhanced-check-radio :label="['Element A', 'Element B', 'Element C']"
                      name="radiotest" :sub-class="rc_subclass"
                      v-model="rc_model" :disabled="rc_disabled"
                      :rounded="rc_rounded" :animate="rc_animate"
                      :inline="rc_inline" id="enhancedCheckRadio" 
                      :value="[rc_val1, rc_val2, rc_val3]">

</enhanced-check-radio>
```


| Prop        | Type | Note |
|:------------| :--- | ---: |
| `label`     | `Array` | **REQUIRED** |
| `name`      | `String` | name of classic input. |
| `id`        | `String`/`Array` | id of input and associated label. If string provided, each element id will have a counter as suffix |
| `value`     | `Array` | Value for each input. By default equal to label |
| `sub-class` | `String` | *Same than checkbox* |
| `disabled`  | `Boolean` | *Same than checkbox* |
| `rounded`   | `Boolean` | *Same than checkbox* |
| `animate`   | `Boolean` | *Same than checkbox* |
| `inline`    | `Boolean` | *Same than checkbox group* |

As classic radio buttons, model bound to value from checked input

### Toggle button
Checkbox is replaced by 2 switching labels, for on and off states
```
<enhanced-toggle></enhanced-check>
```
```
<enhanced-toggle :label-cn="tc_labelOn" :label-off="tc_labelOff"
                 :style-on="tc_styleOn" :style-off="tc_styleOff"
                 v-model="tc_model"
                 :disabled="tc_disabled" :rounded="tc_rounded"
                 id="enhancedToggle" name="">
</enhanced-toggle>
```


| Prop        | Type | Note |
|:------------| :--- | ---: |
| `label-on`  | `String` | Label display for 'on' state (checked). Default is 'On' |
| `label-off` | `String` | Label display for 'off' state (unchecked). Default is 'Off' |
| `style-on`  | `String` | style for 'on' state (checked), see checkbox's subclass. Default is primary |
| `style-off` | `String` | style for 'off' state (unchecked), see checkbox's subclass. Default is default |
| `id`        | `String` | id of input and associated label. |
| `name`      | `String` | *Same than checkbox* |
| `value`     | `String` | *Same than checkbox* |
| `disabled`  | `Boolean` | *Same than checkbox* |
| `rounded`   | `Boolean` | *Same than checkbox* |

As a classic simple checkbox, model bound to check state: true or false

## Override style
### Color usecase
You can define your own check color by adding a specific style

For example, let's define a 'custom' sub class.
```
<enhanced-check label="Custom" sub-class="custom"></enhanced-check>
```

Checkbox will get the class 'enhancedCheck-custom', that you can use in your CSS.
Simple override for checkboxes:
```
.enhancedCheck.enhancedCheck-custom input[type="checkbox"]:checked + label:before {
  background: fuchsia;
  color: white;
}
.enhancedCheck.enhancedCheck-custom input[type="checkbox"]:not(:checked) + label:hover {
  border-color: fuchsia;
}
```

Full less sample:
```
.enhancedCheck.enhancedCheck-custom {
  input[type="radio"], input[type="checkbox"] {
    &:checked + label:before {
      background: fuchsia;
      color: white;
    }
    &:not(:checked) + label:hover {
      border: 1px solid fuchsia;
    }
    &:checked:disabled + label:before {
      background: rosybrown;
    }
    &:not(:checked):disabled + label:hover {
      border: 1px solid rosybrown;
    }
  }
}
```
Of course, you can replace class `.enhancedCheck-custom` by `.enhancedCheck-primary`
in previous example to just override primary color,
instead of create a custom class.

### Icon usecase
You can also override icon used.
For example, the following CSS will use start icons instead of checkmarks
```
.enhancedCheck {
  input[type="checkbox"] {
    &:not(:checked) + label:hover:before {
      content: '\2606';
    }
    &:checked + label:before {
      content: '\2606';
    }
  }
}
```

## Contribution
This library is managed with vue-CLI
- Fork the repository
- Run `npm install`
- You can run `npm run serve`, the script will start the mini demo application
- Do your stuff
- When you're done, run `npm run build` command and commit your work for a pull request.

