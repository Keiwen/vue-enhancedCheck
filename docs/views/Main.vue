<template>
    <div class="container">

        <fieldset>
            <legend>Simple checkbox</legend>

            <enhanced-check :label="sc_label" :subClass="sc_subclass" v-model="sc_model"
                            :disabled="sc_disabled" :rounded="sc_rounded" :animate="sc_animate">

            </enhanced-check>
            <br/>
            Model: {{ sc_model }}

            <hr/>

            <label for="sc_label">Label:</label>
            <input type="text" v-model="sc_label" id="sc_label"/>

            <label for="sc_model">Checked:</label>
            <input type="checkbox" v-model="sc_model" id="sc_model"/>

            <label for="sc_disabled">Disabled:</label>
            <input type="checkbox" v-model="sc_disabled" id="sc_disabled"/>

            <label for="sc_rounded">Rounded:</label>
            <input type="checkbox" v-model="sc_rounded" id="sc_rounded"/>

            <label for="sc_animate">Transition:</label>
            <input type="checkbox" v-model="sc_animate" id="sc_animate"/>

            <label for="sc_subclass">Style:</label>
            <select v-model="sc_subclass" id="sc_subclass">
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
            </select>

        </fieldset>

        <br/><br/>

        <fieldset>
            <legend>Combined warning checkboxes</legend>

            <enhanced-check-group :label="['First', 'Second', 'Third']" :subClass="gc_subclass" v-model="gc_model"
                                  :disabled="gc_disabled" :rounded="gc_rounded" :animate="gc_animate"
                                  :inline="gc_inline" :combine="gc_combine" :value="[gc_val1, gc_val2, gc_val3]">
                
            </enhanced-check-group>
            <br/>
            Model: {{ gc_model }}

            <hr/>

            <label for="gc_val1">Value first:</label>
            <input type="text" v-model="gc_val1" id="gc_val1"/>

            <label for="gc_val2">Value second:</label>
            <input type="text" v-model="gc_val2" id="gc_val2"/>

            <label for="gc_val3">Value third:</label>
            <input type="text" v-model="gc_val3" id="gc_val3"/>

            <label for="gc_disabled">Disabled:</label>
            <input type="checkbox" v-model="gc_disabled" id="gc_disabled"/>

            <label for="gc_rounded">Rounded:</label>
            <input type="checkbox" v-model="gc_rounded" id="gc_rounded"/>

            <label for="gc_animate">Transition:</label>
            <input type="checkbox" v-model="gc_animate" id="gc_animate"/>

            <label for="gc_inline">Inline:</label>
            <input type="checkbox" v-model="gc_inline" id="gc_inline"/>

            <label for="gc_combine">Combine:</label>
            <input type="checkbox" v-model="gc_combine" id="gc_combine"/>

            <label for="gc_subclass">Style:</label>
            <select v-model="gc_subclass" id="gc_subclass">
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
            </select>

        </fieldset>

        <br/><br/>

        <fieldset>
            <legend>Radio success buttons</legend>

            <enhanced-check-radio :label="['Element A', 'Element B', 'Element C']" name="radiotest" :subClass="rc_subclass" v-model="rc_model"
                                  :disabled="rc_disabled" :rounded="rc_rounded" :animate="rc_animate"
                                  :inline="rc_inline" :value="[rc_val1, rc_val2, rc_val3]">

            </enhanced-check-radio>
            <br/>
            Model: {{ rc_model }}

            <hr/>

            <label for="rc_model">Model:</label>
            <input type="text" v-model="rc_model" id="rc_model"/>

            <label for="rc_val1">Value first:</label>
            <input type="text" v-model="rc_val1" id="rc_val1"/>

            <label for="rc_val2">Value second:</label>
            <input type="text" v-model="rc_val2" id="rc_val2"/>

            <label for="rc_val3">Value third:</label>
            <input type="text" v-model="rc_val3" id="rc_val3"/>

            <label for="rc_disabled">Disabled:</label>
            <input type="checkbox" v-model="rc_disabled" id="rc_disabled"/>

            <label for="rc_rounded">Rounded:</label>
            <input type="checkbox" v-model="rc_rounded" id="rc_rounded"/>

            <label for="rc_animate">Transition:</label>
            <input type="checkbox" v-model="rc_animate" id="rc_animate"/>

            <label for="rc_inline">Inline:</label>
            <input type="checkbox" v-model="rc_inline" id="rc_inline"/>

            <label for="rc_subclass">Style:</label>
            <select v-model="rc_subclass" id="rc_subclass">
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
            </select>

        </fieldset>


        <br/><br/>

        <fieldset>
            <legend>Checkbox toggle</legend>
            <p><i>Work in progress...</i></p>


        </fieldset>

    </div>
</template>


<script>
  import { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio } from '../../src/main'

  export default {
    components: { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio },
    data () {
      return {
        sc_model: false,
        sc_label: 'Simple',
        sc_disabled: false,
        sc_rounded: false,
        sc_animate: false,
        sc_subclass: 'primary',
        gc_model: ['Second', 'Third'],
        gc_val1: 'First',
        gc_val2: 'Second',
        gc_val3: 'Third',
        gc_disabled: false,
        gc_rounded: false,
        gc_animate: false,
        gc_inline: true,
        gc_combine: true,
        gc_subclass: 'warning',
        rc_model: 'B',
        rc_val1: 'A',
        rc_val2: 'B',
        rc_val3: 'C',
        rc_disabled: false,
        rc_rounded: true,
        rc_animate: true,
        rc_inline: false,
        rc_subclass: 'success'
      }
    }
  }
</script>


<style>
    .container {
        margin-top: 20px;
    }


</style>
